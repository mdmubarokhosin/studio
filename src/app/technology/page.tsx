import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Database, Cloud, DollarSign } from 'lucide-react';

const techSections = [
    {
        title: 'Core Frontend & Framework',
        icon: Briefcase,
        description: 'The foundation of our user interface and application structure.',
        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI']
    },
    {
        title: 'Backend',
        icon: Database,
        description: 'The engine that powers our data, authentication, and business logic.',
        items: ['Firebase', 'Firestore', 'Firebase Authentication', 'Genkit AI']
    },
    {
        title: 'Infrastructure & DevOps',
        icon: Cloud,
        description: 'The services that host, secure, and deliver our application.',
        items: ['Firebase Hosting', 'Google Cloud', 'GitHub']
    },
    {
        title: 'Monetization & Analytics',
        icon: DollarSign,
        description: 'Tools we use to understand our users and grow our platform.',
        items: ['Google Analytics', 'Stripe (Future)', 'Google AdSense (Future)']
    }
];

export default function TechnologyPage() {
  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
           <div className="text-center mb-8 md:mb-12">
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Our Technology Stack</h2>
                <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground">A detailed look at the core technologies and services that power আমার মাদ্রাসা.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {techSections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <Card key={section.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Icon className="w-8 h-8 text-accent" />
                                    <CardTitle className="font-headline text-xl md:text-2xl">{section.title}</CardTitle>
                                </div>
                                <p className="pt-2 text-sm text-muted-foreground">{section.description}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {section.items.map((item) => (
                                        <div key={item} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
