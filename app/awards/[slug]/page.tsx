import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { awardsData } from '../data';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const award = awardsData.find(a => a.slug === resolvedParams.slug);
    if (!award) return { title: 'Award Not Found | LMAI' };

    return {
        title: `${award.title} | LMAI Awards`,
        description: award.description,
    };
}

export function generateStaticParams() {
    return awardsData.map((award) => ({
        slug: award.slug,
    }));
}

export default async function AwardDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const award = awardsData.find(a => a.slug === resolvedParams.slug);

    if (!award) {
        notFound();
    }

    return (
        <div className="w-full bg-background selection:bg-primary selection:text-white">
            {/* ──────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
            <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    priority
                    className="object-cover brightness-[0.2]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <div className="flex items-center gap-2 text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-6 flex-wrap justify-center">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/ /</span>
                        <Link href="/awards" className="hover:text-white transition-colors">Awards</Link>
                        <span>/ /</span>
                        <span className="text-white">{award.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none max-w-5xl">
                        {award.title.split(' ').map((word, i, arr) => (
                            <span key={i} className={i === arr.length - 1 ? "text-primary italic" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </h1>
                    <div className="w-24 h-1.5 bg-primary mt-8 rounded-full" />
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────
          AWARD DESCRIPTION
      ────────────────────────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-24">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-tight">
                        Award <span className="text-primary italic">Overview</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-foreground/60 leading-relaxed border-t border-border pt-10">
                        {award.description}
                    </p>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────
          PHOTO GALLERY
      ────────────────────────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-24 bg-[#0a0a0b] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center">
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Visual Records</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            Awards <span className="text-primary italic">Gallery</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {award.gallery.map((photo, idx) => (
                            <div key={idx} className="relative aspect-video rounded-[2rem] overflow-hidden group">
                                <Image
                                    src={photo}
                                    alt={`${award.title} photo ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Button variant="outline" asChild className="rounded-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs h-14 px-10">
                            <Link href="/awards">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to All Awards
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
}
