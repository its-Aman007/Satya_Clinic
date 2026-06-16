import {
  ArrowRight,
  Brain,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Pill,
  Shield,
  Star,
  Stethoscope,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const TOTAL = 3;
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TOTAL);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", password: "" });
    setShowAuthModal(false);
  };

  const doctors = [
    {
      name: "Dr. Spd Dwivedi",
      specialty: "Cardiologist",
      qualification: "MD (Cardiology)",
      experience: "15+ Years",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Fff9a963d6d5844cba9023593023cb0f0?format=webp&width=800&height=1200",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service and professional doctors. Dr. Spd Dwivedi is highly knowledgeable and caring.",
      city: "Gorakhpur",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The clinic is very clean and well-maintained. Staff is courteous and the treatment is effective.",
      city: "Gorakhpur",
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Best cardiac care in the city. Dr. Drivedi's expertise is outstanding.",
      city: "Gorakhpur",
    },
  ];

  const services = [
    { icon: Heart, title: "Cardiac Care", desc: "Advanced heart disease treatment" },
    { icon: Brain, title: "Neurology", desc: "Specialized neurological care" },
    { icon: Pill, title: "Diabetes Management", desc: "Comprehensive diabetes care" },
    { icon: Stethoscope, title: "General Medicine", desc: "Preventive health checkups" },
    { icon: Zap, title: "Emergency Care", desc: "24/7 emergency services" },
    { icon: Shield, title: "Health Screening", desc: "Advanced diagnostic tests" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md">
              <Heart className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl text-primary hidden sm:inline">Satya Clinic</span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#doctors" className="text-foreground hover:text-primary transition">Doctors</a>
            <a href="#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </div>

          <button
            onClick={() => {
              setShowAuthModal(true);
              setIsSignUp(true);
            }}
            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-50 to-white pt-20 overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column */}
            <div className="z-10">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">Expert Healthcare Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Expert Healthcare You Can <span className="text-primary">Trust</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprehensive medical care, specialist consultations, preventive health checkups, and advanced treatment solutions tailored for your wellbeing.
              </p>

              <div className="flex gap-4 mb-12">
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsSignUp(true);
                  }}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition flex items-center gap-2"
                >
                  Book Appointment
                  <ArrowRight size={20} />
                </button>
                <a
                  href="tel:9336757991"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Experienced Doctors",
                  "Same Day Appointments",
                  "Modern Healthcare",
                  "Trusted by Patients",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-secondary w-5 h-5" />
                    <span className="text-gray-700 font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Doctor Image */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Faf040b58e2ec44bc88ce87da278fa731?format=webp&width=800&height=1200"
                  alt="Professional Doctor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Fff9a963d6d5844cba9023593023cb0f0?format=webp&width=800&height=1200"
                      alt="Dr. Spd Dwivedi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Dr. Spd Dwivedi</p>
                    <p className="text-sm text-gray-600">Cardiologist</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Patients Treated" },
              { number: "20+", label: "Specialist Doctors" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Showcase Section */}
      <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Expert Doctors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified specialists committed to providing the best healthcare solutions
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Fb13c2913d16e49b9b7af343c27b4206b?format=webp&width=800&height=1200"
                      alt={doctor.name}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="inline-block w-fit px-3 py-1 bg-primary/10 rounded-full mb-4">
                      <span className="text-primary font-semibold text-sm">Featured Doctor</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">{doctor.name}</h3>
                    <p className="text-2xl text-primary font-semibold mb-4">{doctor.specialty}</p>
                    
                    <div className="space-y-3 mb-8">
                      <p className="text-gray-700">
                        <span className="font-semibold">Qualification:</span> {doctor.qualification}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Experience:</span> {doctor.experience}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          setShowAuthModal(true);
                          setIsSignUp(true);
                        }}
                        className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
                      >
                        Book Consultation
                      </button>
                      <a
                        href="tel:9336757991"
                        className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition flex items-center justify-center gap-2"
                      >
                        <Phone size={18} />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Clinic Logo */}
            <div className="inline-block mb-6 p-4 bg-white rounded-full shadow-lg border-4 border-primary">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Heart shape with medical cross */}
                <circle cx="40" cy="40" r="38" stroke="#0F6CBD" strokeWidth="2" fill="#E8F4FF"/>

                {/* Heart symbol */}
                <path d="M40 62C40 62 24 48 24 38C24 31 29 26 34 26C37 26 40 28 40 28C40 28 43 26 46 26C51 26 56 31 56 38C56 48 40 62 40 62Z"
                      fill="#0F6CBD"/>

                {/* Medical cross */}
                <g transform="translate(40, 40)">
                  <rect x="-3" y="-12" width="6" height="24" fill="white"/>
                  <rect x="-12" y="-3" width="24" height="6" fill="white"/>
                </g>
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to your medical needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition border border-gray-200 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2F87e10399d7fc4ea79452e701a2ea0a00?format=webp&width=800&height=1200"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">Why Choose Satya Clinic?</h2>
              <div className="space-y-6">
                {[
                  "Experienced Specialists",
                  "Advanced Diagnostics",
                  "Personalized Treatment",
                  "Affordable Healthcare",
                  "Emergency Support",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4">
                    <CheckCircle className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Patient Testimonials</h2>
            <p className="text-lg text-gray-600">Trusted by thousands of satisfied patients</p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg p-12 border border-gray-200">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[testimonialIndex].text}"
              </p>
              <p className="font-bold text-foreground text-lg">
                {testimonials[testimonialIndex].name}
              </p>
              <p className="text-gray-600">{testimonials[testimonialIndex].city}</p>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === testimonialIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Expert Healthcare?</h2>
          <p className="text-white/90 text-lg mb-8">Book your appointment today or call us for emergency services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setShowAuthModal(true);
                setIsSignUp(true);
              }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Book Now
            </button>
            <a
              href="https://wa.me/919336757991"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919336757991"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition flex items-center justify-center z-40"
      >
        <MessageCircle size={28} />
      </a>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Get in touch with us for any medical concerns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center border border-primary/20">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:9336757991" className="text-primary font-semibold hover:underline">
                93367 57991
              </a>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-8 text-center border border-secondary/20">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
              <p className="text-gray-600">Maya Bhavan, Gorakhpur, UP</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100/10 to-blue-100/5 rounded-xl p-8 text-center border border-gray-200">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 bg-slate-100 rounded-xl overflow-hidden h-96 shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.1676680143755!2d83.37028037443439!3d26.73902506753506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145002d30b56f%3A0x106c4dfb4d795adf!2sSatya%20Clinic!5e0!3m2!1sen!2sin!4v1781350096077!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Satya Clinic Location"
  />
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Satya Clinic</h4>
              <p className="text-white/70 text-sm">Providing premium healthcare services with excellence and compassion.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition">General Medicine</a></li>
                <li><a href="#" className="hover:text-white transition">Health Checkups</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#doctors" className="hover:text-white transition">Our Doctors</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="tel:9336757991" className="hover:text-white transition">9336757991</a></li>
                <li><a href="tel:05512201544" className="hover:text-white transition">0551-2201544</a></li>
                <li>Gorakhpur, UP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2026 Satya Clinic. All rights reserved. | Medical Care Excellence</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">{isSignUp ? "Create Account" : "Sign In"}</h2>
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="text-white/80 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-white/90 text-sm">Book your appointment with us today</p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required={isSignUp}
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition mt-6"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm mb-3">
                  {isSignUp ? "Already have an account?" : "Don't have an account?"}
                </p>
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setFormData({ name: "", email: "", phone: "", password: "" });
                  }}
                  className="text-primary font-semibold hover:underline"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
