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
import { Home, Info, BookOpen, ScrollText, Images, Phone, Users, GraduationCap, Building, UserCheck, Facebook, Youtube, Twitter } from 'lucide-react';

export const appName = 'আশরাফুল উলূম';

export const navLinks: NavLink[] = [
  { label: 'হোম', href: '/', icon: Home },
  { label: 'পরিচিতি', href: '/about', icon: Info },
  { label: 'বিভাগ', href: '/programs', icon: BookOpen },
  { label: 'নোটিশ', href: '/notice', icon: ScrollText },
  { label: 'গ্যালারি', href: '/gallery', icon: Images },
  { label: 'যোগাযোগ', href: '/contact', icon: Phone },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'hero1',
    title: 'ঐতিহ্য ও আধুনিকতার সমন্বয়ে আদর্শ মানুষ গড়ার প্রত্যয়',
    subtitle: 'মাহমুদপুর (উত্তর চন্দন পারুলিয়া) আশরাফুল উলূম মাদ্রাসা',
    image: 'https://picsum.photos/seed/hero1/1920/1080',
    imageHint: 'education building',
    button: { text: 'ভর্তি চলছে', href: '/contact' },
  },
  {
    id: 'hero2',
    title: 'নৈపుন্য ও নৈতিকতার এক অনন্য বাতিঘর',
    subtitle: 'যেখানে প্রতিটি শিক্ষার্থীর মেধা ও মনন বিকাশে আমরা যত্নবান।',
    image: 'https://picsum.photos/seed/hero2/1920/1080',
    imageHint: 'students classroom',
  },
  {
    id: 'hero3',
    title: 'জ্ঞানার্জনের এক পবিত্র উদ্যান',
    subtitle: 'আমাদের রয়েছে সমৃদ্ধ লাইব্রেরি ও আধুনিক শিক্ষা উপকরণ।',
    image: 'https://picsum.photos/seed/hero3/1920/1080',
    imageHint: 'library books',
    button: { text: 'আরও জানুন', href: '/about' },
  },
];

export const aboutContent = {
  title: 'আমাদের সম্পর্কে',
  description: 'মাহমুদপুর (উত্তর চন্দন পারুলিয়া) আশরাফুল উলূম মাদ্রাসা একটি ঐতিহ্যবাহী ও সুপরিচিত ইসলামী শিক্ষা প্রতিষ্ঠান। নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে আমরা একটি আদর্শ প্রজন্ম গড়ে তুলতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হলো শিক্ষার্থীদের মধ্যে ইসলামী জ্ঞান, শৃঙ্খলা এবং সামাজিক দায়বদ্ধতা সৃষ্টি করা।',
  missionTitle: 'আমাদের লক্ষ্য',
  mission: 'কুরআন ও সুন্নাহর আলোকে শিক্ষার্থীদের জীবন গঠন করা এবং তাদের দেশ ও দশের সেবায় নিয়োজিত হওয়ার জন্য প্রস্তুত করা।',
  visionTitle: 'আমাদের রূপকল্প',
  vision: 'একটি আন্তর্জাতিক মানের ইসলামী শিক্ষা কেন্দ্র হিসেবে পরিচিতি লাভ করা, যা জ্ঞান, গবেষণা এবং নৈতিকতায় சிறந்து விளங்கும்।',
};

export const stats: StatItem[] = [
  { label: 'শিক্ষার্থী', value: 1200, icon: Users },
  { label: 'শিক্ষক', value: 75, icon: GraduationCap },
  { label: 'প্রাক্তন ছাত্র', value: 5000, icon: UserCheck },
  { label: 'আবাসিক', value: 300, icon: Building },
];

export const programs: Program[] = [
    { title: 'হিফজুল কুরআন', description: 'বিশুদ্ধ তাজবীদসহ আন্তর্জাতিক মানের হিফজ বিভাগ।' },
    { title: 'কিতাব বিভাগ', description: ' নাহবেমীর থেকে দাওরায়ে হাদীস (মাস্টার্স) পর্যন্ত।' },
    { title: 'ফতোয়া বিভাগ', description: 'ইসলামী আইন ও ফিকহ বিষয়ে বিশেষায়িত গবেষণা।' },
    { title: 'কম্পিউটার শিক্ষা', description: 'আধুনিক প্রযুক্তির সাথে শিক্ষার্থীদের পরিচয় ঘটানো।' },
];

export const notices: Notice[] = [
  { id: 1, title: '২০২৪ সালের বার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে।', date: '২০ জুন, ২০২৪', link: '#', isNew: true },
  { id: 2, title: 'ঈদুল আযহা উপলক্ষে মাদ্রাসা ছুটি সংক্রান্ত নোটিশ।', date: '১০ জুন, ২০২৪', link: '#', isNew: false },
  { id: 3, title: 'নতুন শিক্ষাবর্ষে (২০২৫) ভর্তি কার্যক্রম শুরু।', date: '০১ জুন, ২০২৪', link: '#', isNew: false },
  { id: 4, title: 'অভিভাবক সমাবেশ আগামী শুক্রবার সকাল ১০টায় অনুষ্ঠিত হবে।', date: '২৫ মে, ২০২৪', link: '#', isNew: false },
];

export const galleryImages: GalleryImage[] = [
  { id: 'gallery1', src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'বার্ষিক ক্রীড়া প্রতিযোগিতা', hint: 'sports event' },
  { id: 'gallery2', src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'পুরস্কার বিতরণী অনুষ্ঠান', hint: 'prize ceremony' },
  { id: 'gallery3', src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'ছাত্রদের লাইব্রেরি', hint: 'students library' },
  { id: 'gallery4', src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'সাংস্কৃতিক অনুষ্ঠান', hint: 'cultural performance' },
  { id: 'gallery5', src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'মাদ্রাসার ভবন', hint: 'madrasa building' },
  { id: 'gallery6', src: 'https://picsum.photos/seed/gallery6/600/400', alt: '毕业典礼', hint: 'graduation day' },
];

export const management: ManagementMember[] = [
  { id: 'manager1', name: 'মাওলানা আব্দুল্লাহ', position: 'অধ্যক্ষ', image: 'https://picsum.photos/seed/manager1/400/400', imageHint: 'man portrait' },
  { id: 'manager2', name: 'মুফতি ইব্রাহিম', position: 'উপাধ্যক্ষ', image: 'https://picsum.photos/seed/manager2/400/400', imageHint: 'man portrait' },
  { id: 'manager3', name: 'আলহাজ্জা ফাতেমা বেগম', position: 'শিক্ষা সচিব', image: 'https://picsum.photos/seed/manager3/400/400', imageHint: 'woman portrait' },
];

export const testimonials: Testimonial[] = [
  { id: 1, quote: 'এই মাদ্রাসার শিক্ষাব্যবস্থা অত্যন্ত উন্নত। আমার সন্তানের নৈতিক ও শিক্ষাগত উন্নতিতে আমি সন্তুষ্ট।', author: 'মোঃ আব্দুর রহমান', title: 'অভিভাবক' },
  { id: 2, quote: 'এখানকার শিক্ষকরা অত্যন্ত যত্নশীল। তাদের দিকনির্দেশনা আমার জীবন গঠনে সহায়ক হয়েছে।', author: 'হাফেজ খালিদ হাসান', title: 'প্রাক্তন ছাত্র' },
  { id: 3, quote: 'একটি আদর্শ শিক্ষা প্রতিষ্ঠান, যেখানে দ্বীনি ও আধুনিক শিক্ষার অপূর্ব সমন্বয় ঘটেছে।', author: 'ড. ফাতিমা আক্তার', title: 'শিক্ষাবিদ' },
  { id: 4, quote: 'হোস্টেলের পরিবেশ খুবই সুন্দর এবং নিরাপদ। আমার ছেলে এখানে পরিবারের মতোই থাকে।', author: 'একজন অভিভাবক', title: 'অভিভাবক' },
];

export const footerContent = {
  address: 'মাহমুদপুর, উত্তর চন্দন পারুলিয়া, সোনাগাজী, ফেনী।',
  phone: '+880 1234 567890',
  email: 'info@ashrafululoom.com',
  copyright: `© ${new Date().getFullYear()} ${appName}. সর্বস্বত্ব সংরক্ষিত।`,
};

export const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Youtube', href: '#', icon: Youtube },
    { name: 'Twitter', href: '#', icon: Twitter },
];
