"use client";

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Management() {
  const leadershipData = useMemo(() => ({
    boardOfDirectors: [
      { name: "Sandeep Zaveri", title: "President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" },
      { name: "Kuldip Goel", title: "Honorary Secretary", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
      { name: "Rajesh Nema", title: "Vice President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
      { name: "Manish Desai", title: "Treasurer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop" },
      { name: "Harveer Sahni", title: "LMAI Force Chair", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop" },
      { name: "Gururaj Ballarwad", title: "Joint Secretary", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=500&fit=crop" },
      { name: "Vivek Kapoor", title: "Director", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=500&fit=crop" },
      { name: "Dinesh Mahajan", title: "Director", image: "https://images.unsplash.com/photo-1552058544-a2b7ca42702f?w=400&h=500&fit=crop" }
    ],
    lmaiForce: [
      { name: "Amit Goel", title: "Core Committee", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" },
      { name: "Priyanka Malhotra", title: "Core Committee", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" },
      { name: "Rahul Soni", title: "Regional Lead", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop" },
      { name: "Sneha Rao", title: "Regional Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop" }
    ],
    pastPresidents: [
      { name: "Vivek Kapoor", title: "Past President (2020-2022)", image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=500&fit=crop" },
      { name: "Kuldip Goel", title: "Past President (2018-2020)", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop" },
      { name: "Rajesh Nema", title: "Past President (2016-2018)", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop" },
      { name: "Dinesh Mahajan", title: "Past President (2014-2016)", image: "https://images.unsplash.com/photo-1552058544-a2b7ca42702f?w=400&h=500&fit=crop" }
    ]
  }), []);

  const SectionHeader = ({ subtitle, title }: { subtitle: string, title: string }) => (
    <div className="mb-20 space-y-4">
      <span className="text-primary text-xs font-black uppercase tracking-widest block">{subtitle}</span>
      <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">
        {title.split(' ').map((word, i, arr) => (
          <span key={i} className={i === arr.length - 1 ? "text-primary italic" : ""}>{word} </span>
        ))}
      </h2>
    </div>
  );

  const MemberCard = ({ person }: { person: { name: string, title: string, image: string } }) => (
    <div className="group block">
      <div className="overflow-hidden transition-all duration-500">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        <div className="py-8 px-2 space-y-2 text-center">
          <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-tight">
            {person.name}
          </h3>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
            {person.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-background selection:bg-primary selection:text-white">

      {/* ──────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80"
          alt="LMAI Leadership"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/ /</span>
            <span className="text-white">Management</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Our <span className="text-primary italic">Leadership</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary mt-8 rounded-full" />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 1: BOARD OF DIRECTORS
      ────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Executive Governance" title="Board of Directors" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {leadershipData.boardOfDirectors.map((person, idx) => (
              <MemberCard key={idx} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 2: LMAI FORCE (2024-2026)
      ────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Next Generation Leaders" title="LMAI Force (2024-2026)" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {leadershipData.lmaiForce.map((person, idx) => (
              <MemberCard key={idx} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          SECTION 3: PAST PRESIDENTS
      ────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader subtitle="Legacy & Vision" title="Past Presidents" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {leadershipData.pastPresidents.map((person, idx) => (
              <MemberCard key={idx} person={person} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
