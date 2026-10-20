import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// --- Shared Navbar ---
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path 
    ? 'text-[#6355E8] font-bold border-b-2 border-[#6355E8]' 
    : 'text-gray-600 hover:text-[#6355E8]';

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all">
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="w-9 h-9 rounded-full bg-[#6355E8] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">D</div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">Doctify</span>
      </Link>
      <ul className="hidden md:flex space-x-7 text-sm font-medium">
        <li><Link to="/" className={`pb-1 transition-colors duration-300 ${isActive('/')}`}>Home</Link></li>
        <li><Link to="/about" className={`pb-1 transition-colors duration-300 ${isActive('/about')}`}>About</Link></li>
        <li><Link to="/services" className={`pb-1 transition-colors duration-300 ${isActive('/services')}`}>Services</Link></li>
        <li><Link to="/doctors" className={`pb-1 transition-colors duration-300 ${isActive('/doctors')}`}>Doctors</Link></li>
        <li><Link to="/appointments" className={`pb-1 transition-colors duration-300 ${isActive('/appointments')}`}>Appointments</Link></li>
        <li><Link to="/blog" className={`pb-1 transition-colors duration-300 ${isActive('/blog')}`}>Blog</Link></li>
        <li><Link to="/contact" className={`pb-1 transition-colors duration-300 ${isActive('/contact')}`}>Contact</Link></li>
      </ul>
      <div className="flex items-center space-x-3">
        <button onClick={() => navigate('/signup')} className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300">Sign up</button>
        <button onClick={() => navigate('/login')} className="px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-[#6355E8] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md">Login</button>
      </div>
    </nav>
  );
};

// --- Shared Footer ---
const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 px-8 mt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#6355E8] flex items-center justify-center text-white font-bold">D</div>
          <span className="text-xl font-bold">Doctify</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          Connecting patients with world-class healthcare specialists anywhere, anytime.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-sm mb-4 text-white">Quick Links</h4>
        <ul className="space-y-2 text-xs text-gray-400">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
          <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link to="/doctors" className="hover:text-white transition">Our Doctors</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-sm mb-4 text-white">Support</h4>
        <ul className="space-y-2 text-xs text-gray-400">
          <li><Link to="/appointments" className="hover:text-white transition">Appointments</Link></li>
          <li><Link to="/blog" className="hover:text-white transition">Health Blog</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-sm mb-4 text-white">Get in Touch</h4>
        <p className="text-xs text-gray-400 mb-2">📍 123 Healthcare Blvd, Suite 400</p>
        <p className="text-xs text-gray-400 mb-2">📞 +1 (800) 123-4567</p>
        <p className="text-xs text-gray-400">✉️ support@doctify.com</p>
      </div>
    </div>

    <div className="text-center pt-8 text-xs text-gray-500">
      © 2026 Doctify Healthcare. All rights reserved. Built with React & Tailwind CSS.
    </div>
  </footer>
);

// Hero Section
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="px-8 py-8 max-w-7xl mx-auto pt-6 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-gradient-to-br from-purple-100/80 via-indigo-50/60 to-amber-50/70 p-8 rounded-3xl flex flex-col justify-between shadow-sm border border-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="animate-slideRight">
            <span className="inline-block px-3.5 py-1 bg-purple-200/80 text-purple-900 text-xs font-semibold rounded-full mb-4 animate-pulse">
              24/7 Services Available
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Your Health, Our Technology. Trusted Doctors at Your Fingertips.
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Whether in-person or online, Doctify connects you with certified, compassionate healthcare professionals — quickly, safely, and effortlessly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => navigate('/appointments')} 
                className="px-6 py-3 bg-[#6355E8] text-white rounded-full font-medium text-sm shadow-md hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="px-5 py-3 border border-gray-900 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-900 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-1"
              >
                <span>See How It Works</span>
                <span>→</span>
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl flex items-center justify-between shadow-sm hover:scale-102 transition-transform">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="user" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="user" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="user" />
                </div>
                <span className="text-xs font-semibold text-gray-800">More than 5k+ Doctors in your Doctify</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden group">
          <div className="overflow-hidden rounded-2xl w-full h-[440px]">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80" 
              alt="Doctors" 
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => (
  <section className="px-8 py-12 max-w-7xl mx-auto animate-fadeIn">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
      <div className="lg:col-span-5 overflow-hidden rounded-2xl group">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Healthcare team" className="rounded-2xl w-full h-[360px] object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="lg:col-span-7 space-y-4">
        <span className="text-[#6355E8] font-bold text-xs uppercase tracking-wider">About Doctify</span>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">Why Choose Doctify for Your Healthcare?</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We bridge the gap between patient care and advanced health technology, ensuring instant access to specialist advice and digital prescriptions.
        </p>
        <div className="bg-[#6355E8] text-white p-4 rounded-2xl flex items-center space-x-3 shadow-md transform hover:-translate-y-1 transition-transform duration-300">
          <span className="text-2xl">🛡️</span>
          <div>
            <h4 className="font-bold text-sm">Certified Medical Experts</h4>
            <p className="text-xs text-indigo-100">Only licensed and verified healthcare professionals.</p>
          </div>
        </div>
        <div className="bg-[#6355E8]/10 text-gray-800 p-4 rounded-2xl flex items-center space-x-3 border border-indigo-100 transform hover:-translate-y-1 transition-transform duration-300">
          <span className="text-2xl">📅</span>
          <div>
            <h4 className="font-bold text-sm text-[#6355E8]">Same-Day Appointments</h4>
            <p className="text-xs text-gray-600">No long waiting rooms. Book & consult easily.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => (
  <section className="px-8 py-12 max-w-7xl mx-auto animate-fadeIn">
    <div className="text-center mb-10">
      <span className="text-[#6355E8] font-bold text-xs uppercase tracking-wider">Our Services</span>
      <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Medical Support for Every Need</h2>
      <p className="text-gray-500 text-sm mt-2">Comprehensive healthcare services designed with convenience and expertise.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: 'General Consultations', icon: '🩺', desc: 'Diagnosis, prescriptions, and expert advice in minutes.' },
        { title: 'Pediatrics', icon: '👶', desc: 'Specialized care for your child’s growth and health.', featured: true },
        { title: 'Dental Services', icon: '🦷', desc: 'Cleanings, fillings, and smile makeovers.' },
        { title: 'Mental Health', icon: '🧠', desc: 'Private therapy and psychiatric help from licensed professionals.' },
        { title: 'Diagnostics & Lab Tests', icon: '🔬', desc: 'Fast, accurate reports delivered directly to your phone.' },
        { title: 'Chronic Care Programs', icon: '❤️', desc: 'Tailored plans for diabetes, heart conditions, and more.' },
      ].map((service, idx) => (
        <div 
          key={idx} 
          className={`p-6 rounded-3xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
            service.featured 
              ? 'bg-[#6355E8] text-white shadow-lg hover:bg-indigo-700' 
              : 'bg-white text-gray-800 border border-gray-100 hover:border-[#6355E8]/30 shadow-sm'
          }`}
        >
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-bold text-xl transition-transform duration-300 hover:rotate-6 ${
            service.featured ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            {service.icon}
          </div>
          <h3 className="text-lg font-bold mb-2">{service.title}</h3>
          <p className={`text-xs leading-relaxed mb-6 ${service.featured ? 'text-indigo-100' : 'text-gray-500'}`}>{service.desc}</p>
          <span className="text-sm font-semibold flex items-center space-x-1 group">
            <span>Learn More</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </span>
        </div>
      ))}
    </div>
  </section>
);

// Doctors Section
const DoctorsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="px-8 py-12 max-w-7xl mx-auto animate-fadeIn">
      <div className="text-center mb-10">
        <span className="text-[#6355E8] font-bold text-xs uppercase tracking-wider">Our Medical Team</span>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Meet Our Certified Doctors</h2>
        <p className="text-gray-500 text-sm mt-2">Experienced healthcare professionals ready to consult with you online or in-person.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Dr. Sarah Jenkins', role: 'Cardiologist Specialist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80' },
          { name: 'Dr. Michael Chen', role: 'Pediatrician Specialist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80' },
          { name: 'Dr. Emily Watson', role: 'Neurologist Specialist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
        ].map((doc, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="overflow-hidden rounded-2xl mb-4 h-52">
              <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#6355E8] transition-colors">{doc.name}</h3>
            <p className="text-xs text-[#6355E8] font-semibold mb-2">{doc.role}</p>
            <p className="text-xs text-gray-500 mb-4">10+ years of dedicated healthcare experience.</p>
            <button onClick={() => navigate('/appointments')} className="w-full py-2.5 bg-gray-100 text-gray-800 rounded-full font-medium text-xs hover:bg-[#6355E8] hover:text-white transition-all duration-300 shadow-sm hover:scale-102">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Appointments Section
const AppointmentsSection = () => (
  <section className="px-8 py-12 max-w-7xl mx-auto animate-fadeIn">
    <div className="bg-[#6355E8] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center mb-8">
        <span className="inline-block px-3 py-1 bg-white/20 text-xs font-semibold rounded-full mb-3">Quick Booking</span>
        <h2 className="text-3xl font-extrabold">Book Your Appointment Instantly</h2>
        <p className="text-indigo-100 text-xs mt-2">Fill out the form below to schedule your consultation with certified doctors.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-md">
        <input type="text" placeholder="Your Full Name" className="w-full p-3.5 rounded-xl bg-white text-gray-800 text-xs outline-none focus:ring-2 focus:ring-purple-300 transition-all" />
        <input type="email" placeholder="Email Address" className="w-full p-3.5 rounded-xl bg-white text-gray-800 text-xs outline-none focus:ring-2 focus:ring-purple-300 transition-all" />
        <select className="w-full p-3.5 rounded-xl bg-white text-gray-700 text-xs outline-none focus:ring-2 focus:ring-purple-300 transition-all">
          <option value="">Select Specialty</option>
          <option value="cardiology">Cardiology</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="neurology">Neurology</option>
        </select>
        <input type="date" className="w-full p-3.5 rounded-xl bg-white text-gray-700 text-xs outline-none focus:ring-2 focus:ring-purple-300 transition-all" />
        <button type="submit" className="md:col-span-2 py-3.5 bg-black text-white font-bold text-xs rounded-xl hover:bg-gray-800 hover:scale-101 active:scale-98 transition-all duration-300 shadow-md">
          Confirm Booking →
        </button>
      </form>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="px-8 py-12 max-w-7xl mx-auto animate-fadeIn">
    <div className="text-center mb-10">
      <span className="text-[#6355E8] font-bold text-xs uppercase tracking-wider">Testimonials</span>
      <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Patients Love Doctify</h2>
      <p className="text-gray-500 text-sm mt-1">Real stories from real patients who trust Doctify with their health needs.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
        <p className="text-xs text-gray-600 leading-relaxed mb-4">"Doctify has completely revolutionized our family care. The intuitive design and fast appointments saved us countless hours."</p>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-purple-200 text-[#6355E8] flex items-center justify-center font-bold text-xs">M</div>
          <div>
            <h4 className="text-xs font-bold text-gray-900">Mark Spector</h4>
            <p className="text-[10px] text-gray-400">Verified Patient</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
        <p className="text-xs text-gray-600 leading-relaxed mb-4">"What stands out about Doctify is how seamlessly it balances simplicity with functionality. The video call quality was crystal clear!"</p>
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-purple-200 text-[#6355E8] flex items-center justify-center font-bold text-xs">A</div>
          <div>
            <h4 className="text-xs font-bold text-gray-900">An. Jean</h4>
            <p className="text-[10px] text-gray-400">Verified Patient</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Blog Section
const BlogSection = () => (
  <section className="px-8 py-12 max-w-7xl mx-auto animate-fadeIn">
    <div className="text-center mb-10">
      <span className="text-[#6355E8] font-bold text-xs uppercase tracking-wider">Health Articles</span>
      <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Latest Health News & Blog</h2>
      <p className="text-gray-500 text-sm mt-2">Read expert tips and insights for maintaining a healthier life.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: '10 Daily Habits for a Healthy Heart', cat: 'Wellness', img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=400&q=80' },
        { title: 'Managing Stress in a Fast-Paced World', cat: 'Mental Health', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80' },
        { title: 'The Ultimate Guide to Balanced Diets', cat: 'Nutrition', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80' },
      ].map((blog, idx) => (
        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
          <div className="overflow-hidden h-44">
            <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="p-5">
            <span className="text-[10px] font-bold text-[#6355E8] uppercase">{blog.cat}</span>
            <h3 className="font-bold text-gray-900 text-sm mt-1 mb-2 group-hover:text-[#6355E8] transition-colors">{blog.title}</h3>
            <p className="text-xs text-gray-500 mb-4">Simple changes to your routine that reduce medical risks...</p>
            <span className="text-xs font-semibold text-[#6355E8] cursor-pointer group-hover:translate-x-1 transition-transform inline-block">Read Article →</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- FULL HOME PAGE (HAS ALL SECTIONS) ---
const HomePage = () => (
  <div className="animate-fadeIn">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <DoctorsSection />
    <AppointmentsSection />
    <TestimonialsSection />
    <BlogSection />
  </div>
);

// --- SEPARATE PAGES FOR ROUTING ---
const ContactPage = () => (
  <section className="px-8 py-12 max-w-4xl mx-auto animate-fadeIn">
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">Get in Touch</h2>
      <p className="text-gray-500 text-xs text-center mb-8">Have questions? We are here to help you 24/7.</p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#6355E8] transition-colors" />
        <input type="email" placeholder="Your Email" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#6355E8] transition-colors" />
        <textarea rows="4" placeholder="Your Message" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#6355E8] transition-colors"></textarea>
        <button className="w-full py-3.5 bg-[#6355E8] text-white rounded-xl font-bold text-xs hover:bg-indigo-700 hover:scale-101 active:scale-98 transition-all duration-300 shadow-md">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const SignupPage = () => (
  <section className="px-8 py-16 max-w-md mx-auto animate-fadeIn">
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
      <div className="w-10 h-10 rounded-full bg-[#6355E8] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">D</div>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Create Account</h2>
      <p className="text-gray-500 text-xs mb-6">Join Doctify for instant healthcare access.</p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#6355E8]" />
        <input type="email" placeholder="Email Address" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#6355E8]" />
        <input type="password" placeholder="Password" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#6355E8]" />
        <button className="w-full py-3.5 bg-[#6355E8] text-white rounded-xl font-bold text-xs hover:bg-indigo-700 transition-all shadow-md">
          Sign Up
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">Already have an account? <Link to="/login" className="text-[#6355E8] font-bold">Login</Link></p>
    </div>
  </section>
);

const LoginPage = () => (
  <section className="px-8 py-16 max-w-md mx-auto animate-fadeIn">
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
      <div className="w-10 h-10 rounded-full bg-black text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">D</div>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
      <p className="text-gray-500 text-xs mb-6">Login to manage your medical appointments.</p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input type="email" placeholder="Email Address" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-black" />
        <input type="password" placeholder="Password" className="w-full p-3.5 border border-gray-200 rounded-xl text-xs outline-none focus:border-black" />
        <button className="w-full py-3.5 bg-black text-white rounded-xl font-bold text-xs hover:bg-gray-800 transition-all shadow-md">
          Login
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">Don't have an account? <Link to="/signup" className="text-[#6355E8] font-bold">Sign Up</Link></p>
    </div>
  </section>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FD] text-gray-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/doctors" element={<DoctorsSection />} />
          <Route path="/appointments" element={<AppointmentsSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}