import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DayContentProps } from "react-day-picker";
import SchoolLogo from "@/components/SchoolLogo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { queryClient, getQueryFn } from "@/lib/queryClient";

interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  eventType: string;
  eventDate: string | Date;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: number;
}

interface FormattedCalendarEvent {
  date: Date;
  title: string;
  type: "holiday" | "activity" | "exam";
  description: string;
  id?: number; // Added ID for original events
}

interface CalendarProps {
  isAuthenticated?: boolean;
}

export default function Calendar({ isAuthenticated = false }: { isAuthenticated?: boolean }) {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDayEvents, setSelectedDayEvents] = useState<FormattedCalendarEvent[]>([]);
  const [events, setEvents] = useState<FormattedCalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAddEventDialogOpen, setIsAddEventDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    eventType: "activity",
    eventDate: new Date().toISOString().split("T")[0]
  });

  // Fetch calendar events from API
  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/calendar-events");

      if (!response.ok) {
        throw new Error("Failed to fetch calendar events");
      }

      const data = await response.json();

      if (data.success && data.data) {
        // Format API events to match our UI format
        const formattedEvents: FormattedCalendarEvent[] = data.data.map((event: CalendarEvent) => ({
          id: event.id,
          date: new Date(event.eventDate),
          title: event.title,
          type: event.eventType as "holiday" | "activity" | "exam",
          description: event.description
        }));

        setEvents(formattedEvents);
      } else {
        throw new Error("Invalid data format from API");
      }

      setErrorMessage(null);
    } catch (error) {
      console.error("Error fetching calendar events:", error);
      setErrorMessage("Gabim në marrjen e të dhënave të kalendarit. Duke përdorur të dhëna testuese.");

      // Fallback to sample data if API fails
      const sampleEvents: FormattedCalendarEvent[] = [
        {
          date: new Date(2025, 2, 31), // Pashket
          title: "Pashket",
          type: "holiday",
          description: "Festimi i ditës së Pashkeve Katolike"
        },
        {
          date: new Date(2025, 4, 1), // May 1, 2025
          title: "Dita e Punëtorëve",
          type: "holiday",
          description: "Festë kombëtare - Shkolla e mbyllur"
        },
        {
          date: new Date(2025, 5, 1), // June 1, 2025
          title: "Dita e Fëmijëve",
          type: "activity",
          description: "Aktivitete të ndryshme për ditën e fëmijëve"
        },
        {
          date: new Date(2025, 5, 15), // June 15, 2025
          title: "Ceremonia e Diplomimit",
          type: "activity",
          description: "Ceremonia e diplomimit për klasat e 12-ta"
        }
      ];

      setEvents(sampleEvents);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchEvents();
  }, []);

  // Update selected day events when date or events change
  useEffect(() => {
    if (date) {
      const dayEvents = events.filter(event => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear()
      );
      setSelectedDayEvents(dayEvents);
    } else {
      setSelectedDayEvents([]);
    }
  }, [date, events]);

  // Reset new event date when selected date changes
  useEffect(() => {
    if (date) {
      setNewEvent(prev => ({
        ...prev,
        eventDate: date.toISOString().split("T")[0]
      }));
    }
  }, [date]);

  // Function to get events for a specific date (used for highlighting dates with events)
  const getDayEvents = (day: Date) => {
    return events.filter(event => 
      event.date.getDate() === day.getDate() && 
      event.date.getMonth() === day.getMonth() && 
      event.date.getFullYear() === day.getFullYear()
    );
  };


  // Event submission handler
  const handleAddEvent = async () => {
    try {
      // Basic validation
      if (!newEvent.title || !newEvent.description || !newEvent.eventDate) {
        toast({
          title: "Të dhëna të pakompletuara",
          description: "Ju lutemi plotësoni të gjitha fushat e nevojshme.",
          variant: "destructive",
        });
        return;
      }

      // Submit the new event to API
      const response = await fetch("/api/calendar-events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Ngjarja u shtua me sukses",
          description: "Ngjarja e re tani është e disponueshme në kalendar.",
          variant: "default",
        });

        // Reset form
        setNewEvent({
          title: "",
          description: "",
          eventType: "activity",
          eventDate: date ? date.toISOString().split("T")[0] : new Date().toISOString().split("T")[0]
        });

        // Close dialog and refresh events
        setIsAddEventDialogOpen(false);
        fetchEvents();
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error adding event:", error);
      toast({
        title: "Gabim",
        description: "Ndodhi një gabim gjatë shtimit të ngjarjes. Ju lutemi provoni përsëri.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kalendari Shkollor</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Shiko të gjitha aktivitetet, pushimet dhe ngjarjet shkollore për vitin akademik
          </p>
        </motion.div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center items-center mb-8">
            <div className="w-10 h-10 border-4 border-t-[#26a69a] border-r-transparent border-b-[#7e57c2] border-l-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-gray-400">Duke ngarkuar kalendarin...</span>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div className="bg-red-500/10 text-red-400 p-4 rounded-lg mb-8 text-center">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 bg-[#1e1e1e] rounded-xl p-6 shadow-lg"
          >
            {/* Calendar management buttons for admin */}
            {/* Academic Calendar Categories */}
<div className="mb-6 flex gap-4 flex-wrap">
  <button className="px-4 py-2 bg-blue-500 text-white rounded">Provimet</button>
  <button className="px-4 py-2 bg-green-500 text-white rounded">Aktivitetet</button>
  <button className="px-4 py-2 bg-purple-500 text-white rounded">Pushimet</button>
  <button className="px-4 py-2 bg-amber-500 text-white rounded">Eventi Shkollor</button>
</div>

            

            <CalendarUI
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md bg-[#1e1e1e] border-[#333] text-white"
              modifiers={{
                holiday: events.filter(event => event.type === "holiday").map(event => event.date),
                test: events.filter(event => event.type === "test").map(event => event.date),
                trip: events.filter(event => event.type === "trip").map(event => event.date),
                exam: events.filter(event => event.type === "exam").map(event => event.date),
                meeting: events.filter(event => event.type === "meeting").map(event => event.date),
                event: events.filter(event => event.type === "event").map(event => event.date),
              }}
              modifiersStyles={{
                holiday: { 
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  color: "rgb(239, 68, 68)",
                  fontWeight: "bold"
                },
                test: { 
                  backgroundColor: "rgba(147, 51, 234, 0.15)",
                  color: "rgb(147, 51, 234)",
                  fontWeight: "bold"
                },
                trip: { 
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  color: "rgb(59, 130, 246)",
                  fontWeight: "bold"
                },
                exam: { 
                  backgroundColor: "rgba(245, 158, 11, 0.15)",
                  color: "rgb(245, 158, 11)",
                  fontWeight: "bold"
                },
                meeting: { 
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "rgb(16, 185, 129)",
                  fontWeight: "bold"
                },
                event: { 
                  backgroundColor: "rgba(236, 72, 153, 0.15)",
                  color: "rgb(236, 72, 153)",
                  fontWeight: "bold"
                },
              }}
              components={{
                DayContent: (props: DayContentProps) => {
                  const dayEvents = getDayEvents(props.date);
                  return (
                    <div className="relative">
                      <div>{props.date.getDate()}</div>
                      {dayEvents.length > 0 && (
                        <div className="flex absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                          {dayEvents.slice(0, 3).map((event, i) => (
                            <div 
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                                event.type === 'holiday' ? 'bg-red-500' : 
                                event.type === 'activity' ? 'bg-[#26a69a]' : 'bg-amber-500'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                },
              }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 bg-[#1e1e1e] rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-white mb-4">
              {date ? date.toLocaleDateString('sq-AL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Zgjidhni një datë'}
            </h2>

            {selectedDayEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDayEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-[#252525] p-4 rounded-lg border-l-4 border-opacity-80"
                    style={{ 
                      borderColor: event.type === 'holiday' ? 'rgb(239, 68, 68)' : 
                                  event.type === 'activity' ? 'rgb(38, 166, 154)' : 'rgb(245, 158, 11)' 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-white">{event.title}</h3>
                      <Badge 
                        className={`${
                          event.type === 'holiday' ? 'bg-red-500/10 text-red-500' : 
                          event.type === 'activity' ? 'bg-[#26a69a]/10 text-[#26a69a]' : 
                          'bg-amber-500/10 text-amber-500'
                        }`}
                      >
                        {event.type === 'holiday' ? 'Pushim' : 
                         event.type === 'activity' ? 'Aktivitet' : 'Provim'}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm">{event.description}</p>

                    {/* Admin delete button */}
                    {isAuthenticated && event.id && (
                      <div className="mt-3 flex justify-end">
                        <Button
                          variant="destructive"
                          size="sm"
                          className="h-7 px-2 text-xs"
                          onClick={async () => {
                            try {
                              // Delete the event
                              const response = await fetch(`/api/calendar-events/${event.id}`, {
                                method: "DELETE",
                                headers: {

                                },
                              });

                              if (!response.ok) {
                                throw new Error("Failed to delete event");
                              }

                              const data = await response.json();

                              if (data.success) {
                                toast({
                                  title: "Ngjarja u fshi me sukses",
                                  description: "Ngjarja u hoq nga kalendari.",
                                  variant: "default",
                                });

                                // Refresh events
                                fetchEvents();
                              } else {
                                throw new Error(data.message || "Unknown error");
                              }
                            } catch (error) {
                              console.error("Error deleting event:", error);
                              toast({
                                title: "Gabim",
                                description: "Ndodhi një gabim gjatë fshirjes së ngjarjes. Ju lutemi provoni përsëri.",
                                variant: "destructive",
                              });
                            }
                          }}
                        >
                          Fshi
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 italic">Nuk ka ngjarje për datën e zgjedhur</p>
            )}

            <div className="mt-6 pt-4 border-t border-[#333]">
              <h3 className="font-semibold text-white mb-3">Legjenda:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#26a69a] mr-2"></div>
                  <span className="text-sm text-gray-300">Aktivitete</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Pushime</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Provime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Add event dialog */}
      <Dialog open={isAddEventDialogOpen} onOpenChange={setIsAddEventDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gray-800 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-teal-400">Shto Aktivitet të Ri</DialogTitle>
            <DialogDescription className="text-gray-400">
              Plotësoni detajet e aktivitetit të ri. Kjo do të shfaqet në kalendarin e shkollës për të gjithë nxënësit dhe stafin.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="title" className="text-sm font-medium text-gray-300">
                  Titulli i Aktivitetit
                </label>
                <span className="text-xs text-gray-500">p.sh. "Mbledhje e Stafit", "Ekskursion"</span>
              </div>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                placeholder="Titulli i ngjarjes"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-300">
                Përshkrimi
              </label>
              <Textarea
                id="description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                placeholder="Përshkrimi i ngjarjes"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-24"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="type" className="text-sm font-medium text-gray-300">
                Lloji i Ngjarjes
              </label>
              <Select
                value={newEvent.eventType}
                onValueChange={(value) => setNewEvent({...newEvent, eventType: value})}
              >
                <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Zgjidhni llojin e ngjarjes" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="activity" className="text-[#26a69a]">Aktivitet</SelectItem>
                  <SelectItem value="holiday" className="text-red-500">Pushim</SelectItem>
                  <SelectItem value="exam" className="text-amber-500">Provim</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium text-gray-300">
                Data
              </label>
              <Input
                id="date"
                type="date"
                value={newEvent.eventDate}
                onChange={(e) => setNewEvent({...newEvent, eventDate: e.target.value})}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>

          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                Anulo
              </Button>
            </DialogClose>

            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={handleAddEvent}
            >
              Shto Ngjarjen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}