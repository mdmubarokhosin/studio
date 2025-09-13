import Image from 'next/image';
import { management } from '@/data/content';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ManagementSection = () => {
  return (
    <section id="management" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">পরিচালনা পর্ষদ</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">যাদের নেতৃত্বে পরিচালিত হয় আমাদের প্রতিষ্ঠান।</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {management.map((member) => (
          <Card key={member.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-accent">
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
              <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
              <p className="text-accent font-semibold">{member.position}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ManagementSection;
