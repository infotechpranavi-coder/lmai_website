import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Management | Intuitive Method Association',
  description: 'Meet the leadership team guiding our association',
};

export default function Management() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h1>
          <p className="text-lg md:text-xl text-balance">Meet the professionals leading our association</p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Executive Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Margaret Thompson',
                title: 'President & Chief Executive Officer',
                bio: '20+ years of experience in professional association management and strategic leadership',
                email: 'margaret@intuitivemethod.org',
              },
              {
                name: 'James Wilson',
                title: 'Vice President, Operations',
                bio: 'Leading operational excellence and organizational efficiency across all departments',
                email: 'james@intuitivemethod.org',
              },
              {
                name: 'Patricia Martinez',
                title: 'Chief Financial Officer',
                bio: 'Managing financial strategy and ensuring sustainable growth for the association',
                email: 'patricia@intuitivemethod.org',
              },
              {
                name: 'Robert Johnson',
                title: 'Vice President, Membership',
                bio: 'Driving member engagement and expanding our professional community',
                email: 'robert@intuitivemethod.org',
              },
              {
                name: 'Susan Lee',
                title: 'Vice President, Programs & Events',
                bio: 'Creating compelling educational and networking opportunities for members',
                email: 'susan@intuitivemethod.org',
              },
              {
                name: 'David Garcia',
                title: 'Chief Technology Officer',
                bio: 'Implementing innovative digital solutions and modernizing our platforms',
                email: 'david@intuitivemethod.org',
              },
            ].map((leader, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary font-semibold text-sm mb-4">{leader.title}</p>
                <p className="text-foreground/70 text-sm mb-6">{leader.bio}</p>
                <a href={`mailto:${leader.email}`} className="text-sm text-primary hover:underline">
                  {leader.email}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Dr. Elizabeth Chen',
                title: 'Board Chair',
                background: 'Industry Innovation Expert',
              },
              {
                name: 'Thomas Anderson',
                title: 'Board Vice Chair',
                background: 'Executive Leadership Consultant',
              },
              {
                name: 'Nina Patel',
                title: 'Board Secretary',
                background: 'Legal & Compliance Specialist',
              },
              {
                name: 'Christopher Brown',
                title: 'Board Treasurer',
                background: 'Financial Planning Expert',
              },
              {
                name: 'Amanda Foster',
                title: 'Board Member',
                background: 'Strategy & Business Development',
              },
              {
                name: 'Michael Harrison',
                title: 'Board Member',
                background: 'Technology & Digital Innovation',
              },
            ].map((director, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2">{director.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{director.title}</p>
                <p className="text-foreground/70 text-sm">{director.background}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Committees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Membership Committee',
                chair: 'Robert Johnson',
                focus: 'Member recruitment, engagement, and retention strategies',
                members: '8 members',
              },
              {
                name: 'Events & Programs',
                chair: 'Susan Lee',
                focus: 'Planning and executing educational and networking events',
                members: '10 members',
              },
              {
                name: 'Finance Committee',
                chair: 'Patricia Martinez',
                focus: 'Financial planning, budgeting, and fiscal oversight',
                members: '6 members',
              },
              {
                name: 'Governance Committee',
                chair: 'Dr. Elizabeth Chen',
                focus: 'Association policies, procedures, and compliance',
                members: '7 members',
              },
              {
                name: 'Technology Committee',
                chair: 'David Garcia',
                focus: 'Digital innovation and platform development',
                members: '9 members',
              },
              {
                name: 'Awards & Recognition',
                chair: 'Margaret Thompson',
                focus: 'Evaluating and selecting award recipients',
                members: '8 members',
              },
            ].map((committee, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">{committee.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Chair: </span>
                    <span className="text-foreground/70">{committee.chair}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Focus: </span>
                    <span className="text-foreground/70">{committee.focus}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Size: </span>
                    <span className="text-foreground/70">{committee.members}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Governance & Structure</h2>
          <Card className="p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Governance Framework</h3>
                <p className="text-foreground/80 mb-4">
                  The Intuitive Method Association is governed by a Board of Directors elected by our membership, ensuring democratic representation and accountability at all levels.
                </p>
                <p className="text-foreground/80">
                  Our governance structure emphasizes transparency, ethical conduct, and strategic decision-making to advance the association's mission and serve our members' interests.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Key Governance Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                    <span>Association Bylaws</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Download
                    </Button>
                  </li>
                  <li className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                    <span>Code of Ethics</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Download
                    </Button>
                  </li>
                  <li className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                    <span>Strategic Plan 2024-2026</span>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Download
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch with Leadership</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Have questions or suggestions for our leadership team?
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            Contact Leadership
          </Button>
        </div>
      </section>
    </div>
  );
}
