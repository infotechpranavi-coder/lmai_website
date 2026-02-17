import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

export const metadata = {
  title: 'Events | Intuitive Method Association',
  description: 'Discover our upcoming events, conferences, and networking opportunities',
};

export default function Events() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
          <p className="text-lg md:text-xl text-balance">Connect with professionals, learn from industry leaders, and grow your network</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Upcoming Events</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Annual Conference 2024',
                date: 'March 15-17, 2024',
                location: 'Professional Convention Center',
                attendees: '2,500+ attendees',
                description: 'Our flagship event bringing together industry leaders, innovators, and professionals for three days of learning, networking, and inspiration.',
              },
              {
                title: 'Regional Networking Summit',
                date: 'April 5, 2024',
                location: 'Downtown Business Hub',
                attendees: '500+ attendees',
                description: 'Connect with local professionals, explore partnership opportunities, and discover new business ventures in your region.',
              },
              {
                title: 'Innovation Workshop Series',
                date: 'May 10-12, 2024',
                location: 'Tech Innovation Center',
                attendees: '300+ attendees',
                description: 'Intensive hands-on workshops covering the latest trends, tools, and methodologies in innovation and creative problem-solving.',
              },
              {
                title: 'Leadership Development Seminar',
                date: 'June 7-9, 2024',
                location: 'Executive Training Institute',
                attendees: '200+ attendees',
                description: 'Advanced training for professionals looking to advance their leadership skills and prepare for executive roles.',
              },
            ].map((event, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-foreground/80 mb-6">{event.description}</p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-5 h-5 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <MapPin className="w-5 h-5 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Users className="w-5 h-5 text-primary" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                      Register Now
                    </Button>
                    <Button variant="outline" className="rounded-full w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Past Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
              <Card key={photo} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-64">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary hover:bg-white/90 rounded-full">
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Conferences', count: '8 events' },
              { name: 'Workshops', count: '12 events' },
              { name: 'Webinars', count: '24 events' },
              { name: 'Networking', count: '15 events' },
            ].map((category, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-foreground/70">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Event</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Subscribe to our events newsletter to get updates about upcoming opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-foreground w-full sm:w-auto"
            />
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
