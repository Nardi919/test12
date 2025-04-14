export interface SectionItem {
  title: string;
  description: string;
  icon: string;
  image: string;
  type: string;
  contentTitle: string;
  contentItems?: string[];
  activities?: Array<{icon: string, name: string}>;
  contentLink?: string;
  buttonText?: string;
  description2?: string;
  schedule?: {title: string, time: string};
  trophies?: string;
  serviceItems?: Array<{icon: string, text: string}>;
}

export const sections: SectionItem[] = [
  {
    title: "Jeta Studentore",
    description: "Aktivitetet, klubet dhe jeta sociale për nxënësit",
    icon: "fas fa-users",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "activities",
    contentTitle: "Aktivitetet Jashtëshkollore",
    activities: [
      { icon: "fas fa-music", name: "Klubi i Muzikës" },
      { icon: "fas fa-palette", name: "Klubi i Artit" },
      { icon: "fas fa-flask", name: "Klubi i Shkencës" },
      { icon: "fas fa-volleyball-ball", name: "Ekipet Sportive" }
    ],
    contentLink: "Shiko kalendarin e aktiviteteve"
  },

  {
    title: "Portali i Prindërve",
    description: "Informacione dhe shërbime për prindërit",
    icon: "fas fa-user-friends",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "list",
    contentTitle: "Shërbimet për Prindërit",
    contentItems: [
      "Monitorimi i notave online",
      "Komunikimi me mësuesit",
    ],
    buttonText: "Hyr në portal",
    
  },
  {
    title: "Shkolla Qendër Komunitare",
    description: "Aktivitetet dhe shërbimet për komunitetin",
    icon: "fas fa-home",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "list",
    contentTitle: "Shërbimet Komunitare",
    description2: "Shkolla jonë funksionon edhe si qendër komunitare duke ofruar:",
    contentItems: [
      "Aktivitete kulturore për komunitetin",
 
  
    ],
    contentLink: "Shiko kalendarin e aktiviteteve"
  },
  {
    title: "Shërbimet e Bibliotekës",
    description: "Resurset dhe shërbimet e bibliotekës sonë",
    icon: "fas fa-book-reader",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "activities",
    contentTitle: "Biblioteka Jonë",
    description2: "Biblioteka jonë ofron mbi 10,000 tituj në format fizik dhe elektronik.",
    activities: [
      { icon: "fas fa-book", name: "Libra Fizikë" },
      { icon: "fas fa-tablet-alt", name: "E-Libra" },
    ],
    contentLink: "Shiko katalogun online"
  },
  {
    title: "Politikat e Shkollës",
    description: "Rregulloret dhe politikat e shkollës sonë",
    icon: "fas fa-gavel",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "files",
    contentTitle: "Dokumentet e Politikave",
    contentItems: [
      "Rregullorja e shkollës",
      "Kodi i sjelljes së nxënësve",
      "Politikat anti-bullizëm",
      "Politikat e vlerësimit",
      "Procedurat e sigurisë"
    ],
    contentLink: "Shkarko të gjitha dokumentet"
  },
  {
    title: "Shërbimi Shëndetësor",
    description: "Kujdesi dhe shërbimet shëndetësore për nxënësit",
    icon: "fas fa-heartbeat",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "services",
    contentTitle: "Shërbimet Mjekësore",
    description2: "Shkolla jonë ofron:",
    contentItems: [
      "Infermieri me kohë të plotë",
      "Kontrolle periodike shëndetësore",
      "Këshillim psikologjik",
      "Edukim shëndetësor"
    ],
    schedule: {
      title: "Orari i Infermierisë",
      time: "E Martë - E Enjte : 08:00 - 14:00"
    }
  },
  {
    title: "Programet Sportive",
    description: "Aktivitetet sportive dhe ekipet e shkollës",
    icon: "fas fa-running",
    image: "https://images.unsplash.com/photo-1526232373132-0e4ee643aa7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "activities",
    contentTitle: "Ekipet Sportive",
    activities: [
      { icon: "fas fa-futbol", name: "Futboll" },
      { icon: "fas fa-basketball-ball", name: "Basketboll" },
      { icon: "fas fa-volleyball-ball", name: "Volejboll" },
      { icon: "fas fa-running", name: "Atletikë" }
    ],
    trophies: "Shkolla jonë ka fituar mbi 30 trofe në kampionate të ndryshme shkollore dhe kombëtare.",
    contentLink: "Shiko kalendarin e garave"
  },
  {
    title: "Programet Artistike",
    description: "Aktivitetet artistike dhe kreative në shkollë",
    icon: "fas fa-guitar",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: "activities",
    contentTitle: "Aktivitetet Artistike",
    activities: [
      { icon: "fas fa-palette", name: "Art Vizual" },
      { icon: "fas fa-theater-masks", name: "Teatër & Drama" },
      { icon: "fas fa-film", name: "Prodhim Media" }
    ],
    description2: "Shkolla jonë organizon festivale arti ku nxënësit prezantojnë talentin e tyre.",
    contentLink: "Shiko eventet e ardhshme"
  }
];