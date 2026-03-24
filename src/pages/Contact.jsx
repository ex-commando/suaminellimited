import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <MessageSquare className="watermark-icon watermark-icon-light" style={{ right: '5%', top: '20%' }} />
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            style={{ maxWidth: '650px', margin: 'auto', fontSize: '1.2rem', opacity: '0.8' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We are available to support your projects and business needs in Abuja and across Nigeria. 
            Connect with our professional team today.
          </motion.p>
        </div>
      </header>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', color: 'var(--secondary)' }}>Our Abuja Headquarters</h2>
            <p style={{ opacity: '0.7', fontSize: '1.1rem' }}>Visit us for a professional consultation on your next project.</p>
          </motion.div>
          <motion.div 
            style={{ width: '100%', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--divider)' }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11394.88725838031!2d7.477028882098048!3d9.051934274945115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0439f00001%3A0xe67d6c5432a67e43!2sArea%2010%2C%20Garki%2C%20Abuja!5e0!3m2!1sen!2sng!4v1711261543884!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Suaminel Abuja Office"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '6rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--secondary)' }}>Contact Channels</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.1rem' }}>
                Whether you have a query about our multi-sector operations or need 
                a customized project quote, we're here to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ padding: '1.5rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '16px' }}><MapPin size={32} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Location</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>Gimbiya Street, Area 10, Abuja, Nigeria</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ padding: '1.5rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '16px' }}><Mail size={32} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>suaminel_limited@gmail.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ padding: '1.5rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '16px' }}><Phone size={32} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Phone</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>0803 562 2094, 0802 257 4472</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-light)', borderRadius: '24px', borderLeft: '6px solid var(--primary)' }}>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Operational Hours</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Monday – Friday: 9:00 AM – 5:00 PM</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Weekends: Appointment only</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-wrapper" 
              style={{ background: 'white', padding: '5rem', borderRadius: '32px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--divider)', position: 'relative' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Send Us a Message</h3>
              <form 
                action="https://formspree.io/f/suaminel_limited@gmail.com" 
                method="POST"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
              >
                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>Full Name</label>
                  <input type="text" name="name" className="form-input" placeholder="Enter your name" style={inputStyle} required />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>Email Address</label>
                  <input type="email" name="email" className="form-input" placeholder="Enter your email" style={inputStyle} required />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>Phone Number</label>
                  <input type="tel" name="phone" className="form-input" placeholder="Enter your phone" style={inputStyle} required />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>Service Required</label>
                  <select name="service" className="form-select" style={inputStyle} required>
                    <option value="">Select a service</option>
                    <option value="Security Services">Security Services</option>
                    <option value="Civil & Construction">Civil & Construction</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="ICT Consultancy">ICT Consultancy</option>
                    <option value="Agricultural Services">Agricultural Services</option>
                    <option value="Borehole Drilling">Borehole Drilling</option>
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: '1/3' }}>
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.9rem' }}>Your Message</label>
                  <textarea name="message" className="form-textarea" placeholder="Describe your project needs..." style={{ ...inputStyle, height: '180px', resize: 'none' }} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ gridColumn: '1/3', fontSize: '1.1rem', padding: '1.25rem', width: '100%', borderRadius: '16px' }}>
                  Send Message <Send size={20} style={{ marginLeft: '0.75rem' }} />
                </button>
                <input type="hidden" name="_account" value="suaminel_limited@gmail.com" />
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1.2rem',
  background: '#F5F5F5',
  border: '1px solid #E1E1E1',
  borderRadius: '12px',
  fontSize: '1rem',
  fontFamily: 'inherit',
  transition: 'all 0.3s ease'
};

export default Contact;
