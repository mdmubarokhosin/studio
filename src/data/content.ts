import {
  type NavLink,
  type HeroSlide,
  type StatItem,
  type Program,
  type Notice,
  type GalleryImage,
  type ManagementMember,
  type Testimonial,
  type SocialLink,
} from '@/types';
import { Home, Info, BookOpen, ScrollText, Images, Phone, Users, GraduationCap, Building, UserCheck, Facebook, Youtube, Twitter, ClipboardList } from 'lucide-react';
import contentData from './content.json';

const iconMap = {
  Home,
  Info,
  BookOpen,
  ScrollText,
  Images,
  Phone,
  Users,
  GraduationCap,
  Building,
  UserCheck,
  Facebook,
  Youtube,
  Twitter,
  ClipboardList
};

export const appName = contentData.appName;

export const navLinks: NavLink[] = contentData.navLinks.map(link => ({
  ...link,
  icon: iconMap[link.icon as keyof typeof iconMap],
}));

export const heroSlides: HeroSlide[] = contentData.heroSlides;

export const aboutContent = contentData.aboutContent;

export const stats: StatItem[] = contentData.stats.map(stat => ({
  ...stat,
  icon: iconMap[stat.icon as keyof typeof iconMap],
}));

export const programs: Program[] = contentData.programs;
export const notices: Notice[] = contentData.notices;
export const galleryImages: GalleryImage[] = contentData.galleryImages;
export const management: ManagementMember[] = contentData.management;
export const testimonials: Testimonial[] = contentData.testimonials;

export const footerContent = {
    ...contentData.footerContent,
    copyright: `© ${new Date().getFullYear()} ${appName}. সর্বস্বত্ব সংরক্ষিত।`,
};

export const socialLinks: SocialLink[] = contentData.socialLinks.map(link => ({
  ...link,
  icon: iconMap[link.icon as keyof typeof iconMap],
}));
