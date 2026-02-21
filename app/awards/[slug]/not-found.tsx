import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-4">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-primary">404</h2>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-8">Award Record Not Found</h3>
            <p className="text-foreground/60 mb-8 max-w-md font-medium">
                We couldn't locate the specific award record you are looking for. It may have been relocated or removed from our archives.
            </p>
            <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90 transition-colors uppercase font-black tracking-widest px-8">
                <Link href="/awards">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Awards
                </Link>
            </Button>
        </div>
    );
}
