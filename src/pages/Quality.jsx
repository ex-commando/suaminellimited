import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, HeartPulse, Recycle, UserCheck } from 'lucide-react';
import constructionImg from '../assets/images/construction_black_engineers_abuja.png';
import teamImg from '../assets/images/suaminel_corporate_team_black.png';

const Quality = () => {
  const qualityPoints = [
    { title: 'High Service Standards', desc: 'Committed to exceeding modern industry standards in every sector.' },
    { title: 'Efficient Processes', desc: 'A data-driven approach to streamline workflows and reduce overhead.' },
    { title: 'Continuous Improvement', desc: 'Constantly refining our services to better serve our growing clientele.' },
  ];

  const safetyCommitments = [
    { title: 'Safe Working Environments', icon: <CheckCircle />, desc: 'Ensuring every site meets or exceeds national safety regulations.' },
    { title: 'Prevention of Accidents', icon: <Shield />, desc: 'Proactive risk analysis and training to minimize onsite hazards.' },
    { title: 'Environmental Protection', icon: <Recycle />, desc: 'Sustainable practices that reduce our carbon footprint in Nigeria.' },
    { title: 'Employee Well-being', icon: <HeartPulse />, desc: 'Focusing on the health and vitality of our professional workforce.' },
  ];

  return (
    <div className="quality-page">
      <header className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${constructionImg})`, backgroundSize: 'cover' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary)', color: 'white', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <UserCheck size={40} />
          </div>
          <h1>Quality & Safety</h1>
          <p style={{ maxWidth: '800px', margin: 'auto' }}>
            Our commitment to excellence and high service standards in multi-sector operations.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Commitment to Quality</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                At Suaminel Limited, we adopt a customer-focused, data-driven approach to ensure 
                excellence in all our service delivery.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {qualityPoints.map((point) => (
                  <div key={point.title} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}><CheckCircle size={24} /></div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', color: 'var(--secondary)' }}>{point.title}</h4>
                      <p style={{ color: 'var(--text-muted)' }}>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={teamImg} alt="Quality Meeting" style={{ borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '700' }}>HSE Policy</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Health, Safety & Environment</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {safetyCommitments.map((c) => (
              <div key={c.title} style={{ background: 'white', padding: '4rem 2rem', textAlign: 'center', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '50%', marginBottom: '1.5rem' }}>{c.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--secondary)', color: 'white', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '800px', margin: 'auto' }}>
              "Every team member at Suaminel Limited is responsible for maintaining 
              the highest safety standards. We believe zero accidents is achievable."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
