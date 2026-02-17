import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroCarousel from '@/components/HeroCarousel';
import { Award, Users, Newspaper, Presentation, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Carousel Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <HeroCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Our Association</h2>
              <p className="text-lg text-foreground/80 mb-4">
                The Intuitive Method Association brings together professionals dedicated to innovation, creativity, and sustainable practices.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Our mission is to foster collaboration, share knowledge, and drive meaningful progress through professional excellence and creative problem-solving.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Events</h2>
            <p className="text-lg text-foreground/70">Explore our latest professional gatherings and conferences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((event) => (
              <Card
                key={event}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/30 to-accent/30 overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary hover:bg-white/90 rounded-full">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Event {event}</h3>
                  <p className="text-foreground/70 text-sm">Professional development and networking opportunity</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Members Showcase Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg text-foreground/70">Meet the professionals driving our association</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <Card key={member} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Member {member}</h3>
                  <p className="text-sm text-foreground/70 mb-4">Executive Director</p>
                  <p className="text-xs text-foreground/50">Bringing expertise and vision</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Recognition & Awards
            </h2>
            <p className="text-lg text-foreground/70">Celebrating excellence and achievement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Excellence in Innovation', 'Leadership Award', 'Community Impact'].map((award, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{award}</h3>
                <p className="text-foreground/70">Recognizing outstanding contributions and achievements</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters & Presentations Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletters */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-primary" />
                Newsletters
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((news) => (
                  <Card key={news} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">Monthly Newsletter {news}</h3>
                        <p className="text-sm text-foreground/70">Industry insights and association updates</p>
                      </div>
                      <Button variant="outline" className="rounded-full px-4">
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Presentations */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Presentation className="w-8 h-8 text-primary" />
                Presentations
              </h2>
              <div className="space-y-4">
                {[1, 2, 3].map((pres) => (
                  <Card key={pres} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">Presentation {pres}</h3>
                        <p className="text-sm text-foreground/70">Expert insights on industry trends</p>
                      </div>
                      <Button variant="outline" className="rounded-full px-4">
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Become part of a thriving professional network dedicated to innovation and excellence
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            Learn About Membership
          </Button>
        </div>
      </section>
    </div>
  );
}
