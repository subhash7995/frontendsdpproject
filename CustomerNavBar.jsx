import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './customer.css';
import CustomerHome from './CustomerHome';
import CustomerProfile from './CustomerProfile';
import CustomerLogin from './CustomerLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from './UpdateProfile';
import BookedServices from './BookedServices';
import ViewAllServices from './ViewAllServices';
import BookService from './BookService';

export default function CustomerNavBar() 
{
  const { setIsCustomerLoggedIn } = useAuth(); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => 
 {
    setIsCustomerLoggedIn(false);
  };

  return (
    <div className="page-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="logo-icon">👤</span>
          <span className="logo-text">Customer Portal</span>
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
            <Link to="/customerhome" className={location.pathname === '/customerhome' ? 'active' : ''}>
              <span className="nav-icon">🏠</span> Home
            </Link>
          </li>
          
          <li>
            <Link to="/customerprofile" className={location.pathname === '/customerprofile' ? 'active' : ''}>
              <span className="nav-icon">👤</span> My Profile
            </Link>
          </li>
          
          <li>
            <Link to="/updateprofile" className={location.pathname === '/updateprofile' ? 'active' : ''}>
              <span className="nav-icon">✏️</span> Update Profile
            </Link>
          </li>
          
          <li>
            <Link to="/viewallservices" className={location.pathname === '/viewallservices' ? 'active' : ''}>
              <span className="nav-icon">🛒</span> Book Services
            </Link>
          </li>
          
          <li>
            <Link to="/bookedservices" className={location.pathname === '/bookedservices' ? 'active' : ''}>
              <span className="nav-icon">📋</span> My Bookings
            </Link>
          </li>
          
          <li>
            <Link to="/customerlogin" onClick={handleLogout} className="nav-cta">
              <span className="nav-icon">🚪</span> Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="container">
          <Routes>
            <Route path="/customerhome" element={<CustomerHome />} exact />
            <Route path="/customerprofile" element={<CustomerProfile />} exact />
            <Route path="/updateprofile" element={<UpdateProfile/>} exact />
            <Route path="/viewallservices" element={<ViewAllServices/>} exact />
            <Route path="/bookservice" element={<BookService/>} />
            <Route path="/bookedservices" element={<BookedServices/>} exact />
            <Route path="/customerlogin" element={<CustomerLogin />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}