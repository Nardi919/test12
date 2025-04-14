
export interface NewsItem {
  id: number;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  description: string;
  image: string;
  content?: string; // Full article content
  author?: string;
  tags?: string[];
  relatedNews?: number[]; // IDs of related news articles
}

export const news: NewsItem[] = [
  {
    id: 1,
    category: "Njoftim",
    categoryColor: "#4CAF50",
    date: "Prill 2025",
    title: " Website i Ri i Shkollës Sonë",
    description: "Shkolla jonë tani ka një website të ri, të dizenjuar me kujdes për t’u ofruar nxënësve, mësuesve dhe prindërve një platformë të lehtë për t’u përdorur. Kjo arritje përfaqëson një hap të rëndësishëm për përmirësimin e komunikimit dhe ndarjen e informacionit brenda komunitetit tonë shkollor.",
    image: "https://i.imgur.com/s3v6OMx.png",
    author: "Koordinatori i Projekteve",
    tags: ["Mjedisi", "Projekt", "Kombëtar"]
  },
  {
    id: 2,
    category: "Njoftim",
    categoryColor: "#26a69a",
    date: "22 Shtator 2023",
    title: "Pergatitja per provimet Matura 2025",
    description: "Shkolla jonë ka nisur përgatitjet intensive për provimet e Maturës 2025, duke ofruar mbështetje maksimale për të siguruar suksesin e nxënësve tanë!",
    image: "https://i.imgur.com/TEn2okx.png",
    author: "Administrata e Shkollës",
    tags: ["Matura", "Rezultate", "Provime"],
    content: `Publikohen rezultatet e provimeve të Maturës Shtetërore 2023. Nxënësit e shkollës sonë kanë arritur rezultate mbresëlënëse me një mesatare prej 8.7. Këto rezultate reflektojnë punën e palodhur të nxënësve dhe mësuesve tanë gjatë gjithë vitit akademik...`
  },
  {
    id: 3,
    category: "Aktivitet",
    categoryColor: "#7e57c2",
    date: "15 Shtator 2023",
    title: "Pjessmarrja ne Olimipada",
    description: "Shkolla jonë ka marrë pjesë me sukses në Olimpiadën Kombëtare, duke dëshmuar arritjet dhe përkushtimin e nxënësve tanë drejt ekselencës!",
    image: "https://i.imgur.com/DhnteCI.png",
    author: "Admin",
    tags: ["Olimpiadë", "Pjesmarrje", "Çmime"]
  },
  {
    id: 4,
    category: "Projekt",
    categoryColor: "#4CAF50",
    date: "Prill 2025",
    title: "Projekt i Ri: 'Art dhe Zeje'",
    description: "Programi kombëtar “Art dhe Zeje” është një prej programeve që lindi dy vote më parë dhe që ka bërë të mundur që në 200 shkolla në të gjithë vendin nga veriu në jug ne të mundemi që të stimulojmë dhe promovojmë kreativitetin e fëmijëve.",
    image: "https://i.imgur.com/gwVBnoG.png",
    author: "Koordinatori i Projekteve",
    tags: ["Mjedisi", "Projekt", "Kombëtar"]
  }
];

// Helper function to add new news
export const addNews = (newsItem: Omit<NewsItem, "id">): NewsItem => {
  const newId = Math.max(...news.map(n => n.id)) + 1;
  const newNewsItem = { ...newsItem, id: newId };
  news.push(newNewsItem);
  return newNewsItem;
};

// Helper function to delete news by ID
export const deleteNews = (id: number): boolean => {
  const initialLength = news.length;
  const index = news.findIndex(item => item.id === id);
  
  if (index !== -1) {
    news.splice(index, 1);
    return news.length < initialLength;
  }
  
  return false;
};
