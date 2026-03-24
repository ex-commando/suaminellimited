import React from 'react';
import { motion } from 'framer-motion';
import { Shield, UserCheck, Search, Radar, Car, MapPin } from 'lucide-react';

const Security = () => {
  const securityExpertise = [
    { 
      title: 'Manned Guarding', 
      icon: <UserCheck />, 
      desc: 'Professionally trained security personnel for residential, commercial, and government facilities.',
      image: '/src/assets/images/security_guard_black_professional.png'
    },
    { 
      title: 'Security Consultancy', 
      icon: <Search />, 
      desc: 'We assess risks, identify vulnerabilities, and design effective security frameworks for complex environments.' 
    },
    { 
      title: 'CCTV Monitoring', 
      icon: <Radar />, 
      desc: '24/7 surveillance and real-time monitoring using advanced systems and control room setup.' 
    },
    { 
      title: 'Defensive Driver Training', 
      icon: <Car />, 
      desc: 'Training drivers to handle high-risk situations and ensure safety on the road in volatile regions.' 
    },
    { 
      title: 'Travel Security', 
      icon: <MapPin />, 
      desc: 'Secure travel planning, escort services, and real-time monitoring for executives and personnel.' 
    },
  ];

  return (
    <div className="security-page">
      <header className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(/src/assets/images/security_guard_black_professional.png)', backgroundSize: 'cover' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary)', borderRadius: '12px', marginBottom: '1.5rem', color: 'white' }}>
            <Shield size={48} />
          </div>
          <h1>Security Expertise</h1>
          <p style={{ maxWidth: '800px', margin: 'auto' }}>
            Delivering high-fidelity security solutions in Abuja and across Nigeria since 2024.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {securityExpertise.map((item, idx) => (
              <motion.div 
                key={item.title} 
                style={{ background: 'white', padding: '3rem 2rem', borderRadius: '12px', border: '1px solid var(--divider)', textAlign: 'center', transition: 'var(--transition)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -5, boxShadow: 'var(--shadow-lg)', borderColor: 'var(--primary)' }}
              >
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary-bg)', borderRadius: '50%', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Elite Surveillance Systems</h2>
              <p style={{ fontSize: '1.1rem', opacity: '0.8', marginBottom: '2rem' }}>
                We combine human expertise with cutting-edge technology to create a bulletproof security net 
                for your business. Our control rooms are operational 24/7/365.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['24/7 Monitoring', 'Quick Response Force', 'Vulnerability Assessments', 'Executive Protection'].map((point) => (
                  <li key={point} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/src/assets/images/ict_consultancy_black_specialists.png" alt="ICT & Security Rooms" style={{ borderRadius: '12px', border: '4px solid var(--primary)' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
