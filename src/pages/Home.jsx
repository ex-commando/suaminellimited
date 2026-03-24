import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Hammer, Building, Monitor, Leaf, Droplets, Truck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Slider Images
import hero1 from '../assets/images/hero_slide_1_professional_abuja_1774333704661.png';
import hero2 from '../assets/images/hero_slide_2_infrastructure_nigeria_1774333721953.png';
import hero3 from '../assets/images/hero_slide_3_ict_security_abuja_1774333739838.png';
import teamImg from '../assets/images/suaminel_corporate_team_black.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: hero1,
      title: "Welcome to Suaminel Limited",
      subtitle: "Delivering world-class professional services across security, construction, and ICT infrastructure in Abuja."
    },
    {
      image: hero2,
      title: "Engineering Excellence",
      subtitle: "Building the future of Nigeria with sustainable civil engineering and modern real estate development."
    },
    {
      image: hero3,
      title: "Advanced Security",
      subtitle: "Total protection through high-fidelity surveillance, manned guarding, and strategic consultancy."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="home-page">
      <section className="hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img src={slides[currentSlide].image} alt="Hero Background" className="hero-img" />
            <div className="hero-overlay"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div 
            key={currentSlide + '-content'}
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ margin: '0 auto' }}
          >
            <h1 className="hero-title" style={{ fontSize: '4rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              {slides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i}>{word === "Suaminel" ? <span style={{ color: 'var(--primary)' }}>{word} </span> : word + " "}</span>
              ))}
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto 2.5rem', textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>
              {slides[currentSlide].subtitle}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/services" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Our Services</Link>
              <Link to="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1rem 2.5rem' }}>About Us</Link>
            </div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={32} /></button>
        <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={32} /></button>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <div key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)}></div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Why Choose Us</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Delivering Excellence Across Sectors</h2>
          </div>

          <div className="services-grid">
            <div className="service-card" style={{ background: 'var(--primary)', color: 'white' }}>
              <h3 style={{ fontSize: '2rem' }}>Our Core <br/> Expertise</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}>✓ Professional & Experienced Team</li>
                <li style={{ marginBottom: '1rem' }}>✓ Commitment to Quality</li>
                <li style={{ marginBottom: '1rem' }}>✓ Customer-Focused Delivery</li>
              </ul>
              <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Shield size={32} /></div>
              <h3 className="service-title">Security Services</h3>
              <p className="service-desc">Manned guarding, surveillance, and risk management tailored to your needs.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600' }}>Explore Security →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon"><Hammer size={32} /></div>
              <h3 className="service-title">Construction</h3>
              <p className="service-desc">Residential, commercial, and structural works with modern technology.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600' }}>See Projects →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={teamImg} 
                alt="Corporate Team" 
                style={{ borderRadius: '12px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover', height: '450px' }} 
              />
            </motion.div>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>Who We Are</span>
              <h2 style={{ fontSize: '2.5rem', margin: '1rem 0 1.5rem' }}>An Indigenous Company Built on Integrity</h2>
              <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Established in 2024, Suaminel Limited is positioned to handle projects of varying complexity. 
                Our mission is to serve communities and organizations with professionalism and tailored solutions.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Our Mission</h4>
                  <p style={{ fontSize: '0.9rem' }}>To serve communities with professionalism and innovative solutions.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Our Vision</h4>
                  <p style={{ fontSize: '0.9rem' }}>To be a trusted leader in multi-sector services and general contracting.</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>Read More Info</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to start your project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: '0.8' }}>
            Contact Abuja's most reliable multi-sector company today.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Get A Quote</Link>
        </div>
      </section>

      <style jsx="true">{`
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.1);
          color: white;
          border: none;
          padding: 1rem;
          cursor: pointer;
          z-index: 20;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .slider-btn:hover {
          background: var(--primary);
        }
        .slider-btn.prev { left: 2rem; }
        .slider-btn.next { right: 2rem; }
        .slider-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 20;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: var(--transition);
        }
        .dot.active {
          background: var(--primary);
          width: 30px;
          border-radius: 6px;
        }
        @media (max-width: 768px) {
          .slider-btn { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Home;
