import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Skema e validimit për mesazhin e kontaktit
const formSchema = z.object({
  name: z.string().min(2, { message: "Emri duhet të ketë të paktën 2 karaktere" }),
  email: z.string().email({ message: "Ju lutem vendosni një email të vlefshëm" }),
  subject: z.string().min(5, { message: "Subjekti duhet të ketë të paktën 5 karaktere" }),
  message: z.string().min(10, { message: "Mesazhi duhet të ketë të paktën 10 karaktere" })
});

// Tipi i të dhënave nga forma
type FormValues = z.infer<typeof formSchema>;

// Komponenti i seksionit të kontaktit
const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Inicializimi i formës me react-hook-form dhe validimi me zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Konfigurimi i mutacionit për dërgimin e mesazhit
  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const res = await apiRequest("POST", "/api/comments", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Mesazhi u dërgua me sukses",
        description: "Ne do t'ju kontaktojmë së shpejti. Faleminderit! :>>",
        variant: "default",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Gabim në dërgimin e mesazhit",
        description: error.message || "Diçka shkoi keq. Ju lutem provoni përsëri. :'<",
        variant: "destructive",
      });
    }
  });

  // Funksioni që thirret kur dërgohet forma
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold text-[#1A5276] mb-3">Na Kontaktoni</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Keni pyetje ose keni nevojë për informacion shtesë? Ndihuni të lirë të na kontaktoni duke përdorur formularin më poshtë ose informacionin e dhënë.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 max-w-6xl mx-auto">
          {/* Informacioni i kontaktit */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-[#1A5276] mb-4">
              Informacion Kontakti
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-[#1A5276] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A5276]">Adresa</h4>
                  <p className="text-neutral-600">Rruga Bashkim Kodra, Nr. 4<br />Tiranë, Shqipëri</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-[#1A5276] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A5276]">Numri i Telefonit</h4>
                  <p className="text-neutral-600">(+355) 6x xxx xxxx </p>
                  <p className="text-neutral-600">(+355) 6x xxx xxxx</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-[#1A5276] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A5276]">Email</h4>
                  <p className="text-neutral-600">abdullaketa@gmail.com</p>
                  
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0 bg-[#1A5276] p-2 rounded-full text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#1A5276]">Orari i Punës</h4>
                  <p className="text-neutral-600">E Hënë - E Premte: 8:00 - 14:00</p>
                  <p className="text-neutral-600">E Shtunë- E diel: Mbyllur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Forma e Kontaktit */}
          <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A5276] mb-2">
                  Faleminderit për mesazhin tuaj!
                </h3>
                <p className="text-neutral-600 mb-4">
                  Mesazhi juaj është dërguar me sukses. Do t'ju kontaktojmë së shpejti.
                </p>
                <Button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#1A5276] hover:bg-[#154360]"
                >
                  Dërgo Mesazh Tjetër
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-semibold text-[#1A5276] mb-4">
                  Dërgoni Mesazh
                </h3>
                <p className="text-neutral-600 mb-6">
                  Plotësoni formularin më poshtë dhe do t'ju kontaktojmë sa më shpejt të jetë e mundur.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emri</FormLabel>
                            <FormControl>
                              <Input placeholder="Shkruani emrin tuaj" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Shkruani email-in tuaj" type="email" {...field} />
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
                          <FormLabel>Subjekti</FormLabel>
                          <FormControl>
                            <Input placeholder="Subjekti i mesazhit" {...field} />
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
                          <FormLabel>Mesazhi</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Shkruani mesazhin tuaj këtu..." 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-[#1A5276] hover:bg-[#154360]"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Duke dërguar..." : "Dërgo Mesazhin"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
        
        {/* Mesazhi mbi rrugëtimin e mesazheve private */}
        <div className="max-w-6xl mx-auto mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <div className="mr-3 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-[#1A5276]">Privatësia e Mesazheve Tuaja</h4>
              <p className="text-neutral-600">
                Të gjitha mesazhet e dërguara përmes kësaj forme ruhen në një folder privat dhe mund të shihen vetëm nga stafi i autorizuar i shkollës. 
                Angazhohemi për të ruajtur konfidencialitetin e komunikimit tuaj me ne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;