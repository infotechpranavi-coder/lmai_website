"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Calendar, User, ArrowRight, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Presentations() {
  const presentations = [
    {
      title: "The Future of Label Manufacturing 2024",
      speaker: "Rajish Verma",
      date: "March 15, 2024",
      description: "A deep dive into the technological transformations and automation trends shaping the Indian label industry.",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      category: "Keynote"
    },
    {
      title: "Sustainability in Flexible Packaging",
      speaker: "Ananya Sharma",
      date: "February 28, 2024",
      description: "Exploring eco-friendly materials and waste reduction strategies for modern packaging solutions.",
      thumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
      category: "Technical Talk"
    },
    {
      title: "Global Supply Chain Challenges in Printing",
      speaker: "Amit Goel",
      date: "January 10, 2024",
      description: "Addressing the logistics and raw material hurdles faced by manufacturers in the current global climate.",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      category: "Panel Discussion"
    },
    {
      title: "Innovation in UV Leading Technologies",
      speaker: "Dr. Sanjay Gupta",
      date: "December 5, 2023",
      description: "Technical insights into the latest UV curing systems and their efficiency in high-speed label presses.",
      thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      category: "Workshop"
    },
    {
      title: "Design Thinking for Label Aesthetics",
      speaker: "Priya Malhotra",
      date: "November 20, 2023",
      description: "How creative design and material choice influence consumer behavior at the retail shelf.",
      thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
      category: "Design Seminar"
    },
    {
      title: "LMAI Secretariat: Roadmap 2025",
      speaker: "Kuldip Goel",
      date: "October 12, 2023",
      description: "Defining the long-term vision and membership benefits for the Label Manufacturers Association of India.",
      thumbnail: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
      category: "Strategy"
    }
  ];

  return (
    <div className="w-full bg-background selection:bg-primary selection:text-white">

      {/* ──────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1475721027785-f74dea327912?w=1600&q=80"
          alt="LMAI Presentations"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/ /</span>
            <span className="text-white">Presentations</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Expert <span className="text-primary italic">Sessions</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary mt-8 rounded-full" />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          VIDEO GRID SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 space-y-4">
            <span className="text-primary text-xs font-black uppercase tracking-widest block">Video Archives</span>
            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">
              Knowledge <span className="text-primary italic">Sharing</span>
            </h2>
            <p className="text-lg text-foreground/50 font-bold max-w-2xl mt-8 border-l-4 border-primary pl-6 py-2">
              Watch keynote speeches, technical presentations, and panel discussions from our global summits and workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {presentations.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] bg-[#0a0a0b] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <Play className="w-6 h-6 text-white ml-1 fill-white" />
                    </div>
                  </div>

                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-black uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors line-clamp-2 text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          CTA - WATCH ON YOUTUBE
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-24 bg-[#0a0a0b] text-white">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-secondary/5 border border-white/5 p-12 md:p-24 flex flex-col items-center text-center space-y-10 relative overflow-hidden group">
          {/* Abstract Decoration */}
          <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000" />

          <Video className="w-16 h-16 text-primary" />
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none relative z-10">
            SUBSCRIBE TO OUR <br /> <span className="text-primary italic">YOUTUBE CHANNEL.</span>
          </h2>
          <p className="text-lg font-bold text-white/50 max-w-2xl relative z-10">
            Get instant notifications for all our technical workshops, annual conferences, and exclusive industry leader interviews.
          </p>
          <Button className="rounded-full bg-primary hover:bg-white hover:text-black text-white font-black uppercase text-xs tracking-[0.3em] h-16 px-12 transition-all duration-500 relative z-10 flex items-center gap-4 group/btn">
            Explore Our Channel
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
          </Button>
        </div>
      </section>

    </div>
  );
}
