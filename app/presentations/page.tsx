import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, PlayCircle, Speaker } from 'lucide-react';

export const metadata = {
  title: 'Presentations | Intuitive Method Association',
  description: 'Access presentations and talks from industry experts and thought leaders',
};

export default function Presentations() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Speaker className="w-12 h-12" />
            Expert Presentations
          </h1>
          <p className="text-lg md:text-xl text-balance">Learn from industry leaders and thought experts</p>
        </div>
      </section>

      {/* Featured Presentations */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Presentations</h2>
          <div className="space-y-6">
            {[
              {
                title: 'The Future of Innovation in 2024',
                speaker: 'Dr. Sarah Johnson',
                date: 'February 15, 2024',
                duration: '45 minutes',
                topics: ['Innovation', 'Technology Trends', 'Future Planning'],
                description: 'Exploring emerging technologies and innovative approaches that will shape our industry',
              },
              {
                title: 'Leading Through Change: A Modern Perspective',
                speaker: 'Michael Chen',
                date: 'January 20, 2024',
                duration: '50 minutes',
                topics: ['Leadership', 'Change Management', 'Team Development'],
                description: 'Strategies for effective leadership in times of organizational transformation',
              },
              {
                title: 'Building Sustainable Business Models',
                speaker: 'Emma Williams',
                date: 'December 10, 2023',
                duration: '55 minutes',
                topics: ['Sustainability', 'Business Strategy', 'Social Impact'],
                description: 'How to integrate sustainability into your business strategy for long-term success',
              },
              {
                title: 'Data-Driven Decision Making',
                speaker: 'David Rodriguez',
                date: 'November 18, 2023',
                duration: '40 minutes',
                topics: ['Data Analytics', 'Business Intelligence', 'Strategy'],
                description: 'Leveraging data insights to make smarter business decisions and drive growth',
              },
            ].map((presentation, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{presentation.title}</h3>
                        <div className="flex items-center gap-4 text-foreground/70 mb-4">
                          <span className="font-semibold text-foreground">{presentation.speaker}</span>
                          <span>•</span>
                          <span>{presentation.date}</span>
                          <span>•</span>
                          <span>{presentation.duration}</span>
                        </div>
                      </div>
                      <PlayCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-foreground/80 mb-4">{presentation.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {presentation.topics.map((topic, topicIdx) => (
                        <span key={topicIdx} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full flex items-center justify-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      Watch
                    </Button>
                    <Button variant="outline" className="rounded-full w-full flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Slides
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Series */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Presentation Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Leadership Series',
                count: '12 presentations',
                description: 'Expert insights on leadership, management, and organizational development',
              },
              {
                name: 'Technology & Innovation',
                count: '18 presentations',
                description: 'Cutting-edge technology trends and innovative business solutions',
              },
              {
                name: 'Professional Development',
                count: '15 presentations',
                description: 'Skills development, career advancement, and personal growth',
              },
              {
                name: 'Industry Insights',
                count: '20 presentations',
                description: 'Deep dives into industry trends, challenges, and opportunities',
              },
              {
                name: 'Business Strategy',
                count: '16 presentations',
                description: 'Strategic planning, market analysis, and business growth strategies',
              },
              {
                name: 'Sustainability',
                count: '10 presentations',
                description: 'Building sustainable business practices and social responsibility',
              },
            ].map((series, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{series.name}</h3>
                <p className="text-primary font-semibold mb-4">{series.count}</p>
                <p className="text-foreground/70">{series.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Directory */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Sarah Johnson', title: 'Innovation Expert', presentations: '8' },
              { name: 'Michael Chen', title: 'Leadership Coach', presentations: '12' },
              { name: 'Emma Williams', title: 'Sustainability Consultant', presentations: '6' },
              { name: 'David Rodriguez', title: 'Data Scientist', presentations: '10' },
            ].map((speaker, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full" />
                <h3 className="text-lg font-bold mb-1">{speaker.name}</h3>
                <p className="text-sm text-foreground/70 mb-4">{speaker.title}</p>
                <p className="text-xs text-primary font-semibold">{speaker.presentations} presentations</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Browse Presentations</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Search presentations..."
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Categories</option>
                  <option>Leadership</option>
                  <option>Technology</option>
                  <option>Strategy</option>
                </select>
                <select className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Speakers</option>
                  <option>Dr. Sarah Johnson</option>
                  <option>Michael Chen</option>
                  <option>Emma Williams</option>
                </select>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Become a Speaker?</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Share your expertise and insights with our professional community
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            Apply as Speaker
          </Button>
        </div>
      </section>
    </div>
  );
}
