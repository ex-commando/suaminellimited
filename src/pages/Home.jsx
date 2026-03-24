import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Hammer, Building, Monitor, Leaf, Droplets, Truck, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Smartphone } from 'lucide-react';
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
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ margin: '0 auto' }}
          >
            <motion.span 
              style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', display: 'block', marginBottom: '1.5rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Excellence Since 2024
            </motion.span>
            <h1 className="hero-title">
              {slides[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} style={{ display: 'inline-block', marginRight: '10px' }}>
                  {word === "Suaminel" ? <span style={{ color: 'var(--primary)' }}>{word} </span> : word + " "}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">
              {slides[currentSlide].subtitle}
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              <Link to="/services" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Explore Services</Link>
              <Link to="/about" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1.2rem 3rem' }}>Our Story</Link>
            </div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={40} /></button>
        <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={40} /></button>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <div key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)}></div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', position: 'relative', overflow: 'hidden' }}>
        <Building className="watermark-icon" style={{ left: '-5%', bottom: '-10%', transform: 'rotate(-15deg)' }} />
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <motion.span 
              style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.span>
            <motion.h2 
              style={{ fontSize: '3.5rem', marginTop: '1.5rem', color: 'var(--secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Integrated Multi-Sector Solutions
            </motion.h2>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <motion.div 
              className="service-card" 
              style={{ background: 'var(--secondary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '2rem' }}>Corporate Vision for <span style={{ color: 'var(--primary)' }}>Nigeria</span></h3>
                <p style={{ opacity: '0.8', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                  We are strategically positioned to handle projects of varying complexity with integrity.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}>
                  <CheckCircle size={20} color="var(--primary)" />
                  <span>Elite Security Framework</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}>
                  <CheckCircle size={20} color="var(--primary)" />
                  <span>Modern Infrastructure</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <CheckCircle size={20} color="var(--primary)" />
                  <span>Advanced ICT Consulting</span>
                </li>
              </ul>
              <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '700' }}>
                Company Portfolio <ArrowRight size={20} />
              </Link>
            </motion.div>

            <ServicePreviewCard 
              icon={<Shield size={48} />} 
              title="Security Expertise" 
              desc="Manned guarding, surveillance, and risk management tailored to Nigeria's landscape."
              link="/services"
              delay={0.1}
            />

            <ServicePreviewCard 
              icon={<Hammer size={48} />} 
              title="Civil Engineering" 
              desc="Industrial, commercial, and structural works driven by modern technology and precision."
              link="/services"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <Monitor className="watermark-icon" style={{ right: '0', top: '-10%', transform: 'rotate(20deg)' }} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <img 
                src={teamImg} 
                alt="Corporate Team" 
                style={{ borderRadius: '40px', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover', height: '600px', border: '8px solid var(--white)' }} 
              />
              <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', background: 'var(--primary)', padding: '2.5rem', borderRadius: '24px', color: 'var(--white)', boxShadow: 'var(--shadow-lg)' }}>
                <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>100+</h4>
                <p style={{ opacity: '0.9', fontWeight: '600' }}>Skilled Professionals</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Professional Integrity</span>
              <h2 style={{ fontSize: '3.5rem', margin: '1.5rem 0 2rem', lineHeight: '1.1' }}>An Indigenous Global Standard Company</h2>
              <p className="text-muted" style={{ marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
                Incorporated in 2024, Suaminel Limited combines local expertise with global standards to deliver 
                exceptional results across diverse sectors. Our mission is built on trust and efficiency.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>Our Mission</h4>
                  <p style={{ fontSize: '1rem', opacity: '0.8' }}>To serve communities with professionalism and innovative solutions.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>Our Vision</h4>
                  <p style={{ fontSize: '1rem', opacity: '0.8' }}>To be a trusted leader in multi-sector services and general contracting.</p>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '3.5rem', padding: '1.2rem 3rem' }}>Learn More About Us</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Smartphone className="watermark-icon" style={{ bottom: '0', left: '10%', opacity: '0.08', color: 'var(--white)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 5 }}>
          <motion.h2 
            style={{ fontSize: '4.5rem', marginBottom: '2.5rem', lineHeight: '1' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Partner with the <span style={{ color: 'var(--primary)' }}>Best.</span>
          </motion.h2>
          <p style={{ fontSize: '1.4rem', marginBottom: '4rem', opacity: '0.7', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Available 24/7 for security consultations and multi-sector project support in Abuja and beyond.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '16px' }}>Contact Us Now</Link>
            <Link to="/services" className="btn btn-outline" style={{ color: 'white', borderColor: 'white', padding: '1.5rem 4rem', fontSize: '1.2rem', borderRadius: '16px' }}>Our Services</Link>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(5px);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          width: 80px;
          height: 80px;
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
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.1);
        }
        .slider-btn.prev { left: 3rem; }
        .slider-btn.next { right: 3rem; }
        .slider-dots {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1.5rem;
          z-index: 20;
        }
        .dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: var(--transition);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .dot.active {
          background: var(--primary);
          width: 45px;
          border-radius: 8px;
        }
        @media (max-width: 1024px) {
          .slider-btn { width: 60px; height: 60px; }
          .slider-btn.prev { left: 1rem; }
          .slider-btn.next { right: 1rem; }
        }
        @media (max-width: 768px) {
          .slider-btn { display: none; }
        }
      `}</style>
    </div>
  );
};

const ServicePreviewCard = ({ icon, title, desc, link, delay }) => (
  <motion.div 
    className="service-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ translateY: -15 }}
  >
    <div className="service-icon" style={{ fontSize: '3rem' }}>{icon}</div>
    <h3 className="service-title" style={{ fontSize: '1.8rem' }}>{title}</h3>
    <p className="service-desc" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{desc}</p>
    <Link to={link} style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
      View Details →
    </Link>
  </motion.div>
);

export default Home;
