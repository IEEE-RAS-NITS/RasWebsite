export type Session = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  mode: "Online" | "Offline" | "Hybrid";
  platform: string;
  location?: string;
  posterImage: string;
  linkedinUrl?: string;
  meetUrl?: string;
  youtubeUrl?: string;
  isUpcoming: boolean;
};

export const sessions: Session[] = [
  {
    id: "dl-robotics-2026-03",
    title: "IEEE Distinguished Lecture: Human‑Centric Robotics for Smart Cities",
    description:
      "An in‑depth session on how human‑robot interaction and autonomous systems are transforming smart infrastructure, mobility, and urban services.",
    date: "2026-03-18",
    time: "18:00–19:30 IST",
    mode: "Online",
    platform: "Google Meet",
    location: "Virtual",
    posterImage: "/hero-right.svg",
    linkedinUrl: "https://www.linkedin.com/",
    meetUrl: "https://meet.google.com/",
    youtubeUrl: "",
    isUpcoming: true,
  },
  {
    id: "dl-autonomy-2025-11",
    title: "IEEE Distinguished Lecture: Trustworthy Autonomy in Field Robotics",
    description:
      "A deep dive into safety, reliability, and verification for autonomous robots deployed in unstructured environments.",
    date: "2025-11-12",
    time: "16:30–18:00 IST",
    mode: "Hybrid",
    platform: "Offline + YouTube Live",
    location: "NIT Silchar, Main Seminar Hall",
    posterImage: "/hero-left.svg",
    linkedinUrl: "https://www.linkedin.com/",
    meetUrl: "",
    youtubeUrl: "https://www.youtube.com/",
    isUpcoming: false,
  },
];

