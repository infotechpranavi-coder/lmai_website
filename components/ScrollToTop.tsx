"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    if (pathname.startsWith('/dashboard')) return null;

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down more than 400px (roughly size of hero)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-10 right-10 z-[150] w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:bg-black hover:-translate-y-2",
                isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6 animate-bounce" />
        </button>
    );
}
