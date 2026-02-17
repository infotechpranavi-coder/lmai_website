import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Trophy } from 'lucide-react';

export const metadata = {
  title: 'Awards | Intuitive Method Association',
  description: 'Recognizing excellence and outstanding contributions to our professional community',
};

export default function Awards() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-12 h-12" />
            Awards & Recognition
          </h1>
          <p className="text-lg md:text-xl text-balance">Celebrating excellence, innovation, and achievement</p>
        </div>
      </section>

      {/* Award Categories */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Award Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence in Innovation',
                description: 'Recognizing groundbreaking ideas and innovative solutions that advance our field',
                icon: '💡',
              },
              {
                title: 'Leadership Award',
                description: 'Honoring exemplary leadership that inspires and guides our professional community',
                icon: '👥',
              },
              {
                title: 'Community Impact',
                description: 'Celebrating outstanding contributions to community development and social responsibility',
                icon: '🌍',
              },
              {
                title: 'Emerging Professional',
                description: 'Supporting promising new talent showing exceptional potential and dedication',
                icon: '🚀',
              },
              {
                title: 'Lifetime Achievement',
                description: 'Honoring remarkable careers of lasting influence and dedication to excellence',
                icon: '⭐',
              },
              {
                title: 'Professional Excellence',
                description: 'Recognizing outstanding professional performance and contribution',
                icon: '🏆',
              },
            ].map((award, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                <p className="text-foreground/70 mb-6">{award.description}</p>
                <Button variant="outline" className="rounded-full w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">2023 Award Winners</h2>
          <div className="space-y-8">
            {[
              {
                award: 'Excellence in Innovation',
                winner: 'Dr. Sarah Johnson',
                organization: 'TechVision Solutions',
                achievement: 'Pioneering AI-driven solutions that transformed industry practices',
              },
              {
                award: 'Leadership Award',
                winner: 'Michael Chen',
                organization: 'Global Professional Services',
                achievement: 'Exceptional leadership in building diverse, inclusive teams',
              },
              {
                award: 'Community Impact',
                winner: 'Emily Rodriguez',
                organization: 'Community Development Initiative',
                achievement: 'Spearheading programs that positively impacted over 10,000 individuals',
              },
              {
                award: 'Emerging Professional',
                winner: 'Alex Thompson',
                organization: 'NextGen Analytics',
                achievement: 'Outstanding contribution demonstrating remarkable potential and growth',
              },
            ].map((entry, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary uppercase mb-2">{entry.award}</div>
                    <h3 className="text-2xl font-bold mb-1">{entry.winner}</h3>
                    <p className="text-foreground/70 mb-3">{entry.organization}</p>
                    <p className="text-foreground/80">{entry.achievement}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nomination Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nomination Process</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Learn About Awards', description: 'Review our award categories and eligibility criteria' },
              { step: '2', title: 'Prepare Nomination', description: 'Gather information about the exceptional candidate' },
              { step: '3', title: 'Submit Online', description: 'Complete the nomination form on our website' },
              { step: '4', title: 'Review Process', description: 'Our committee reviews and evaluates all nominations' },
              { step: '5', title: 'Announcement', description: 'Winners are announced at our annual gala event' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Know Someone Deserving?</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Nominate an exceptional professional for our 2024 awards
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            Submit Nomination
          </Button>
        </div>
      </section>
    </div>
  );
}
