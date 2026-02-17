import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Membership | Intuitive Method Association',
  description: 'Join our professional association and unlock exclusive benefits',
};

export default function Membership() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership</h1>
          <p className="text-lg md:text-xl text-balance">Join our thriving professional community today</p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard',
                price: '$99',
                period: 'per year',
                description: 'Perfect for individuals new to the association',
                features: [
                  'Access to monthly newsletters',
                  'Member directory',
                  'Networking events',
                  'Online resource library',
                  'Professional development webinars',
                ],
              },
              {
                name: 'Professional',
                price: '$199',
                period: 'per year',
                description: 'Ideal for active professionals',
                features: [
                  'All Standard benefits',
                  'Priority event access',
                  'One-on-one mentoring',
                  'Exclusive workshops',
                  'Professional certification discount',
                  'VIP networking events',
                ],
                featured: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For organizations and teams',
                features: [
                  'All Professional benefits',
                  'Multiple team member access',
                  'Dedicated account manager',
                  'Custom training programs',
                  'Sponsorship opportunities',
                  'Corporate networking events',
                ],
              },
            ].map((tier, idx) => (
              <Card
                key={idx}
                className={`p-8 flex flex-col ${
                  tier.featured ? 'border-2 border-primary shadow-lg' : ''
                } hover:shadow-lg transition-shadow`}
              >
                {tier.featured && (
                  <div className="mb-4 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold w-fit">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-foreground/70 ml-2">{tier.period}</span>
                </div>
                <p className="text-foreground/70 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-full py-6 ${
                    tier.featured
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Exclusive Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Networking Opportunities', description: 'Connect with industry leaders and professionals' },
              { title: 'Professional Development', description: 'Access exclusive training and certification programs' },
              { title: 'Industry Insights', description: 'Stay updated with the latest trends and best practices' },
              { title: 'Resource Library', description: 'Unlimited access to research and educational materials' },
              { title: 'Mentorship Program', description: 'Learn from experienced mentors in your field' },
              { title: 'Job Board Access', description: 'Browse exclusive career opportunities' },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'How do I renew my membership?',
                answer: 'You can renew your membership through your online member portal 30 days before your membership expires.',
              },
              {
                question: 'What if I want to cancel my membership?',
                answer: 'You can manage your membership status anytime through your account settings or contact our support team.',
              },
              {
                question: 'Are there any additional fees?',
                answer: 'Some special events and advanced certifications may have additional fees, but all standard member benefits are included.',
              },
              {
                question: 'Can I upgrade or downgrade my tier?',
                answer: 'Yes! You can change your membership tier at any time. Changes take effect immediately.',
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-lg md:text-xl mb-8 text-balance">
            Start your professional journey with us today
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg">
            Become a Member
          </Button>
        </div>
      </section>
    </div>
  );
}
