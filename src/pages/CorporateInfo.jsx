import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Mail, Phone, Building } from 'lucide-react';

const CorporateInfo = () => {
  return (
    <div className="corporate-page">
      <header className="page-header" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <h1>Corporate Information</h1>
          <p style={{ maxWidth: '600px', margin: 'auto', opacity: '0.8' }}>
            Official business details and contact channels for Suaminel Limited.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Company Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--primary)' }}><Building size={32} /></div>
                  <div>
                    <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Name & Status</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>Suaminel Limited</p>
                    <p style={{ color: 'var(--text-muted)' }}>Incorporated under CAMA (2020)</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--primary)' }}><Clock size={32} /></div>
                  <div>
                    <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Business Hours</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>Monday – Friday</p>
                    <p style={{ color: 'var(--text-muted)' }}>9:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--primary)' }}><MapPin size={32} /></div>
                  <div>
                    <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>Location</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>Abuja, Nigeria</p>
                    <p style={{ color: 'var(--text-muted)' }}>Gimbiya Street, Area 10, Abuja</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--primary)', padding: '5rem 3rem', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>2024</h3>
                <p style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: '0.9' }}>Year Of Incorporation</p>
                <div style={{ height: '2px', background: 'rgba(255,255,255,0.3)', margin: '3rem 0' }}></div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Get in Touch</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                  <Phone size={24} />
                  <Mail size={24} />
                  <MapPin size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Authorized Communication</h2>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', maxWidth: '800px', margin: 'auto' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Email: <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>suaminel_limited@gmail.com</span></p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Phone: <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>0814 884 1130, 0805 573 7109</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateInfo;
