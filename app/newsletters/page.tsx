import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Newsletters | Intuitive Method Association',
  description: 'Access our newsletters covering industry insights and association updates',
};

export default function Newsletters() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsletters</h1>
          <p className="text-lg md:text-xl text-balance">Stay informed with our latest industry insights and association updates</p>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Latest Issues</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Monthly Digest - February 2024',
                date: 'February 28, 2024',
                topics: ['Industry Trends', 'Event Updates', 'Member Spotlight'],
                description: 'Catch up on the latest developments in our industry and exclusive association news',
              },
              {
                title: 'Monthly Digest - January 2024',
                date: 'January 31, 2024',
                topics: ['New Year Initiatives', 'Member Benefits', 'Conference Highlights'],
                description: 'A fresh start with the latest insights and opportunities from our association',
              },
              {
                title: 'Holiday Special Edition',
                date: 'December 20, 2023',
                topics: ['Year in Review', 'Member Achievements', 'Upcoming Events'],
                description: 'Celebrating our year of accomplishments and looking ahead to 2024',
              },
              {
                title: 'Monthly Digest - November 2023',
                date: 'November 30, 2023',
                topics: ['Innovation Report', 'Leadership Insights', 'Networking Opportunities'],
                description: 'Exploring the latest innovations shaping our professional landscape',
              },
              {
                title: 'Monthly Digest - October 2023',
                date: 'October 31, 2023',
                topics: ['Award Winners', 'Event Recap', 'Expert Interviews'],
                description: 'Recognizing excellence and celebrating our community achievements',
              },
              {
                title: 'Fall Conference Special',
                date: 'October 15, 2023',
                topics: ['Conference Agenda', 'Speaker Profiles', 'Registration Info'],
                description: 'Your guide to our annual fall conference and networking events',
              },
            ].map((newsletter, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{newsletter.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                      <Calendar className="w-4 h-4" />
                      {newsletter.date}
                    </div>
                    <p className="text-foreground/80 mb-4">{newsletter.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {newsletter.topics.map((topic, topicIdx) => (
                        <span key={topicIdx} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline" className="rounded-full w-full">
                      Read Online
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Categories */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Newsletter Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Monthly Digest',
                frequency: 'Monthly',
                description: 'Comprehensive overview of industry trends, association updates, and member spotlights',
              },
              {
                name: 'Weekly Brief',
                frequency: 'Weekly',
                description: 'Quick insights on upcoming events, job opportunities, and latest news',
              },
              {
                name: 'Special Editions',
                frequency: 'As Needed',
                description: 'Exclusive content covering conferences, awards, and special initiatives',
              },
            ].map((newsType, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{newsType.name}</h3>
                <p className="text-primary font-semibold mb-4">{newsType.frequency}</p>
                <p className="text-foreground/70">{newsType.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Subscribe to Our Newsletters</h2>
          <p className="text-lg text-foreground/70 text-center mb-8">
            Choose which newsletters you'd like to receive and stay informed about what matters to you
          </p>
          <Card className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block font-semibold mb-4">Select Newsletters</label>
                <div className="space-y-3">
                  {['Monthly Digest', 'Weekly Brief', 'Special Editions'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" defaultChecked />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6">
                Subscribe to Newsletters
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Manage Preferences */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Manage Your Preferences</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Already subscribed? Update your preferences or unsubscribe anytime
          </p>
          <Button variant="outline" className="rounded-full px-8 py-6">
            Update Email Preferences
          </Button>
        </div>
      </section>
    </div>
  );
}
