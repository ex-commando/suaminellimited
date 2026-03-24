import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="page-header" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/src/assets/images/suaminel_corporate_team_meeting_1774331847236.png)', backgroundSize: 'cover' }}>
        <div className="container">
          <h1>Get in Touch</h1>
          <p style={{ maxWidth: '650px', margin: 'auto' }}>
            We are available to support your projects and business needs in Abuja and across Nigeria. 
            Connect with our professional team today.
          </p>
        </div>
      </header>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Find Us In Abuja</h2>
            <p style={{ opacity: '0.7' }}>Visit our headquarters for a professional consultation.</p>
          </div>
          <div style={{ width: '100%', height: '450px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
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
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--secondary)' }}>Contact Channels</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                Whether you have a query about our multi-sector operations or need 
                a customized project quote, we're here to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '12px' }}><MapPin size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Office Location</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>Gimbiya Street, Area 10, Abuja, Nigeria</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '12px' }}><Mail size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Address</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>suaminel_limited@gmail.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ padding: '1.25rem', background: 'var(--primary-bg)', color: 'var(--primary)', borderRadius: '12px' }}><Phone size={28} /></div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone Numbers</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: '600' }}>0803 562 2094, 0802 257 4472</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--bg-light)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Business Hours</h4>
                <p style={{ color: 'var(--text-muted)' }}>Monday – Friday: 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="contact-form-wrapper" style={{ background: 'white', padding: '4rem', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--divider)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '2.5rem' }}>Send Us a Message</h3>
              <form 
                action="https://formspree.io/f/suaminel_limited@gmail.com" 
                method="POST"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
              >
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" className="form-input" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" className="form-input" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" className="form-input" placeholder="Enter your phone" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Required</label>
                  <select name="service" className="form-select" required>
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
                  <label className="form-label">Message</label>
                  <textarea name="message" className="form-textarea" placeholder="Describe your project needs..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ gridColumn: '1/3', fontSize: '1rem', padding: '1rem' }}>
                  Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
                <input type="hidden" name="_subject" value="New Contact Inquiry from Suaminel Limited Website" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: '400px', backgroundColor: '#EEE', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Map view of Abuja, Nigeria goes here...</p>
      </section>
    </div>
  );
};

export default Contact;
