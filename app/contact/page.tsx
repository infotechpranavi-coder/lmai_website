import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact | Intuitive Method Association',
  description: 'Get in touch with the Intuitive Method Association',
};

export default function Contact() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-balance">We'd love to hear from you. Reach out with any questions or feedback</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-foreground/70 text-sm">
                    123 Association Street<br />
                    Professional City, PC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-foreground/70 text-sm">
                    Main: <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a><br />
                    Membership: <a href="tel:+1234567891" className="hover:underline">(123) 456-7891</a><br />
                    Events: <a href="tel:+1234567892" className="hover:underline">(123) 456-7892</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-foreground/70 text-sm">
                    General: <a href="mailto:info@intuitivemethod.org" className="hover:underline">info@intuitivemethod.org</a><br />
                    Support: <a href="mailto:support@intuitivemethod.org" className="hover:underline">support@intuitivemethod.org</a><br />
                    Careers: <a href="mailto:careers@intuitivemethod.org" className="hover:underline">careers@intuitivemethod.org</a>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-12 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a subject</option>
                  <option>Membership Inquiry</option>
                  <option>Event Registration</option>
                  <option>General Feedback</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6 font-semibold">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Office Hours & Support */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Support & Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Office Hours</h3>
                </div>
              </div>
              <div className="space-y-3 text-foreground/70">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold text-foreground">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Response Time</h3>
                </div>
              </div>
              <div className="space-y-3 text-foreground/70">
                <div>
                  <span className="font-semibold text-foreground">Email Support:</span>
                  <p>Typically respond within 24 hours</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Phone Support:</span>
                  <p>Available during business hours</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact by Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                department: 'Membership Services',
                contact: 'membership@intuitivemethod.org',
                phone: '(123) 456-7891',
                info: 'Join, renew, or manage your membership',
              },
              {
                department: 'Events & Programs',
                contact: 'events@intuitivemethod.org',
                phone: '(123) 456-7892',
                info: 'Register for events or propose a presentation',
              },
              {
                department: 'Technical Support',
                contact: 'support@intuitivemethod.org',
                phone: '(123) 456-7893',
                info: 'Help with website or member portal',
              },
              {
                department: 'Career Opportunities',
                contact: 'careers@intuitivemethod.org',
                phone: '(123) 456-7894',
                info: 'Explore job openings and career resources',
              },
              {
                department: 'Sponsorships',
                contact: 'sponsorship@intuitivemethod.org',
                phone: '(123) 456-7895',
                info: 'Partner with us for events and initiatives',
              },
              {
                department: 'Public Relations',
                contact: 'press@intuitivemethod.org',
                phone: '(123) 456-7896',
                info: 'Media inquiries and press coverage',
              },
            ].map((dept, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-4">{dept.department}</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-foreground/70">{dept.info}</p>
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <a href={`mailto:${dept.contact}`} className="text-primary hover:underline">
                      {dept.contact}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone:</p>
                    <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Find Us</h2>
          <div className="w-full h-96 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground/70">123 Association Street, Professional City, PC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
