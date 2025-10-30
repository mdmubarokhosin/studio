import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NextjsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-black dark:invert"><path d="M12.193 7.093a1 1 0 0 0-1.071 1.072v8.66a1 1 0 0 0 1.071 1.072z"/><path d="M12.53 7.093a1 1 0 0 1 1.07 1.072v8.66a1 1 0 0 1-1.07 1.072z"/><path d="M16.19 3.5a1.071 1.071 0 0 0-1.07 1.071v14.858a1.071 1.071 0 0 0 1.07 1.071h.214a1.071 1.071 0 0 0 1.071-1.071V4.571A1.071 1.071 0 0 0 16.405 3.5h-.214z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/></svg>
);

const ReactIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.5" fill="#61DAFB"/></svg>
);

const TypescriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3178C6" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M0 0h24v24H0z" fill="none"/><path d="M2 2h20v20H2z" fill="#3178C6"/><path d="M12.4 12.3l-3 2.9h-.8v-7.3h3.5c1.8 0 2.8.9 2.8 2.3 0 1.3-.9 2.1-2.5 2.1zm-1.1-3h-1.6v4.6h1.6c1.1 0 1.6-.4 1.6-1.3s-.5-1.3-1.6-1.3zm6.6-2.5h-3.2v7.3h1.2V9.3h2V8z"/></svg>
);

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[#38BDF8]"><path d="M12 12c-3.333 0-6.667-1-10-3 2-3.333 4-5 7-5 3.333 0 6.667 1.333 10 4-2 3.333-4 5-7 5z"/><path d="M19 12c-3.333 0-6.667-1-10-3 2-3.333 4-5 7-5 3.333 0 6.667 1.333 10 4-2 3.333-4 5-7 5zM5 15c3.333 0 6.667 1 10 3-2 3.333-4 5-7 5-3.333 0-6.667-1.333-10-4 2-3.333 4-5 7-5z"/></svg>
);

const ShadcnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2l9 4.9V17L12 22l-9-5.1V7z"/></svg>
);

const FirebaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M4.64 19.37C3.17 17.9 2.5 16.02 2.5 14.1c0-1.92.67-3.8 2.14-5.27L15.27 2.5 4.64 19.37z" fill="#FFC107"/><path d="M19.36 4.63C17.9 3.17 16.02 2.5 14.1 2.5c-1.92 0-3.8.67-5.27 2.14L2.5 15.27 19.36 4.63z" fill="#FFA000"/><path d="M19.36 4.63L8.73 20.5 19.36 4.63z" fill="#F57C00"/></svg>
);

const GenkitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M15.5 15.5L12 12l3.5-3.5L12 5l-3.5 3.5L12 12l-3.5 3.5L12 19z" fill="#4285F4"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></svg>
);

const FirestoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4285F4" stroke="currentColor" strokeWidth="0.1" className="h-8 w-8"><path d="M6.87 18.12l-4.37-4.37v-7.5l4.37-4.37 8.5 4.9v9.8z"/><path d="M17.13 5.88l4.37 4.37v7.5l-4.37 4.37-8.5-4.9v-9.8z" fill="#669DF6"/></svg>
);

const VercelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8"><path d="M12 2L2 19h20L12 2z"/></svg>
);

const GithubActionsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2088FF" stroke="currentColor" strokeWidth="0.1" className="h-8 w-8"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-4-4 1.4-1.4 2.6 2.6 6.6-6.6L18 7l-8 8z"/><circle cx="12" cy="12" r="3"/></svg>
);

const GoogleAdsenseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M12 2a10 10 0 1 0 10 10c0-2.2-.7-4.2-2-5.7l-1.3 1.3c.9 1.1 1.3 2.5 1.3 3.9 0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7v2l4-3-4-3v2z" fill="#4285F4"/><path d="M12 8v4h4" stroke="white" strokeWidth="2"/></svg>
);

const FirebaseAnalyticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M12.5 3.5v17l7-7-7-10z" fill="#FFCA28"/><path d="M11.5 3.5v17l-7-7 7-10z" fill="#F57C00"/></svg>
);


const techSections = [
    {
        title: 'Core Frontend & Framework',
        technologies: [
            { name: 'Next.js', category: 'Framework', icon: NextjsIcon, description: 'The application is built using Next.js App Router for server-side rendering (SSR) and static site generation (SSG), ensuring fast page loads and optimal SEO performance.' },
            { name: 'React', category: 'Library', icon: ReactIcon, description: 'At the core of our UI, React allows us to build interactive and reusable components, creating a dynamic and responsive user experience.' },
            { name: 'TypeScript', category: 'Language', icon: TypescriptIcon, description: 'We use TypeScript for static typing, which helps in catching errors early, improving code quality, and making the codebase more maintainable and scalable.' },
            { name: 'Tailwind CSS', category: 'Styling', icon: TailwindIcon, description: 'A utility-first CSS framework that enables rapid UI development. We use it for all our styling, allowing for a consistent design system without custom CSS.' },
            { name: 'ShadCN UI', category: 'UI Library', icon: ShadcnIcon, description: 'Our component library is built upon ShadCN UI, providing a set of beautifully designed, accessible, and customizable components that we can adapt to our needs.' },
        ]
    },
    {
        title: 'Backend, Infrastructure & DevOps',
        technologies: [
            { name: 'Firebase', category: 'Backend', icon: FirebaseIcon, description: 'Firebase serves as our backend for real-time data synchronization, authentication, notifications, and Genkit AI flow integration.' },
            { name: 'Genkit', category: 'AI Framework', icon: GenkitIcon, description: 'For all AI-powered features, we use Genkit. It provides a structured way to build and manage AI flows.' },
            { name: 'Firestore', category: 'Database', icon: FirestoreIcon, description: 'The Firebase Firestore Database is used to store and sync live application data like page views and tool usage statistics across all users in real-time.' },
            { name: 'Vercel', category: 'Hosting', icon: VercelIcon, description: 'Our app is hosted on Vercel, the platform built by the creators of Next.js. It provides seamless deployment, a global CDN, and automatic scaling for optimal performance.' },
            { name: 'GitHub Actions', category: 'CI/CD', icon: GithubActionsIcon, description: 'We use GitHub Actions for our Continuous Integration and Continuous Deployment (CI/CD) pipeline, automating the build and deployment process to Vercel.' },
        ]
    },
    {
        title: 'Monetization & Analytics',
        technologies: [
            { name: 'Google AdSense', category: 'Monetization', icon: GoogleAdsenseIcon, description: 'To support the operational costs of the website and keep the tools free, we display advertisements through the Google AdSense network.' },
            { name: 'Firebase Analytics', category: 'Analytics', icon: FirebaseAnalyticsIcon, description: 'We use Firebase Analytics to gather anonymous usage data, such as page views and tool clicks. This helps us understand which tools are popular and how we can improve the user experience.' },
        ]
    }
];

export default function TechnologyPage() {
  return (
    <>
      <main className="flex-1 py-12 md:py-20 bg-gray-50/50 dark:bg-black">
        <div className="container mx-auto px-4">
           <div className="text-center mb-10 md:mb-16">
                <h1 className="font-headline text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">Our Technology Stack</h1>
                <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400">A detailed look at the core technologies and services that power আমার মাদ্রাসা.</p>
            </div>

            {techSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-12 md:mb-16">
                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">{section.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {section.technologies.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <Card key={tech.name} className="bg-white dark:bg-gray-900/50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <Icon />
                                            </div>
                                            <div className='flex-1'>
                                                <div className='flex items-center justify-between'>
                                                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{tech.name}</h3>
                                                </div>
                                                <Badge variant="secondary" className="mt-1 font-medium">{tech.category}</Badge>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tech.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
