import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Globe } from 'lucide-react';
import teamImg from '../assets/images/suaminel_corporate_team_black.png';
import officeImg from '../assets/images/ict_consultancy_black_specialists.png';

const About = () => {
  const values = [
    { title: 'Integrity', desc: 'Ethical and professional conduct in every interaction.' },
    { title: 'Excellence', desc: 'Delivering top-quality services that exceed expectations.' },
    { title: 'Innovation', desc: 'Adapting to new challenges with modern technology.' },
    { title: 'Community', desc: 'Building strong relationships and contributing to growth.' },
    { title: 'Sustainability', desc: 'Promoting responsible practices for long-term success.' },
  ];

  return (
    <div className="about-page">
      <header className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${teamImg})`, backgroundSize: 'cover', backgroundHeight: '400px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Who We Are</h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9', maxWidth: '800px', margin: '1rem auto' }}>
            Suaminel Limited is an indigenous company incorporated under the Companies and Allied Matters Act (2020).
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Our Philosophy</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                We specialize in delivering high-quality services across multiple sectors with a focus on excellence, 
                innovation, and reliability. We are positioned to handle projects of varying complexity, 
                combining modern technology with skilled manpower to achieve optimal results.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '0.4rem', borderRadius: '4px' }}>✓</div>
                  <span>Maintaining strong client relationships</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '0.4rem', borderRadius: '4px' }}>✓</div>
                  <span>Upholding integrity and transparency</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '0.4rem', borderRadius: '4px' }}>✓</div>
                  <span>Meeting project timelines efficiently</span>
                </li>
              </ul>
            </div>
            <div>
              <img src={officeImg} alt="Office View" style={{ borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '3rem', textAlign: 'center', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary)', borderRadius: '50%', color: 'white', marginBottom: '1.5rem' }}><Target size={32} /></div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)' }}>To serve communities, organizations, and partners with professionalism by providing tailored solutions.</p>
            </div>
            <div style={{ background: 'white', padding: '3rem', textAlign: 'center', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary)', borderRadius: '50%', color: 'white', marginBottom: '1.5rem' }}><Eye size={32} /></div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)' }}>To be recognized as a trusted leader in security services and general contracting, delivering excellence.</p>
            </div>
            <div style={{ background: 'white', padding: '3rem', textAlign: 'center', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary)', borderRadius: '50%', color: 'white', marginBottom: '1.5rem' }}><Globe size={32} /></div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>Global Reach</h3>
              <p style={{ color: 'var(--text-muted)' }}>Combining international standards with indigenous expertise to serve Nigeria and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our Core Values</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '1rem auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {values.map((v) => (
              <div key={v.title} style={{ textAlign: 'center', padding: '2rem', border: '1px solid var(--divider)', borderRadius: '8px', transition: 'var(--transition)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
