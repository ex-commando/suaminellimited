import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2, Circle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="footer-logo">SUAMINEL <span style={{ color: 'var(--primary)', fontWeight: '700' }}>LIMITED</span></Link>
            <p style={{ lineHeight: '1.8', color: '#BBB' }}>
              Suaminel Limited is a multi-sector company based in Abuja, Nigeria, 
              delivering professional services across security, construction, real estate, and more. 
              Established in 2024, we are committed to providing dependable and proactive solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Globe size={20} className="footer-link" style={{ transition: 'all 0.3s ease' }} />
              <Share2 size={20} className="footer-link" style={{ transition: 'all 0.3s ease' }} />
              <Circle size={20} className="footer-link" style={{ transition: 'all 0.3s ease' }} />
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Security Services</Link></li>
              <li><Link to="/services" className="footer-link">Civil Engineering</Link></li>
              <li><Link to="/services" className="footer-link">Real Estate Development</Link></li>
              <li><Link to="/services" className="footer-link">ICT Consultancy</Link></li>
              <li><Link to="/services" className="footer-link">Agricultural Services</Link></li>
              <li><Link to="/services" className="footer-link">Borehole Drilling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/projects" className="footer-link">Projects / Operations</Link></li>
              <li><Link to="/quality" className="footer-link">Quality & Safety</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/about" className="footer-link">Who We Are</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-links" style={{ color: '#BBB' }}>
              <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <MapPin size={22} color="var(--primary)" />
                <span>Gimbiya Street, Area 10, Abuja, Nigeria</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <Phone size={20} color="var(--primary)" />
                <span>0814 884 1130, 0805 573 7109</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <Mail size={20} color="var(--primary)" />
                <span style={{ fontSize: '0.9rem' }}>suaminel_limited@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Suaminel Limited. All Rights Reserved. Built with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
