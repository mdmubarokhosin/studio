import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NextjsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className="h-8 w-8 text-black dark:invert">
        <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64s64-28.7 64-64S99.3 0 64 0zm0 120C33.1 120 8 94.9 8 64S33.1 8 64 8s56 25.1 56 56s-25.1 56-56 56z"></path>
        <path fill="currentColor" d="M95.6 34.2h-3.8c-2.4 0-4.5 1.9-4.7 4.3v42.9c0 2.6 2.1 4.7 4.7 4.7h3.8c2.6 0 4.7-2.1 4.7-4.7V38.5c0-2.5-2.1-4.3-4.7-4.3zM50.5 34.2c-2.2 0-4.1 1.6-4.5 3.7l-26.8 52c-.6 1.1-.1 2.5 1 3.1c.4.2.8.3 1.2.3c.8 0 1.6-.4 2.1-1.1l27-52.5c.6-1.1.1-2.5-1-3.1c-.5-.3-1.1-.4-1.5-.4z"></path>
    </svg>
);

const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"></circle>
        <g>
            <ellipse cx="12" cy="12" rx="11" ry="4.2"></ellipse>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"></ellipse>
            <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"></ellipse>
        </g>
    </svg>
);

const TypescriptIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
        <path fill="#3178C6" d="M1.5 1.5v21h21v-21h-21z" />
        <path fill="white" d="M12.3 13.4l-1.6 1.6h-.7v-7.2h3.5c1.8 0 2.8.9 2.8 2.3 0 1.4-.9 2.3-2.5 2.3zm-1-3.5h-1.3v5.1h1.3c1.1 0 1.6-.4 1.6-1.3s-.5-1.3-1.6-1.3zm6.6-2.1h-3.2v7.2h1.2V9.2h2V8z" />
    </svg>
);

const TailwindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
    <path fill="#38BDF8" d="M12 2.585l-7.415 7.415a2 2 0 0 0 0 2.828l7.415 7.415a2 2 0 0 0 2.828 0l7.415-7.415a2 2 0 0 0 0-2.828L14.828 2.585a2 2 0 0 0-2.828 0zM8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0z" />
  </svg>
);

const ShadcnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="h-8 w-8 text-black dark:invert">
    <path fill="currentColor" d="m208.3 49.9-80-48a8.2 8.2 0 0 0-8.6 0l-80 48a8 8 0 0 0-4.3 7.4v97.4a8 8 0 0 0 4.3 7.4l80 48a8.2 8.2 0 0 0 8.6 0l80-48a8 8 0 0 0 4.3-7.4V57.3a8 8 0 0 0-4.3-7.4ZM128 24.8l67.9 40.7L128 106.3L60.1 65.5Zm-88 52.7L120 118v84.7l-80-48Zm176 39.9l-80 48V118l80-40.5Z"></path>
  </svg>
);

const FirebaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
    <path fill="#FFCA28" d="M12.93 2.54L11.5 4.3l-5.72 8.95l-1.9 4.33a.49.49 0 0 0 .58.58l4.33-1.9l9.3-5.9z"/>
    <path fill="#FFA000" d="M2.59 13.4l-1.9 4.33a.49.49 0 0 0 .58.58l4.33-1.9l3.52-1.57l-6.53-1.44z"/>
    <path fill="#F57C00" d="M12.93 2.54L5.61 17.62l3.41-1.49l9.73-6.17c-2.31-3.2-4.14-5.22-5.82-7.42z"/>
    <path fill="#FFC107" d="M18.8 14.37L12.93 2.54c-1.68 2.2-3.51 4.12-5.82 7.42l5.72 2.53z"/>
  </svg>
);

const GenkitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
        <defs>
            <linearGradient id="genkit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#6e89f8', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#4285f4', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <path fill="url(#genkit-gradient)" d="M15.5 15.5L12 12l3.5-3.5L12 5l-3.5 3.5L12 12l-3.5 3.5L12 19z"/>
        <path fill="url(#genkit-gradient)" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    </svg>
);

const FirestoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
        <path fill="#8AB4F8" d="M6.87 18.12L2.5 13.75v-7.5l4.37-4.37l8.5 4.9v9.8z"/>
        <path fill="#4285F4" d="M17.13 5.88l-1.9-1.07l-8.5 4.9l8.5 4.9l1.9-1.07l4.37-4.38v-2.2z"/>
        <path fill="#C6DAFC" d="M17.13 5.88v12.25l-8.5 4.9v-9.8z"/>
    </svg>
);

const VercelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black dark:invert"><path d="M12 2L2 19h20L12 2z"/></svg>
);

const GithubActionsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
        <path fill="#2088FF" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5.2 8.7l-6.1 6.1c-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-3.1-3.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.4 2.4l5.4-5.4c.4-.4 1-.4 1.4 0s.4 1 0 1.4z"/>
        <circle fill="#2088FF" cx="12" cy="12" r="3"/>
    </svg>
);

const GoogleAdsenseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
        <path fill="#4285F4" d="M12 2a10 10 0 1 0 10 10c0-2.2-.7-4.2-2-5.7l-1.3 1.3c.9 1.1 1.3 2.5 1.3 3.9 0 3.9-3.1 7-7 7s-7-3.1-7-7s3.1-7 7-7v2l4-3-4-3v2z"/>
        <path d="M12 8v4h4" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
);

const FirebaseAnalyticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="h-8 w-8">
        <path fill="#FFCA28" d="M12.5 3.5v17l7-7-7-10z"/>
        <path fill="#F57C00" d="M11.5 3.5v17l-7-7 7-10z"/>
    </svg>
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
