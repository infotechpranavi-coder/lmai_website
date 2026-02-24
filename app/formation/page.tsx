import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, ChevronRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Formation | LMAI - Label Manufacturers Association Of India',
    description: 'Learn about the formation, objects, and vision of the Label Manufacturers Association of India.',
};

export default function Formation() {
    const objectsList = [
        "To represent a as common body of the Label Manufacturers of the country.",
        "To promote self adhesive label application in general.",
        "To organize the seminars and educate its members with latest developments and technologies in the self adhesive label industry.",
        "To secure the indigenous interest against foreign investment in the field of label production.",
        "To identify the exclusivity of the self adhesive label printers in narrow web segment.",
        "To Support the label manufacturers and suppliers of machines and material against misconductive vise-versa.",
        "To exchange the forums with international organizations of similar kind for the common awareness among its members.",
        "To carry out fair trade practices."
    ];

    return (
        <div className="w-full bg-background selection:bg-primary selection:text-white pb-20">

            {/* ──────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
            <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1600&q=80"
                    alt="LMAI Formation"
                    fill
                    priority
                    className="object-cover brightness-[0.4]"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/ /</span>
                        <span className="text-white">Formation</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        Formation <span className="text-primary italic">of LMAI</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-primary mt-8 rounded-full" />
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────
          MAIN CONTENT
      ────────────────────────────────────────────────────────── */}
            <section className="py-24 px-4 sm:px-6 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Section 1: Objects */}
                    <div className="space-y-12">
                        <div className="mb-16 space-y-4">
                            <span className="text-primary text-xs font-black uppercase tracking-widest block">Our Purpose</span>
                            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">
                                Objects of the <span className="text-primary italic">Association</span>
                            </h2>
                            <p className="text-lg text-foreground/70 font-bold max-w-4xl mt-8 border-l-4 border-primary pl-6 py-2 leading-relaxed">
                                The agenda is to be a par with the global giants. With competition & opportunity both rising at a zooming pace, the challenge is to be smart and rise every moment.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <h3 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tighter">
                                General View Towards The <span className="text-primary">Label Industry</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4">
                                {objectsList.map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start group">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 group-hover:-translate-y-1 group-hover:shadow-lg shadow-primary/20">
                                            <ChevronRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <p className="text-base text-foreground/80 font-bold leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-border/50" />

                    {/* Section 2: Vision India */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7 space-y-8">
                            <span className="text-primary text-xs font-black uppercase tracking-widest block">History & Growth</span>
                            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none">
                                Vision <span className="text-primary italic">India</span>
                            </h2>

                            <div className="space-y-8 text-lg text-foreground/70 font-bold leading-relaxed mt-12">
                                <p>
                                    The following founder members were present in the 1st pre initiation meeting held at hotel Days Inn. Duly invited by <strong>Mr. Amit Sheth</strong> discussed the need of a platform to recognize the very niche self adhesive nero web label market.
                                </p>
                                <p>
                                    LMAI started with handful of members and today it boasts over 200 profound members in its stride with leadership of our past presidents <strong>Mr. Surendar Kapoor, Mr. Bhavin Kothari, Mr. Manish Desai</strong> and <strong>Mr. Vivek Kapoor</strong>.
                                </p>
                                <p>
                                    Globally the self adhesive label industry is being driven with narrow web production in letterpress, flexo, dry offset and screen technology.
                                </p>
                                <p className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl">
                                    To recognize this exclusive industry of narrow web production of self adhesive labels in India. A platform was required to understand its need, LMAI — Label Manufacturers Association of India was formed to exploit its huge opportunity in an organized manner under companies in 2002.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-32">
                                <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group border-[12px] border-white outline outline-1 outline-border/20 bg-gray-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80"
                                        alt="Certificate Placeholder"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />
                                </div>
                                <div className="mt-8 text-center">
                                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-transparent hover:shadow-primary/20">
                                        <FileText className="w-5 h-5" /> Certificate of Incorporation
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
