'use client';

import { useCallback, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80',
    tag: 'Annual Conference',
    title: 'Connect With\nIndustry Leaders',
    subtitle: 'Join 1,000+ professionals shaping the future of business and innovation.',
    cta: 'Explore Events',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80',
    tag: 'Collaboration',
    title: 'Grow Through\nCollaboration',
    subtitle: 'A vibrant community where ideas flourish and partnerships are forged.',
    cta: 'Join Today',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1800&q=80',
    tag: 'Awards',
    title: 'Celebrating\nExcellence',
    subtitle: 'Recognising the achievements that drive industry-wide transformation.',
    cta: 'View Awards',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1800&q=80',
    tag: 'Knowledge',
    title: 'Learn From\nThe Best',
    subtitle: 'Exclusive presentations, workshops and newsletters from top practitioners.',
    cta: 'Browse Resources',
  },
];

const AUTOPLAY_INTERVAL = 4500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const goTo = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setProgress(0);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length, 'next');
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev');
  }, [current, goTo]);

  const startAutoplay = useCallback(() => {
    clearTimers();
    setProgress(0);
    // progress bar ticker
    const step = 100 / (AUTOPLAY_INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);
    // slide advance
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        setDirection('next');
        setAnimating(true);
        setTimeout(() => setAnimating(false), 600);
        setProgress(0);
        return (c + 1) % slides.length;
      });
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoplay();
    return clearTimers;
  }, [startAutoplay]);

  const handleManualNav = (fn: () => void) => {
    clearTimers();
    fn();
    startAutoplay();
  };

  const slide = slides[current];

  return (
    <div className="relative w-full h-[88vh] min-h-[560px] overflow-hidden bg-gray-900 select-none">
      {/* ── Slides ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={[
            'absolute inset-0 transition-all duration-700 ease-in-out',
            i === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0',
          ].join(' ')}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
          {/* Dark gradient overlay — heavier at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          {/* Left-side blue accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-accent to-primary opacity-80" />
        </div>
      ))}

      {/* ── Text Content ── */}
      <div className="absolute inset-0 z-20 flex items-end pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div
            key={current}
            className={[
              'transition-all duration-700',
              animating
                ? direction === 'next'
                  ? 'opacity-0 translate-y-6'
                  : 'opacity-0 -translate-y-6'
                : 'opacity-100 translate-y-0',
            ].join(' ')}
          >
            {/* Tag pill */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-bold uppercase tracking-widest mb-5 border border-primary/50 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {slide.tag}
            </span>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] mb-5 drop-shadow-2xl whitespace-pre-line">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/75 max-w-xl mb-8 leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA */}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-5 text-base font-bold shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-0.5 transition-all duration-300">
              {slide.cta} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* ── Arrow Navigation ── */}
      <button
        onClick={() => handleManualNav(goPrev)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/40"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleManualNav(goNext)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/40"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Bottom Dots + Progress Bar ── */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center gap-4">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleManualNav(() => goTo(i, i > current ? 'next' : 'prev'))}
              aria-label={`Go to slide ${i + 1}`}
              className="flex flex-col items-start gap-1.5 group"
            >
              {/* Active progress bar / inactive dot */}
              <div
                className={[
                  'h-1 rounded-full transition-all duration-300',
                  i === current
                    ? 'w-16 bg-primary'
                    : 'w-6 bg-white/30 group-hover:bg-white/60',
                ].join(' ')}
              >
                {/* Animated fill for active */}
                {i === current && (
                  <div
                    className="h-full bg-white rounded-full transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>


    </div>
  );
}
