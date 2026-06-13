import { MapPin, Phone, Clock, Award, Users } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Satya Clinic</h1>
              <p className="text-xs text-muted-foreground">Healthcare Excellence</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="#doctor" className="text-foreground hover:text-primary transition">About Doctor</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Expert Cardiac & Diabetic Care
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Welcome to Satya Clinic, your trusted partner in comprehensive healthcare. We specialize in cardiac and diabetic management with compassionate, personalized care for every patient.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold">
                  Book Appointment
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="text-primary w-10 h-10" />
                  </div>
                  <p className="text-muted-foreground text-sm">Professional Healthcare Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="doctor" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Meet Our Doctor</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Dedicated to providing exceptional care with extensive expertise
          </p>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-primary rounded-xl flex items-center justify-center">
                  <Users className="text-white opacity-50 w-20 h-20" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-2xl font-bold text-foreground mb-2">Doctor at Satya Clinic</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Award size={20} className="text-accent" />
                  <span className="text-accent font-semibold">Highly Qualified</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Education</p>
                    <p className="text-foreground">MD (Medical College), K.G.'s Medical College, Lucknow</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Specialization</p>
                    <p className="text-foreground">Diploma in Cardio-Diabetic Management (PGDip D)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Expertise</p>
                    <p className="text-foreground">Cardio-Diabetic Management, Heart Disease, Diabetes Management</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase">Affiliations</p>
                    <p className="text-foreground">Member of Indian Heart Federation & Diabetes Federation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Our Services</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Cardiac Care",
                description: "Expert diagnosis and treatment of heart conditions"
              },
              {
                icon: Activity,
                title: "Diabetes Management",
                description: "Complete diabetes care and blood sugar control"
              },
              {
                icon: Stethoscope,
                title: "General Medicine",
                description: "Comprehensive health checkups and preventive care"
              },
              {
                icon: TrendingDown,
                title: "Health Monitoring",
                description: "Regular monitoring and follow-up care"
              },
              {
                icon: Users,
                title: "Patient Education",
                description: "Guidance on lifestyle and disease management"
              },
              {
                icon: Award,
                title: "Quality Care",
                description: "Evidence-based treatment protocols"
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Get In Touch</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're here to help. Contact us for appointments and inquiries.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Address</h4>
              <p className="text-muted-foreground mb-2">Maya Bhavan, Daidpur</p>
              <p className="text-muted-foreground mb-2">Canal Road, Gorakhpur</p>
              <p className="text-muted-foreground text-sm">Uttar Pradesh, India</p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Phone</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Clinic</p>
                  <a href="tel:05512201544" className="text-accent font-semibold hover:underline">
                    0551-2201544
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Mobile</p>
                  <a href="tel:9336757991" className="text-accent font-semibold hover:underline">
                    9336757991
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase mb-1">Direct</p>
                  <a href="tel:9935057991" className="text-accent font-semibold hover:underline">
                    9935057991
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-slate-300/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-foreground w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Clinic Hours</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Mon - Fri:</span> 9:00 AM - 6:00 PM
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Saturday:</span> 10:00 AM - 2:00 PM
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Sunday:</span> Closed
                </p>
                <p className="text-accent font-semibold mt-4">Emergency: 24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 bg-slate-100 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.7269146833466!2d83.3654!3d26.7598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399410f0f0f0f0f1%3A0x0!2sSatya%20Clinic!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Take Care of Your Health?</h3>
          <p className="text-white/90 mb-8 text-lg">
            Book an appointment with our experienced doctor today
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
            Schedule Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Satya Clinic</h4>
              <p className="text-white/70 text-sm">Providing quality healthcare with compassion and expertise.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#doctor" className="hover:text-white transition">About Doctor</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Cardiac Care</a></li>
                <li><a href="#" className="hover:text-white transition">Diabetes Management</a></li>
                <li><a href="#" className="hover:text-white transition">General Medicine</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Phone: <a href="tel:9336757991" className="hover:text-white transition">9336757991</a></li>
                <li>Clinic: <a href="tel:05512201544" className="hover:text-white transition">0551-2201544</a></li>
                <li>Gorakhpur, UP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 Satya Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom icon components
function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function Stethoscope(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M19.1 4.9C23 8.8 23 15.2 19.1 19.1M1 12a11 11 0 0 1 22 0" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function TrendingDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
