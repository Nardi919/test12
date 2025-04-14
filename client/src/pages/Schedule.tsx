import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const CLASSES = ["Klasa 10-A", "Klasa 10-B", "Klasa 10-C", "Klasa 11-A", "Klasa 11-B", "Klasa 11-C", "Klasa 12-A", "Klasa 12-B", "Klasa 12-C"] as const;
type ClassType = typeof CLASSES[number];

const DAYS = ["E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte"] as const;
type DayType = typeof DAYS[number];

// Define the schedule period type
interface SchedulePeriod {
  time: string;
  subject: string;
  teacher: string;
  
}

// Define the type for the schedule data structure
type ScheduleDataType = {
  [key in ClassType]: {
    [key in DayType]?: SchedulePeriod[];
  };
};

// Sample schedule data with proper typing
const scheduleData: ScheduleDataType = {
  "Klasa 10-A": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ], 
  },
  "Klasa 10-B": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ], 
  },
  // Class 10-C
  "Klasa 10-C": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ], 
  },
  // Class 11-A
  "Klasa 11-A": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ], 
    // Adding just Monday for brevity, would repeat for all days
  },
  // Class 11-B
  "Klasa 11-B": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ],
    // Adding just Monday for brevity, would repeat for all days
  },
  // Class 11-C
  "Klasa 11-C": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ],
  },
  // Class 12-A
  "Klasa 12-A": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ],
    // Adding just Monday for brevity, would repeat for all days
  },
  // Class 12-B
  "Klasa 12-B": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ],
    // Adding just Monday for brevity, would repeat for all days
  },
  // Class 12-C
  "Klasa 12-C": {
    "E Hënë": [
      { time: "08:00 - 08:45", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "08:50 - 09:35", subject: "Biologji", teacher: "Danila Shehu" },
      { time: "09:45 - 10:30", subject: "Qytetari", teacher: "Ina" },
      { time: "10:35 - 11:20", subject: "Qytetari", teacher: "Ina" },
      { time: "11:30 - 12:15", subject: "Fizikë", teacher: "Armando" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
    ],
    "E Martë": [
      { time: "08:00 - 08:45", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "08:50 - 09:35", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "09:45 - 10:30", subject: "TIK", teacher: "Razi Basha" },
      { time: "10:35 - 11:20", subject: "TIK", teacher: "Razi Basha" },
      { time: "11:30 - 12:15", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "12:20 - 13:05", subject: "Letërsi", teacher: "Vetetima Prendi" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Eneida" },
    ],
    "E Mërkurë": [
      { time: "08:00 - 08:45", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "08:50 - 09:35", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "09:45 - 10:30", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "10:35 - 11:20", subject: "Frëngjisht", teacher: "Sidorela" },
      { time: "11:30 - 12:15", subject: "Histori", teacher: "Erjol Kuqo" },
      { time: "12:20 - 13:05", subject: "Histori", teacher: "Erjol Kuqo" },
    ],
    "E Enjte": [
      { time: "08:00 - 08:45", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "08:50 - 09:35", subject: "Gjeografi", teacher: "Enkeleda" },
      { time: "09:45 - 10:30", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "10:35 - 11:20", subject: "Gjuhë Shqipe", teacher: "Vetetima Prendi" },
      { time: "11:30 - 12:15", subject: "Anglisht", teacher: "Joana Katroshi" },
      { time: "12:20 - 13:05", subject: "Fizikë", teacher: "Armando" },
      { time: "13:10 - 13:55", subject: "Modul", teacher: "Razi Basha" },
    ],
    "E Premte": [
      { time: "08:00 - 08:45", subject: "Kimi", teacher: "Jonida" },
      { time: "08:50 - 09:35", subject: "Kimi", teacher: "Jonida" },
      { time: "09:45 - 10:30", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "10:35 - 11:20", subject: "Edukimi Fizik", teacher: "Gazi" },
      { time: "11:30 - 12:15", subject: "Matematikë", teacher: "Gjena Toska" },
      { time: "12:20 - 13:05", subject: "Matematikë", teacher: "Gjena Toska" },
    ],
  }
};

export default function Schedule() {
  const [selectedClass, setSelectedClass] = useState<ClassType>(CLASSES[0]);
  const [selectedDay, setSelectedDay] = useState<DayType>(DAYS[0]);
  
  const schedule: SchedulePeriod[] = scheduleData[selectedClass]?.[selectedDay] || [];
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-64 h-64 bg-[#26a69a] bg-opacity-5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-[#7e57c2] bg-opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading 
            title="Orari i Lëndëve" 
            subtitle="Orari i lëndëve sipas klasave dhe ditëve të javës"
          />
          
          <div className="mt-8 bg-[#121212] rounded-xl p-6 shadow-lg">
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Zgjidhni Klasën</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {CLASSES.map((cls) => (
                    <button
                      key={cls}
                      className={`py-2 px-4 rounded-md transition-colors ${
                        selectedClass === cls 
                          ? "bg-[#26a69a] text-white" 
                          : "bg-[#2d2d2d] text-[#c0c0c0] hover:bg-[#3d3d3d]"
                      }`}
                      onClick={() => setSelectedClass(cls)}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Zgjidhni Ditën</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {DAYS.map((day) => (
                    <button
                      key={day}
                      className={`py-2 px-4 rounded-md transition-colors ${
                        selectedDay === day 
                          ? "bg-[#7e57c2] text-white" 
                          : "bg-[#2d2d2d] text-[#c0c0c0] hover:bg-[#3d3d3d]"
                      }`}
                      onClick={() => setSelectedDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">{selectedClass} • {selectedDay}</h3>
                <div className="flex space-x-2">
                  <button className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white p-2 rounded-md transition-colors">
                    <i className="fas fa-print"></i>
                  </button>
                  <button 
                    onClick={() => {
                      const schedule = scheduleData[selectedClass]?.[selectedDay] || [];
                      const csvContent = [
                        ['Ora', 'Lënda', 'Mësuesi', 'Klasa'],
                        ...schedule.map(period => [
                          period.time,
                          period.subject,
                          period.teacher,
                        
                        ])
                      ].map(row => row.join(',')).join('\n');

                      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                      const link = document.createElement('a');
                      link.href = URL.createObjectURL(blob);
                      link.download = `orari_${selectedClass}_${selectedDay}.csv`;
                      link.click();
                      URL.revokeObjectURL(link.href);
                    }}
                    className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white p-2 rounded-md transition-colors"
                    title="Shkarko orarin"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-[#1e1e1e] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left font-medium">Ora</th>
                      <th className="py-3 px-4 text-left font-medium">Lënda</th>
                      <th className="py-3 px-4 text-left font-medium">Mësuesi</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.length > 0 ? (
                      schedule.map((period: SchedulePeriod, index: number) => (
                        <motion.tr 
                          key={index}
                          className={`border-b border-[#2d2d2d] ${index % 2 === 0 ? 'bg-[#191919]' : 'bg-[#121212]'}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <td className="py-3 px-4 text-[#c0c0c0]">{period.time}</td>
                          <td className="py-3 px-4">
                            <span className="text-white font-medium">{period.subject}</span>
                          </td>
                          <td className="py-3 px-4 text-[#c0c0c0]">{period.teacher}</td>
                          
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="py-4 px-4 text-center text-[#c0c0c0]">
                          Nuk ka informacion për orarin e zgjedhur.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-[#c0c0c0] text-sm">
                <p><i className="fas fa-info-circle text-[#26a69a] mr-2"></i> Orari mund të ndryshojë. Ju lutemi kontrolloni rregullisht për përditësime.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#121212] rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-[#26a69a] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bell text-[#26a69a] text-lg"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Zilja e Shkollës</h4>
              <ul className="space-y-3 text-[#c0c0c0]">
                <li className="flex justify-between">
                  <span>Zilja e 1-rë:</span>
                  <span>08:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Pushimi i shkurtër:</span>
                  <span>5 minuta</span>
                </li>
                <li className="flex justify-between">
                  <span>Pushimi i gjatë:</span>
                  <span>15 minuta</span>
                </li>
                <li className="flex justify-between">
                  <span>Mbarimi i orëve:</span>
                  <span>13:05</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#121212] rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-[#7e57c2] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-calendar-alt text-[#7e57c2] text-lg"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Periudhat Mësimore</h4>
              <ul className="space-y-3 text-[#c0c0c0]">
                <li className="flex justify-between">
                  <span>Periudha e 1-rë:</span>
                  <span>12 Shtator - Dhjetor</span>
                </li>
                <li className="flex justify-between">
                  <span>Periudha e 2-të:</span>
                  <span>Janar - Mars</span>
                </li>
                <li className="flex justify-between">
                  <span>Periudha e 3-të:</span>
                  <span>Prill - Qershor</span>
                </li>
                
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#121212] rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-[#FF9800] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-book text-[#FF9800] text-lg"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Testet dhe Provimet</h4>
              <ul className="space-y-3 text-[#c0c0c0]">
                <li className="flex items-center text-[#FF9800]">
                  <i className="fas fa-circle text-xs mr-2"></i>
                  <span>Provimet gjysmë-vjetore: 1-15 Shkurt</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-xs mr-2"></i>
                  <span>Provimet vjetore: 1-15 Qershor</span>
                </li>
                <li className="flex items-center text-[#26a69a]">
                  <i className="fas fa-circle text-xs mr-2"></i>
                  <span>Provimet e maturës: Qershor-Korrik</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-xs mr-2"></i>
                  <span>Testet tremujore: Shiko kalendarin shkollor</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="mt-16">
            <motion.div 
              className="bg-gradient-to-r from-[#7e57c2] to-[#26a69a] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8 md:flex items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Kalendari Shkollor</h3>
                  <p className="text-white text-opacity-90 max-w-xl">
                    Shiko kalendarin e plotë shkollor me ditët pushim, aktivitetet, provimet dhe eventet e rëndësishme të vitit akademik.
                  </p>
                </div>
                <div>
                  <a 
                    href="#" 
                    className="inline-block bg-white text-[#7e57c2] hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105"
                  >
                    <i className="fas fa-calendar-day mr-2"></i> Shiko Kalendarin
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}