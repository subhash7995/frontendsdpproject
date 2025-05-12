import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CustomerLogin from './../customer/CustomerLogin';
import CustomerRegistration from './../customer/CustomerRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import ManagerLogin from '../manager/ManagerLogin';
import NotFound from './NotFound';

export default function MainNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
    // Close dropdown when route changes
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <div className="page-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="logo-icon">🏠</span> 
          <span className="logo-text">Home Services Booking</span>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {mobileMenuOpen && (
            <button className="close-menu" onClick={toggleMobileMenu}>
              ✕
            </button>
          )}
          
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <span className="nav-icon">🏠</span> Home
            </Link>
          </li>
          
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              <span className="nav-icon">ℹ️</span> About
            </Link>
          </li>
          
          <li className={`dropdown ${activeDropdown === 'register' ? 'active' : ''}`}>
            <span onClick={() => toggleDropdown('register')}>
              <span className="nav-icon">✏️</span> Register
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/customerregistration" 
                  className={location.pathname === '/customerregistration' ? 'active' : ''}
                >
                  <span className="dropdown-icon">👤</span> Customer
                </Link>
              </li>
            </ul>
          </li>
          
          <li className={`dropdown ${activeDropdown === 'login' ? 'active' : ''}`}>
            <span onClick={() => toggleDropdown('login')}>
              <span className="nav-icon">🔒</span> Login
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link 
                  to="/customerlogin" 
                  className={location.pathname === '/customerlogin' ? 'active' : ''}
                >
                  <span className="dropdown-icon">👤</span> Customer
                </Link>
              </li>
              <li>
                <Link 
                  to="/managerlogin" 
                  className={location.pathname === '/managerlogin' ? 'active' : ''}
                >
                  <span className="dropdown-icon">👔</span> Manager
                </Link>
              </li>
              <li>
                <Link 
                  to="/adminlogin" 
                  className={location.pathname === '/adminlogin' ? 'active' : ''}
                >
                  <span className="dropdown-icon">⚙️</span> Admin
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              <span className="nav-icon">📞</span> Contact
            </Link>
          </li>
          
          <li>
            <Link to="/customerregistration" className="nav-cta">Get Started</Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/customerregistration" element={<CustomerRegistration />} exact />
            <Route path="/customerlogin" element={<CustomerLogin />} exact />
            <Route path="/managerlogin" element={<ManagerLogin />} exact />
            <Route path="/adminlogin" element={<AdminLogin />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="*" element={<NotFound />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}
