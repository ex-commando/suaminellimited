import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Building, Monitor, Leaf, Droplets, Truck, Sun, ArrowRightCircle, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

// Image imports
import securityImg from '../assets/images/security_guard_black_professional.png';
import constructionImg from '../assets/images/construction_black_engineers_abuja.png';
import solarImg from '../assets/images/solar_energy_panels_abuja_1774331773335.png';
import boreholeImg from '../assets/images/borehole_drilling_rig_modern_1774331809740.png';
import ictImg from '../assets/images/ict_consultancy_black_specialists.png';
import agriImg from '../assets/images/agriculture_black_professional_nigeria.png';

const Services = () => {
  const allServices = [
    { 
      id: 1, 
      title: 'Security Services', 
      icon: <Shield size={32} />, 
      image: securityImg,
      desc: 'Comprehensive solutions tailored to protect people, assets, and infrastructure. Includes manned guarding, CCTV, and consultancy.',
      link: '/services/security'
    },
    { 
      id: 2, 
      title: 'Civil & Construction', 
      icon: <Hammer size={32} />, 
      image: constructionImg,
      desc: 'Residential and commercial buildings, structural works, and community development through infrastructure projects.' 
    },
    { 
      id: 3, 
      title: 'Solar Energy Solutions', 
      icon: <Sun size={32} />, 
      image: solarImg,
      desc: 'Design and deployment of solar-powered systems for homes, businesses, and street lighting.' 
    },
    { 
      id: 4, 
      title: 'Borehole & Water', 
      icon: <Droplets size={32} />, 
      image: boreholeImg,
      desc: 'Industrial and domestic borehole drilling, solar-powered boreholes, and irrigation systems.' 
    },
    { 
      id: 5, 
      title: 'ICT Consultancy', 
      icon: <Monitor size={32} />, 
      image: ictImg,
      desc: 'Technology solutions, cybersecurity audit, and systems integration for modern enterprise development.' 
    },
    { 
      id: 6, 
      title: 'Agricultural Services', 
      icon: <Leaf size={32} />, 
      image: agriImg,
      desc: 'Supporting agricultural development through irrigation system design and project support.' 
    },
  ];

  return (
    <div className="services-page">
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <Box className="watermark-icon watermark-icon-light" style={{ right: '10%', top: '10%' }} />
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            Our Core Services
          </motion.h1>
          <motion.p 
            style={{ maxWidth: '700px', margin: '2rem auto', fontSize: '1.25rem', opacity: '0.8' }}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Suaminel Limited offers proactive and customer-focused solutions across 
            diverse industries with commitment to excellence.
          </motion.p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '4rem' }}>
            {allServices.map((s, idx) => (
              <motion.div 
                key={s.id} 
                className="service-card-premium"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -15 }}
              >
                <div className="service-img-wrapper" style={{ position: 'relative', height: '300px', borderRadius: '24px 24px 0 0', overflow: 'hidden' }}>
                  <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="service-icon-overlay" style={{ position: 'absolute', bottom: '20px', right: '30px', background: 'var(--primary)', color: 'white', padding: '1.2rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
                    {s.icon}
                  </div>
                  <div className="service-img-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.4))' }}></div>
                </div>
                <div className="service-card-content" style={{ padding: '3.5rem 3rem 3rem' }}>
                  <h3 className="service-card-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>{s.title}</h3>
                  <p className="service-card-desc" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{s.desc}</p>
                  {s.link ? (
                    <Link to={s.link} className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '12px' }}>
                      Learn More <ArrowRightCircle size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                  ) : (
                    <Link to="/contact" className="btn btn-outline" style={{ padding: '1rem 2.5rem', borderRadius: '12px' }}>
                      Enquire Now <ArrowRightCircle size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', position: 'relative', overflow: 'hidden' }}>
        <Truck className="watermark-icon" style={{ left: '0', bottom: '0', opacity: '0.04' }} />
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px' }}>Expert Logistics</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '2rem' }}>General Supplies & Procurement</h2>
          <p style={{ maxWidth: '800px', margin: '2rem auto 5rem', color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            We supply and install high-quality security equipment, office furniture, 
            telecommunication systems, and educational materials.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {['Security Systems', 'Office Furniture', 'Computers', 'Telecoms', 'Educational Materials'].map((item) => (
              <motion.div 
                key={item} 
                className="supply-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--divider)' }}>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>{item}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .service-card-premium {
          background: white;
          border-radius: 32px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          border: 1px solid var(--divider);
        }
        .service-card-premium:hover {
          border-color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default Services;
