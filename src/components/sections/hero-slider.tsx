'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { heroSlides } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n: number) => {
    let newIndex = slideIndex + n;
    if (newIndex > heroSlides.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = heroSlides.length;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      plusSlides(1);
    }, 5000); // Change image every 5 seconds
    return () => clearTimeout(timer);
  }, [slideIndex]);


  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-full mx-auto">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`mySlides fade ${slideIndex === index + 1 ? 'block' : 'hidden'}`}
          >
            <div className="relative h-[60vh] md:h-[80vh] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                data-ai-hint={slide.imageHint}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold !text-primary-foreground drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl !text-primary-foreground/90 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  {slide.button && (
                    <Button asChild size="lg" variant="default" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                      <Link href={slide.button.href}>{slide.button.text}</Link>
                    </Button>
                  )}
                </div>
            </div>
          </div>
        ))}

        <button
          className="prev"
          onClick={() => plusSlides(-1)}
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          className="next"
          onClick={() => plusSlides(1)}
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
