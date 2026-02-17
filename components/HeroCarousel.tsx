'use client';

import { useCallback, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    id: 1,
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    title: 'Creativity',
    subtitle: 'Fostering Innovation',
  },
  {
    id: 2,
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    title: 'Innovation',
    subtitle: 'Driving Progress',
  },
  {
    id: 3,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    title: 'Sustainability',
    subtitle: 'Building the Future',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, autoplay: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] h-full flex items-center justify-center relative"
              style={{ background: slide.image }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 text-center text-white">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h2>
                <p className="text-xl md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-primary p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white/60 hover:bg-white transition-all"
          />
        ))}
      </div>
    </div>
  );
}
