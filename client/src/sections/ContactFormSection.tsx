import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { insertCommentSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion, useAnimation } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animation-variants";
import { Mail, Phone, MapPin, Send, User, Mail as MailIcon, MessageSquare } from "lucide-react";

// Reuse the insertCommentSchema from shared schema but add client-side validation messages
const formSchema = insertCommentSchema.extend({
  name: z.string().min(2, { message: "Emri duhet të ketë të paktën 2 karaktere" }),
  email: z.string().email({ message: "Ju lutem vendosni një email të vlefshëm" }),
  subject: z.string().min(5, { message: "Subjekti duhet të ketë të paktën 5 karaktere" }),
  message: z.string().min(10, { message: "Mesazhi duhet të ketë të paktën 10 karaktere" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactFormSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const confettiRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Reset success state when form is interacted with again
  useEffect(() => {
    const subscription = form.watch(() => {
      if (isSuccess) setIsSuccess(false);
    });
    return () => subscription.unsubscribe();
  }, [form, isSuccess]);

  // Create confetti effect after successful submission
  useEffect(() => {
    if (isSuccess && confettiRef.current) {
      const createConfetti = () => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.opacity = '0';

        confettiRef.current?.appendChild(confetti);

        setTimeout(() => {
          confetti.style.opacity = '1';
          confetti.style.transform = `translate(-50%, ${Math.random() * 100 + 100}px) rotate(${Math.random() * 360}deg)`;
        }, 10);

        setTimeout(() => {
          confetti.style.opacity = '0';
        }, 3000);

        setTimeout(() => {
          confetti.remove();
        }, 4000);
      };

      // Create multiple confetti pieces
      for (let i = 0; i < 50; i++) {
        setTimeout(createConfetti, i * 50);
      }
    }
  }, [isSuccess]);

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitting(true);

      // Animate button while submitting
      controls.start({
        scale: [1, 0.95, 1.05, 1],
        transition: { duration: 0.5 }
      });

      // Use the API request helper to send the message to the database
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast({ 
          title: "Sukses!", 
          description: "Mesazhi juaj u dërgua me sukses dhe u ruajt në databazë. Stafi do ta shqyrtojë së shpejti.", 
          variant: "default" 
        });
        form.reset();
        setIsSuccess(true);

        // Animate success notification
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 0.5 }
        });
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast({ 
        title: "Gabim!", 
        description: "Dërgimi dështoi. Provoni përsëri!", 
        variant: "destructive" 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div ref={confettiRef} className="relative">
          {/* Success animation container */}
          {isSuccess && (
            <motion.div 
              className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl text-green-500 animate-pulse">✓</div>
            </motion.div>
          )}

          {/* Section heading */}
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                Na Kontaktoni
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Jemi këtu për t'ju dëgjuar. Plotësoni formularin e mëposhtëm për të na dërguar një mesazh 
              ose përdorni një nga metodat alternative të kontaktit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact information */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-900 dark:bg-black rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-semibold text-gray-100 dark:text-white mb-6">
                  Informacionet e Kontaktit
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-white">Email</h4>
                      <p className="mt-1 text-sm text-gray-100">abdullaketa@yahoo.com</p>
                    </div>
                  </div>

                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-white">Adresa</h4>
                      <p className="mt-1 text-sm text-gray-200">Rruga 4 Bashkim Kodra, Shkozë, Tiranë</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-white-700 dark:text-white-700">Jemi ne dispozicion per cdo mesazh qe dergoni ne cdo moment te mundshem !</span>
                      <div> 
                      </div>                     
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-x-3 flex justify-center">
                  <a href="https://www.facebook.com/abdullaketa.27/" className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/gjimnaziabdullaketa/?__pwa=1" className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 transition">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>                  
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="border border-gray-700/30 bg-gradient-to-br from-gray-900/90 via-gray-800/95 to-gray-950 backdrop-blur-sm shadow-2xl overflow-hidden">
                <CardHeader className="pb-4 border-b border-gray-700/50">
                  <CardTitle className="text-2xl font-bold text-white">
                    Dërgoni një Mesazh
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Plotësoni të gjitha fushat e kërkuara për të na kontaktuar
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center space-x-2">
                                <User size={16} className="text-emerald-600 dark:text-emerald-400" />
                                <span>Emri</span>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Emri juaj" 
                                  {...field} 
                                  className="border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center space-x-2">
                                <MailIcon size={16} className="text-emerald-600 dark:text-emerald-400" />
                                <span>Email</span>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Email-i juaj" 
                                  type="email" 
                                  {...field} 
                                  className="border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all" 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center space-x-2">
                              <MessageSquare size={16} className="text-emerald-600 dark:text-emerald-400" />
                              <span>Subjekti</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Subjekti i mesazhit" 
                                {...field} 
                                className="border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center space-x-2">
                              <MessageSquare size={16} className="text-emerald-600 dark:text-emerald-400" />
                              <span>Mesazhi</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Shkruani mesazhin tuaj këtu..." 
                                className="min-h-[150px] resize-none border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-2">
                        <motion.div
                          animate={controls}
                        >
                          <Button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-medium rounded-md py-3 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                            disabled={submitting}
                          >
                            {submitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Duke dërguar...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <Send size={18} className="mr-2" />
                                Dërgo Mesazhin
                              </span>
                            )}
                          </Button>
                        </motion.div>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CSS for confetti animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .confetti {
          position: absolute;
          top: 0;
          left: 50%;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          transform: translate(-50%, 0) rotate(0);
          transition: transform 5s ease-out, opacity 4s ease-out;
        }
        `
      }} />
    </section>
  );
}