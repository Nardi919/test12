import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { fileURLToPath } from 'url';
import { fromZodError } from 'zod-validation-error';
import multer from 'multer';
import { rateLimit } from 'express-rate-limit';
import { promisify } from 'util';

// Sigurimi i direktorisë së ngarkimeve (për ESM modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '../public/uploads');

// Krijojmë direktorinë nëse nuk ekziston
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Skema e validimit për të dhënat e imazhit me rregulla më të rrepta
const uploadSchema = z.object({
  fileName: z.string().min(1).max(255).refine(
    name => /^[a-zA-Z0-9_\-\.]+$/.test(name),
    { message: 'Emri i filet duhet të përmbajë vetëm shkronja, numra, viza dhe pika' }
  ),
  fileType: z.string().min(1).max(100).refine(
    type => isValidFileType(type),
    { message: 'Formati i filet nuk lejohet' }
  ),
  fileData: z.string().min(1).max(10 * 1024 * 1024) // Maksimumi 10MB
    .refine(
      data => data.startsWith('data:image/'),
      { message: 'Të dhënat duhet të jenë një imazh i koduar në base64' }
    )
});

// Rate limiter për parandalimin e sulmeve DoS
const uploadLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minuta
  max: 10, // Limit për IP
  standardHeaders: true,
  message: {
    success: false,
    message: "Tejkalim i limitit të ngarkimeve. Ju lutemi prisni 10 minuta."
  }
});

// Konfigurimi i multer për trajtimin e filet të ngarkuara
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    // Gjenero emër të sigurt për file
    const randomName = crypto.randomBytes(16).toString('hex');
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${randomName}${ext}`);
  }
});

// Enhanced filter for file validation with multiple security checks
const fileFilter = (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Log the attempt for security auditing
  const reqIp = _req.ip || _req.socket.remoteAddress || 'unknown';
  console.log(`File upload attempt: ${file.originalname} (${file.mimetype}) from IP: ${reqIp}`);

  // Multiple security validations
  if (!file.originalname || !file.mimetype) {
    return cb(new Error('Missing file information'));
  }
  
  // Check MIME type against whitelist
  const isValidMime = isValidFileType(file.mimetype);
  
  // Check file extension against whitelist
  const isValidExt = hasValidFileExtension(file.originalname);
  
  // Both checks must pass - this prevents content/extension mismatch attacks
  if (isValidMime && isValidExt) {
    cb(null, true);
  } else {
    // Log the rejection with detailed reason for security monitoring
    console.log(`Rejected file: ${file.originalname} - Valid MIME: ${isValidMime}, Valid Extension: ${isValidExt}`);
    cb(new Error('Formati i filet nuk lejohet. Vetëm .jpg, .jpeg, .png, .gif dhe .webp janë të lejuara.'));
  }
};

// Konfigurimi i multer
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
  }
});

/**
 * Enhanced validation of allowed file types with stricter checks
 */
function isValidFileType(fileType: string): boolean {
  // Sanitize the input to prevent MIME type spoofing
  const sanitizedType = (fileType || '').trim().toLowerCase();
  
  // Whitelist of strictly allowed file types
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  // Check against our whitelist with strict comparison
  return validTypes.includes(sanitizedType);
}

/**
 * Additional security check for file extensions
 */
function hasValidFileExtension(filename: string): boolean {
  if (!filename) return false;
  
  // Extract the file extension and convert to lowercase
  const extension = path.extname(filename).toLowerCase();
  
  // Whitelist of allowed extensions
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  
  return allowedExtensions.includes(extension);
}

/**
 * Llogarit hash-in MD5 për të verifikuar integritetin e filet
 */
async function calculateFileHash(filePath: string): Promise<string> {
  const readFile = promisify(fs.readFile);
  const data = await readFile(filePath);
  return crypto.createHash('md5').update(data).digest('hex');
}

/**
 * Kontrollon nëse imazhi është vërtet një imazh duke lexuar signature
 */
async function validateImageSignature(filePath: string): Promise<boolean> {
  const readFile = promisify(fs.readFile);
  const data = await readFile(filePath, { encoding: 'binary' });
  
  // Kontrollo header bytes për formate të ndryshme imazhesh
  const jpegSignature = data.slice(0, 3);
  const pngSignature = data.slice(0, 8);
  const gifSignature87a = data.slice(0, 6);
  const gifSignature89a = data.slice(0, 6);
  
  return (
    jpegSignature === '\xFF\xD8\xFF' || // JPEG
    pngSignature === '\x89PNG\r\n\x1A\n' || // PNG
    gifSignature87a === 'GIF87a' || // GIF87a
    gifSignature89a === 'GIF89a' // GIF89a
  );
}

/**
 * Ruajt një file të ngarkuar nga përdoruesi me siguri të shtuar
 */
async function saveFile(fileData: string, fileType: string): Promise<string> {
  try {
    // Gjenero një emër të sigurt dhe random për file me më shumë entropi
    const randomName = crypto.randomBytes(32).toString('hex');
    const timestamp = Date.now().toString(36);
    const extension = fileType.split('/')[1];
    const fileName = `${randomName}_${timestamp}.${extension}`;
    const filePath = path.join(uploadsDir, fileName);

    // Kontrollo nëse rruga është jashtë direktorisë së lejuar (path traversal protection)
    const resolvedPath = path.resolve(filePath);
    if (!resolvedPath.startsWith(path.resolve(uploadsDir))) {
      throw new Error('Invalid file path detected');
    }

    // Konverto base64 në binary dhe ruaje
    const base64Data = fileData.replace(/^data:.*?;base64,/, '');
    await promisify(fs.writeFile)(filePath, base64Data, 'base64');

    // Kontrollo nëse file është krijuar me sukses
    if (!fs.existsSync(filePath)) {
      throw new Error('File failed to save');
    }

    // Kontrollo madhësinë e filet
    const stats = await promisify(fs.stat)(filePath);
    if (stats.size > 10 * 1024 * 1024) { // 10MB
      await promisify(fs.unlink)(filePath); // Fshij file nëse është shumë i madh
      throw new Error('Imazhi është shumë i madh');
    }

    // Llogarit hash-in e filet për të konfirmuar integritetin
    const fileHash = await calculateFileHash(filePath);
    console.log(`File saved: ${fileName}, Size: ${stats.size} bytes, Hash: ${fileHash}`);

    // Kthen URL-në relative për t'u përdorur në front-end
    return `/uploads/${fileName}`;
  } catch (error) {
    console.error('Error saving file:', error);
    throw error;
  }
}

// Ruteri për ngarkimin e imazheve
export const uploadRouter = Router();

// Routing për ngarkimin e imazheve në format base64
uploadRouter.post('/upload-image', uploadLimiter, async (req: Request, res: Response) => {
  try {
    console.log('Kërkesë e re për ngarkimin e imazhit');
    
    // Log IP për auditim të sigurisë (të sanitizuar për të parandaluar log injection)
    const userIp = (req.ip || req.socket.remoteAddress || 'unknown').replace(/[\n\r]/g, '');
    console.log(`Upload request from IP: ${userIp} at ${new Date().toISOString()}`);
    
    // Validimi i hyrjes më i rreptë
    try {
      const validatedData = uploadSchema.parse(req.body);
      
      // Ruajtja e filet dhe marrja e URL me kontrolle shtesë të sigurisë
      const fileUrl = await saveFile(validatedData.fileData, validatedData.fileType);
      
      console.log('Imazhi u ngarkua me sukses:', fileUrl);
      
      // Kthehem përgjigjen me URL-në e imazhit të ngarkuar
      res.status(200).json({
        success: true,
        url: fileUrl
      });
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const readableError = fromZodError(validationError);
        return res.status(400).json({
          success: false,
          message: 'Validimi i të dhënave dështoi',
          errors: readableError.message
        });
      }
      throw validationError;
    }
  } catch (error) {
    console.error('Gabim në ngarkimin e imazhit:', error);
    
    res.status(500).json({
      success: false,
      message: 'Ka ndodhur një gabim gjatë ngarkimit të imazhit. Ju lutemi provoni përsëri.'
    });
  }
});

// Routing alternativ për ngarkimin tradicional të filet (form multipart)
uploadRouter.post('/upload-image-file', uploadLimiter, (req: Request, res: Response) => {
  // Përdorim multer për të trajtuar ngarkimin e filet
  const singleUpload = upload.single('image');
  
  singleUpload(req, res, async (err) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(400).json({
        success: false,
        message: err.message || 'Gabim në ngarkimin e filet'
      });
    }
    
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Nuk u gjet asnjë file'
        });
      }
      
      // Kontrollo nëse file është vërtet një imazh
      const isValidImage = await validateImageSignature(req.file.path);
      if (!isValidImage) {
        // Fshij file nëse nuk është imazh i vlefshëm
        await promisify(fs.unlink)(req.file.path);
        return res.status(400).json({
          success: false,
          message: 'File i ngarkuar nuk është një imazh i vlefshëm'
        });
      }
      
      // Kthehem përgjigjen me URL-në e imazhit të ngarkuar
      const fileUrl = `/uploads/${req.file.filename}`;
      res.status(200).json({
        success: true,
        url: fileUrl,
        fileName: req.file.filename,
        size: req.file.size
      });
    } catch (error) {
      console.error('Error during file verification:', error);
      // Fshij file në rast gabimi
      if (req.file) {
        try {
          await promisify(fs.unlink)(req.file.path);
        } catch (unlinkError) {
          console.error('Error deleting file:', unlinkError);
        }
      }
      
      res.status(500).json({
        success: false,
        message: 'Ka ndodhur një gabim gjatë procesimit të imazhit'
      });
    }
  });
});

export default uploadRouter;