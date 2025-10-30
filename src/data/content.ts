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
  type HistoryContent
} from '@/types';
import { Home, Info, BookOpen, ScrollText, Images, Phone, Users, GraduationCap, Building, UserCheck, Facebook, Youtube, Twitter, ClipboardList, Code } from 'lucide-react';
import contentData from './content.json';
import placeholderImageData from '../lib/placeholder-images.json';

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
  ClipboardList,
  Code
};

const placeholderImageMap = new Map(
  placeholderImageData.placeholderImages.map(p => [p.id, p])
);

function getImage(id: string | undefined) {
  if (!id) return { src: '', hint: '' };
  const placeholder = placeholderImageMap.get(id);
  return {
    src: placeholder?.imageUrl || '',
    hint: placeholder?.imageHint || '',
  };
}


export const appName: string = contentData.appName;

export const navLinks: NavLink[] = contentData.navLinks.map(link => ({
  ...link,
  icon: iconMap[link.icon as keyof typeof iconMap],
}));

export const heroSlides: HeroSlide[] = contentData.heroSlides.map(slide => {
  const { src, hint } = getImage(slide.imageId);
  return {
    ...slide,
    image: src,
    imageHint: hint,
  };
});

export const aboutContent = contentData.aboutContent;
export const historyContent: HistoryContent = contentData.historyContent;

export const stats: StatItem[] = contentData.stats.map(stat => ({
  ...stat,
  icon: iconMap[stat.icon as keyof typeof iconMap],
}));

export const programs: Program[] = contentData.programs;
export const notices: Notice[] = contentData.notices;

export const galleryImages: GalleryImage[] = contentData.galleryImages.map(image => {
    const { src, hint } = getImage(image.id);
    return {
        ...image,
        src,
        hint
    };
});

export const management: ManagementMember[] = contentData.management.map(member => {
    const { src, hint } = getImage(member.id);
    return {
        ...member,
        image: src,
        imageHint: hint
    };
});

export const testimonials: Testimonial[] = contentData.testimonials;

export const footerContent = {
    ...contentData.footerContent,
    copyright: `© ${new Date().getFullYear()} ${appName}. সর্বস্বত্ব সংরক্ষিত।`,
};

export const socialLinks: SocialLink[] = contentData.socialLinks.map(link => ({
  ...link,
  icon: iconMap[link.icon as keyof typeof iconMap],
}));
