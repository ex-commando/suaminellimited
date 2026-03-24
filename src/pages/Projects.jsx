import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Search, Map, ShieldAlert, Users, MessageSquare } from 'lucide-react';
import abujaSkyline from '../assets/images/abuja_skyline_corporate_hero_bg_1774331829149.png';

const Projects = () => {
  const approach = [
    { title: 'Community Engagement', icon: <Users />, desc: 'Building strong local relationships and ensuring project acceptance.' },
    { title: 'Risk Assessment', icon: <ShieldAlert />, desc: 'Identifying vulnerabilities and planning for contingencies before startup.' },
    { title: 'Execution Planning', icon: <Map />, desc: 'Structured workflows and resource optimization for timely delivery.' },
    { title: 'Conflict Resolution', icon: <MessageSquare />, desc: 'Effective mechanisms to handle stakeholder concerns proactively.' },
  ];

  const projectsList = [
    { title: 'Elite Residential Security', subtitle: 'Abuja Area 10', category: 'Security' },
    { title: 'Borehole Installation', subtitle: 'Rural Community Site', category: 'Water Solutions' },
    { title: 'ICT Infrastructure Audit', subtitle: 'Corporate Office Level', category: 'ICT Consultancy' },
    { title: 'Agricultural Irrigation Site', subtitle: 'Lush Farmlands', category: 'Agriculture' },
  ];

  return (
    <div className="projects-page">
      <header className="page-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url(${abujaSkyline})`, backgroundSize: 'cover' }}>
        <div className="container">
          <h1>Projects & Operations</h1>
          <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Delivering high-quality services with a focus on excellence, innovation, and reliability.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '700' }}>Our Structured Approach</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>How We Deliver Excellence</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {approach.map((item) => (
              <div key={item.title} style={{ padding: '3rem 2rem', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--divider)', transition: 'var(--transition)' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--secondary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Portfolio Showcase</h2>
            <p style={{ opacity: '0.8' }}>A preview of our impactful operations across various sectors.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projectsList.map((p) => (
              <div key={p.title} style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', height: '350px', background: '#333' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: '0.4', background: 'linear-gradient(rgba(0,0,0,0), var(--secondary))' }}></div>
                <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: '2' }}>
                  <span style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'bold' }}>{p.category}</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'white' }}>{p.title}</h3>
                  <p style={{ opacity: '0.8' }}>{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ padding: '4rem', background: 'var(--primary-bg)', borderRadius: '12px', border: '2px dashed var(--primary)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Local Participation & Sustainability</h3>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
              We prioritize local engagement and stakeholder collaboration to ensure lasting impact 
              and community growth in every project area across Nigeria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
