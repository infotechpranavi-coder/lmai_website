import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroCarousel from '@/components/HeroCarousel';
import { Award, Users, Newspaper, Presentation, ArrowRight, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-pretty leading-tight">
              Connect, Grow & Excel
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto text-pretty">
              Join a thriving community of professionals dedicated to innovation, collaboration, and sustainable excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg">
                Explore Membership <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-3 text-lg border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Featured Visual */}
          <div className="mt-16">
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl border border-primary/20 overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-primary/30 mb-4">✨</div>
                <p className="text-foreground/50">Premium Association Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-secondary/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '1000+', label: 'Active Members' },
              { stat: '50+', label: 'Annual Events' },
              { stat: '25+', label: 'Years of Excellence' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-foreground/70 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events - Bento Style */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Events</h2>
            <p className="text-lg text-foreground/60">Discover our most impactful professional gatherings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {/* Large Featured Card */}
            <div className="lg:col-span-2 lg:row-span-2">
              <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary hover:bg-white/90 rounded-full">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Annual Conference 2024</h3>
                  <p className="text-foreground/70 leading-relaxed">Join industry leaders for three days of networking, learning, and innovation</p>
                </div>
              </Card>
            </div>

            {/* Small Cards */}
            {[1, 2].map((event) => (
              <Card key={event} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative h-40 bg-gradient-to-br from-primary/15 to-accent/15 overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Workshop Series</h3>
                  <p className="text-sm text-foreground/70">Professional development sessions</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Modern Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted Leadership</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our board comprises seasoned professionals with decades of combined expertise in driving innovation and fostering collaboration across industries.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Strategic Vision & Industry Expertise',
                  'Commitment to Member Success',
                  'Innovative Program Development'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <p className="text-foreground/80 pt-0.5">{item}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Meet Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((member) => (
                <Card key={member} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-sm mb-1">Member {member}</h3>
                    <p className="text-xs text-foreground/60">Leadership Role</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Recognition & Awards</h2>
            <p className="text-lg text-foreground/60">Celebrating excellence and exceptional achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Excellence in Innovation', desc: 'Recognizing forward-thinking solutions' },
              { icon: TrendingUp, title: 'Leadership Excellence', desc: 'Honoring visionary leadership' },
              { icon: Users, title: 'Community Impact', desc: 'Celebrating collaborative achievements' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow group cursor-pointer border border-border hover:border-primary/50">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletters */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Newspaper className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Newsletters</h2>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((news) => (
                  <div key={news} className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Monthly Insights #{news}</h3>
                        <p className="text-sm text-foreground/60 mt-1">Latest industry trends and updates</p>
                      </div>
                      <Button variant="ghost" className="rounded-full px-4">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Presentations */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Presentation className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Presentations</h2>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((pres) => (
                  <div key={pres} className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Expert Talk #{pres}</h3>
                        <p className="text-sm text-foreground/60 mt-1">Insights from industry professionals</p>
                      </div>
                      <Button variant="ghost" className="rounded-full px-4">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-pretty">Ready to Join?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 text-pretty max-w-2xl mx-auto">
            Become part of a global community advancing innovation and professional excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-3 text-lg font-semibold">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-white text-primary-foreground hover:bg-white/20 rounded-full px-10 py-3 text-lg font-semibold">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
