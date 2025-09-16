import Image from 'next/image';
import { management } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ManagementSection = () => {
  return (
    <section id="management" className="scroll-mt-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">পরিচালনা পর্ষদ</h2>
        <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">যাদের নেতৃত্বে পরিচালিত হয় আমাদের প্রতিষ্ঠান।</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {management.map((member) => (
          <Card key={member.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-accent">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  data-ai-hint={member.imageHint}
                  className="object-cover w-full h-full"
                />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="font-headline text-lg md:text-xl">{member.name}</CardTitle>
              <p className="text-accent font-semibold text-sm md:text-base">{member.position}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;
