import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About | Intuitive Method Association',
  description: 'Learn about our association mission, vision, and values',
};

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-balance">Discover the values and vision behind our professional association</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70">To foster innovation, creativity, and sustainable professional practices through collaborative excellence and knowledge sharing.</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/70">To become the leading professional association recognized for driving industry advancement and creating meaningful impact.</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-foreground/70">Excellence, integrity, collaboration, innovation, and accountability guide every decision we make.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Organization History */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6">
                Founded in 2010, the Intuitive Method Association emerged from a shared vision of professionals who believed in the power of collaboration and innovation.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                What began as a small group of dedicated experts has grown into a thriving community of thousands of professionals across multiple industries.
              </p>
              <p className="text-lg text-foreground/80">
                Today, we continue to strengthen our commitment to advancing professional practices, fostering innovation, and creating lasting impact in our field.
              </p>
            </div>
            <div className="h-64 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Milestones</h2>
          <div className="space-y-6">
            {[
              { year: '2010', title: 'Association Founded', description: 'Our journey begins with a vision for professional excellence' },
              { year: '2015', title: 'Reached 5,000 Members', description: 'Significant growth in our community and impact' },
              { year: '2018', title: 'International Expansion', description: 'Extended our reach beyond borders to serve global community' },
              { year: '2023', title: '10,000+ Members Strong', description: 'Celebrated a decade of excellence and innovation' },
            ].map((milestone, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="min-w-fit">
                    <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-foreground/70">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Become part of our growing community of professionals dedicated to excellence
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            Explore Membership
          </Button>
        </div>
      </section>
    </div>
  );
}
