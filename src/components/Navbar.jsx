import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import logo from '../assets/images/media__1774331561254.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Quality & Safety', path: '/quality' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simulate search or navigate to a search results page
      console.log('Searching for:', searchQuery);
      setIsSearchVisible(false);
      setSearchQuery('');
      navigate('/services'); // Fallback to services for now as a demo
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container-fluid">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Suaminel Logo" className="logo-img" />
          <span className="logo-text">SUAMINEL <span style={{ color: 'var(--primary)' }}>LIMITED</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-right desktop-only">
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            {isSearchVisible ? (
              <form onSubmit={handleSearch} className="search-form">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Search services..." 
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => setTimeout(() => setIsSearchVisible(false), 200)}
                />
              </form>
            ) : (
              <button className="search-btn" onClick={() => setIsSearchVisible(true)}>
                <Search size={20} />
              </button>
            )}
            <Link to="/contact" className="btn btn-primary nav-btn">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-search-container">
            <form onSubmit={handleSearch} style={{ width: '100%' }}>
              <input 
                type="text" 
                placeholder="Search..." 
                className="mobile-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ padding: '1rem 3rem' }}>
            Get Started
          </Link>
        </div>
      )}

      <style jsx="true">{`
        .nav-container-fluid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 4rem;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-left: 2rem;
        }
        .search-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.8;
          transition: 0.3s;
        }
        .search-btn:hover { opacity: 1; color: var(--primary); }
        .search-form {
          position: relative;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 0.4rem 1rem;
          display: flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.2);
          animation: widthGrow 0.3s ease-out;
        }
        .search-input {
          background: none;
          border: none;
          color: white;
          font-family: inherit;
          width: 180px;
          outline: none;
        }
        .search-input::placeholder { color: rgba(255,255,255,0.4); }
        .nav-btn {
          padding: 0.7rem 1.8rem !important;
          border-radius: 30px !important;
          font-size: 0.9rem !important;
        }
        .mobile-toggle {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: none;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          z-index: 999;
          animation: slideIn 0.3s ease-out;
          padding: 2rem;
        }
        .mobile-search-container {
          width: 80%;
          max-width: 400px;
          margin-bottom: 2rem;
        }
        .mobile-search-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          outline: none;
        }
        .desktop-only { display: flex; }
        @keyframes widthGrow { from { width: 50px; opacity: 0; } to { width: 100%; opacity: 1; } }
        @media (max-width: 1100px) {
          .nav-container-fluid { padding: 0 2rem; }
          .nav-right { gap: 1.5rem; }
        }
        @media (max-width: 950px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
