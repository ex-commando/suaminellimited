import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="footer-logo" style={{ fontSize: '1.8rem', color: 'white', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '2rem' }}>
              SUAMINEL <span style={{ color: 'var(--primary)' }}>LIMITED</span>
            </Link>
            <p style={{ lineHeight: '1.8', color: 'rgba(255,255,255,0.6)', maxWidth: '350px', marginBottom: '2.5rem' }}>
              A leading multi-sector company based in Abuja, Nigeria, dedicated to delivering 
              professional excellence in Security, Engineering, and ICT Consultancy since 2024.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
              <a href="#" className="footer-link"><Facebook size={22} /></a>
              <a href="#" className="footer-link"><Twitter size={22} /></a>
              <a href="#" className="footer-link"><Linkedin size={22} /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Our Expertise</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Security Services</Link></li>
              <li><Link to="/services" className="footer-link">Civil Engineering</Link></li>
              <li><Link to="/services" className="footer-link">ICT Consultancy</Link></li>
              <li><Link to="/services" className="footer-link">Solar Energy</Link></li>
              <li><Link to="/services" className="footer-link">Borehole Drilling</Link></li>
              <li><Link to="/services" className="footer-link">General Contracts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/projects" className="footer-link">Recent Projects</Link></li>
              <li><Link to="/quality" className="footer-link">Quality & Safety</Link></li>
              <li><Link to="/corporate-info" className="footer-link">Corporate Info</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div style={{ paddingLeft: '2rem', borderLeft: '1px solid rgba(255,255,255,0.05)' }} className="footer-contact-block">
            <h4 className="footer-heading">Abuja Office</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <MapPin size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Gimbiya Street, Area 10, Garki, Abuja, Nigeria</span>
              </li>
              <li style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <Phone size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>+234 814 884 1130<br/>+234 805 573 7109</span>
              </li>
              <li style={{ display: 'flex', gap: '1.25rem' }}>
                <Mail size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>suaminel_limited@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Suaminel Limited. All Rights Reserved. Abuja, Nigeria.</p>
        </div>
      </div>
      <style jsx="true">{`
        @media (max-width: 768px) {
          .footer-contact-block {
            padding-left: 0 !important;
            border-left: none !important;
            margin-top: 2rem;
          }
          .footer-link {
            justify-content: center;
            display: flex;
          }
          .footer-links li {
            justify-content: center;
            display: flex;
          }
          .footer-about {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
