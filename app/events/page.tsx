"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Users, ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { pastEvents } from './data';


export default function Events() {
  const upcomingEvents = [
    {
      title: 'LMAI Annual Conference 2024',
      date: 'March 15-17, 2024',
      time: '09:00 AM - 05:00 PM',
      location: 'Navi Mumbai Convention Center',
      attendees: '2,500+ attendees',
      description: 'Our flagship event bringing together industry captains, innovators, and professionals for three days of learning, networking, and inspiration.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      category: 'Conference'
    },
    {
      title: 'Label Awards & Competition',
      date: 'April 5, 2024',
      time: '06:00 PM - 11:00 PM',
      location: 'Grand Hyatt, Mumbai',
      attendees: '500+ attendees',
      description: 'Celebrating top class international quality in label manufacturing. Winners are recognized nationally and supported for the World Label Competition.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      category: 'Awards'
    },
    {
      title: 'Technical Innovators Workshop',
      date: 'May 10-12, 2024',
      time: '10:00 AM - 04:00 PM',
      location: 'LMAI Institute of Technology',
      attendees: '300+ attendees',
      description: 'Intensive hands-on workshops covering the latest trends, tools, and methodologies in label innovation and creative problem-solving.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
      category: 'Workshop'
    },
    {
      title: 'Global Trade & Export Seminar',
      date: 'June 7, 2024',
      time: '09:30 AM - 02:30 PM',
      location: 'Executive Training Institute, Delhi',
      attendees: '200+ attendees',
      description: 'Advanced seminar for manufacturers aiming to cater to international clients, focusing on global technology, quality, and regulations.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
      category: 'Seminar'
    },
  ];



  const [isGridView, setIsGridView] = useState(false);

  return (
    <div className="w-full bg-background selection:bg-primary selection:text-white">

      {/* ──────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80"
          alt="LMAI Events Banner"
          fill
          priority
          className="object-cover brightness-[0.2]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/ /</span>
            <span className="text-white">Events</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Our <span className="text-primary italic">Events</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary mt-6 rounded-full" />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          UPCOMING EVENTS - PROFESSIONAL GRID LAYOUT
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4">
            <span className="text-primary text-xs font-black uppercase tracking-widest block">Event Calendar</span>
            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">Upcoming <span className="text-primary italic">Gatherings</span></h2>
            <p className="text-lg text-foreground/50 font-bold max-w-2xl mt-6">
              Join LMAI in shaping the future of the label industry. Participate in our technical seminars, workshops, and annual conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {upcomingEvents.map((event, idx) => (
              <Card key={idx} className="group overflow-hidden rounded-[2.5rem] border-border shadow-sm hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                    {event.category}
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm font-medium text-foreground/60 mb-8 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-wide">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-wide">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-wide">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-black text-foreground/40 uppercase tracking-widest">
                      <Users className="w-4 h-4" /> {event.attendees}
                    </span>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-10 w-10 p-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          PAST EVENT HIGHLIGHTS
      ────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-24 bg-[#0a0a0b] text-white overflow-hidden relative">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideGallery {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-gallery-slide {
            display: flex;
            width: max-content;
            animation: slideGallery 25s linear infinite;
          }
          .animate-gallery-slide:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
            <div className="max-w-2xl space-y-4">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block">Gallery Archives</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Past <span className="text-primary italic">Highlights</span>
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsGridView(!isGridView)}
              className="rounded-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs h-12 px-8"
            >
              {isGridView ? 'View As Slider' : 'View Full Gallery'}
            </Button>
          </div>

          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full">
              {pastEvents.map((photo, idx) => (
                <Link href={`/events/${photo.slug}`} key={idx} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-pointer block">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4">{photo.title}</h4>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full relative z-10 overflow-hidden">
              <div className="animate-gallery-slide gap-6 pb-12">
                {/* Double the array to allow for a seamless infinite loop */}
                {[...pastEvents, ...pastEvents].map((photo, idx) => (
                  <Link href={`/events/${photo.slug}`} key={idx} className="relative w-[300px] md:w-[400px] aspect-[4/5] flex-shrink-0 rounded-[2rem] overflow-hidden group cursor-pointer block">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h4 className="text-xl font-black uppercase tracking-tight mb-4">{photo.title}</h4>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>



    </div>
  );
}
