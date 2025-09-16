import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageHint: string;
  button?: {
    text: string;
    href: string;
  };
};

export type HistoryMilestone = {
  year: string;
  description: string;
};

export type HistoryContent = {
  title: string;
  founding: string;
  milestones: HistoryMilestone[];
};

export type StatItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

export type Program = {
  title: string;
  description: string;
};

export type Notice = {
  id: number;
  title: string;
  date: string;
  link: string;
  isNew: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  hint: string;
};

export type ManagementMember = {
  id: string;
  name: string;
  position: string;
  image: string;
  imageHint: string;
};

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  title: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};
