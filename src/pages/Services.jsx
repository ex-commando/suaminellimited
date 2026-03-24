import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Hammer, Building, Monitor, Leaf, Droplets, Truck, Sun, ArrowRightCircle } from 'lucide-react';
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
      icon: <Shield />, 
      image: securityImg,
      desc: 'Comprehensive solutions tailored to protect people, assets, and infrastructure. Includes manned guarding, CCTV, and consultancy.',
      link: '/services/security'
    },
    { 
      id: 2, 
      title: 'Civil & Construction', 
      icon: <Hammer />, 
      image: constructionImg,
      desc: 'Residential and commercial buildings, structural works, and community development through infrastructure projects.' 
    },
    { 
      id: 3, 
      title: 'Solar Energy Solutions', 
      icon: <Sun />, 
      image: solarImg,
      desc: 'Design and deployment of solar-powered systems for homes, businesses, and street lighting.' 
    },
    { 
      id: 4, 
      title: 'Borehole & Water', 
      icon: <Droplets />, 
      image: boreholeImg,
      desc: 'Industrial and domestic borehole drilling, solar-powered boreholes, and irrigation systems.' 
    },
    { 
      id: 5, 
      title: 'ICT Consultancy', 
      icon: <Monitor />, 
      image: ictImg,
      desc: 'Technology solutions, cybersecurity audit, and systems integration for modern enterprise development.' 
    },
    { 
      id: 6, 
      title: 'Agricultural Services', 
      icon: <Leaf />, 
      image: agriImg,
      desc: 'Supporting agricultural development through irrigation system design and project support.' 
    },
  ];

  return (
    <div className="services-page">
      <header className="page-header" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <h1>Our Core Services</h1>
          <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Suaminel Limited offers proactive and customer-focused solutions across 
            diverse industries with commitment to excellence.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
            {allServices.map((s, idx) => (
              <motion.div 
                key={s.id} 
                className="service-card-premium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-img-wrapper">
                  <img src={s.image} alt={s.title} className="service-card-img" />
                  <div className="service-icon-badge">{s.icon}</div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{s.title}</h3>
                  <p className="service-card-desc">{s.desc}</p>
                  {s.link ? (
                    <Link to={s.link} className="btn-service-more">Learn More <ArrowRightCircle size={18} /></Link>
                  ) : (
                    <Link to="/contact" className="btn-service-more">Enquire Now <ArrowRightCircle size={18} /></Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>General Supplies & Procurement</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
            We supply and install high-quality security equipment, office furniture, 
            telecommunication systems, and educational materials across Nigeria.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {['Security Equipment', 'Office Furniture', 'Computers & Accessories', 'Telecomm Systems', 'Educational Materials'].map((item) => (
              <div key={item} style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ color: 'var(--primary)' }}>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .service-card-premium {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }
        .service-card-premium:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
        .service-img-wrapper {
          position: relative;
          height: 240px;
        }
        .service-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .service-icon-badge {
          position: absolute;
          bottom: -20px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          box-shadow: var(--shadow-md);
        }
        .service-card-content {
          padding: 2.5rem 2rem 2rem;
        }
        .service-card-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--secondary);
        }
        .service-card-desc {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .btn-service-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }
        .btn-service-more:hover {
          color: var(--primary-dark);
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};

export default Services;
