import { MapPin, Phone, Clock, Award, Users, Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignUp ? "Sign up:" : "Sign in:", formData);
    // Reset form
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
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
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column with Blurred Background */}
            <div className="relative">
              {/* Blurred background image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden -z-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Faf040b58e2ec44bc88ce87da278fa731?format=webp&width=800&height=1200"
                  alt="Background"
                  className="w-full h-full object-cover blur-md opacity-20"
                />
                <div className="absolute inset-0 bg-white/60"></div>
              </div>
              <div className="relative z-10 py-8">
                {/* Doctor Photo and Name */}
                <div className="flex flex-col items-start gap-4 mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden shadow-lg">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Fff9a963d6d5844cba9023593023cb0f0?format=webp&width=800&height=1200"
                      alt="Dr. Spd Dwivedi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Doctor</p>
                    <h3 className="text-xl font-bold text-foreground">Dr. Spd Dwivedi</h3>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                  Expert Cardiac & Diabetic Care
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Welcome to Satya Clinic, your trusted partner in comprehensive healthcare. We specialize in cardiac and diabetic management with compassionate, personalized care for every patient.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsSignUp(true);
                    }}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
                  >
                    Book Appointment
                  </button>
                  <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column with Doctor Image */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-1 overflow-hidden">
              <div className="relative rounded-xl h-80 overflow-hidden">
                {/* Doctor image as background */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Faf040b58e2ec44bc88ce87da278fa731?format=webp&width=800&height=1200"
                  alt="Professional Healthcare"
                  className="w-full h-full object-cover"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                {/* Text content */}
                <div className="absolute inset-0 flex items-end justify-center p-8">
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg mb-2">Professional Healthcare Services</p>
                    <p className="text-white/90 text-sm">Trusted by patients for excellence</p>
                  </div>
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
                <div className="w-48 h-56 bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Fff9a963d6d5844cba9023593023cb0f0?format=webp&width=800&height=1200"
                    alt="Doctor at Satya Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-2xl font-bold text-foreground mb-2">Dr. Spd Dwivedi</h4>
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

      {/* Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Our Clinic Facilities</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            State-of-the-art facilities designed for your comfort and care
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Doctor Cabin */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2Faf040b58e2ec44bc88ce87da278fa731?format=webp&width=800&height=1200"
                  alt="Doctor Cabin"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-lg font-bold text-foreground mb-2">Doctor Consultation Room</h4>
                <p className="text-muted-foreground text-sm">Equipped with modern diagnostic equipment for comprehensive patient care and consultation</p>
              </div>
            </div>

            {/* Sitting Area */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2F87e10399d7fc4ea79452e701a2ea0a00?format=webp&width=800&height=1200"
                  alt="Sitting Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-lg font-bold text-foreground mb-2">Patient Waiting Area</h4>
                <p className="text-muted-foreground text-sm">Comfortable seating and peaceful environment designed to provide patients with a relaxing experience while they wait for their consultation</p>
              </div>
            </div>

            {/* Waiting Hall */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa145b7c77dfe4b7bb5cdc4ff5b1f095f%2F4c1e43a762da4e2ca88d0ef7030d1ca0?format=webp&width=800&height=1200"
                  alt="Patient Waiting Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-lg font-bold text-foreground mb-2">Hospital Location</h4>
                <p className="text-muted-foreground text-sm">Visit us at our modern clinic facility located in Gorakhpur with easy access and convenient parking for all our valued patients</p>
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
                description: "Expert diagnosis and treatment of heart conditions",
                color: "from-red-50 to-red-100"
              },
              {
                icon: Activity,
                title: "Diabetes Management",
                description: "Complete diabetes care and blood sugar control",
                color: "from-orange-50 to-orange-100"
              },
              {
                icon: Stethoscope,
                title: "General Medicine",
                description: "Comprehensive health checkups and preventive care",
                color: "from-green-50 to-green-100"
              },
              {
                icon: TrendingDown,
                title: "Health Monitoring",
                description: "Regular monitoring and follow-up care",
                color: "from-blue-50 to-blue-100"
              },
              {
                icon: Users,
                title: "Patient Education",
                description: "Guidance on lifestyle and disease management",
                color: "from-purple-50 to-purple-100"
              },
              {
                icon: Award,
                title: "Quality Care",
                description: "Evidence-based treatment protocols",
                color: "from-indigo-50 to-indigo-100"
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-6 hover:shadow-lg transition overflow-hidden group">
                  <div className={`bg-gradient-to-br ${service.color} rounded-lg p-4 mb-4 group-hover:scale-110 transition`}>
                    <Icon className="text-primary w-8 h-8" />
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
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Address</h4>
              <p className="text-muted-foreground mb-2">Maya Bhavan, Daudpur</p>
              <p className="text-muted-foreground mb-2">Canal Road, Gorakhpur</p>
              <p className="text-muted-foreground text-sm">Uttar Pradesh, India</p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-8 text-center hover:shadow-lg transition">
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
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 text-center hover:shadow-lg transition">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Take Care of Your Health?</h3>
          <p className="text-white/90 mb-8 text-lg">
            Book an appointment with our experienced doctor today
          </p>
          <button 
            onClick={() => {
              setShowAuthModal(true);
              setIsSignUp(true);
            }}
            className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
          >
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

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">{isSignUp ? "Create Account" : "Sign In"}</h2>
                <button 
                  onClick={() => setShowAuthModal(false)}
                  className="text-white/80 hover:text-white text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <p className="text-white/90 text-sm">
                {isSignUp ? "Book your appointment today" : "Welcome back to Satya Clinic"}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field - only for signup */}
                {isSignUp && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required={isSignUp}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=" Please enter your email"
                      className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password - only for signup */}
                {isSignUp && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required={isSignUp}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition mt-6"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>
              </form>

              {/* Toggle Auth Mode */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground text-sm mb-3">
                  {isSignUp ? "Already have an account?" : "Don't have an account?"}
                </p>
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
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
