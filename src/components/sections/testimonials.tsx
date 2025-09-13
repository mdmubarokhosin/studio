'use client';

import React from 'react';
import { testimonials } from '@/data/content';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Autoplay from 'embla-carousel-autoplay';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">প্রশংসাপত্র</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          আমাদের সম্পর্কে অভিভাবক ও প্রাক্তন ছাত্রদের মতামত।
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="p-1">
                <Card className="shadow-lg">
                  <CardContent className="flex flex-col items-center text-center p-8">
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-3 mt-6">
                      <Avatar>
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;
