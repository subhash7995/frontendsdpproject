import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './manager.css';
import ManagerHome from './ManagerHome';
import ManagerProfile from './ManagerProfile';
import ManagerLogin from './ManagerLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddService from './AddService';
import ViewBookings from './ViewBookings';
import ViewServicesByManager from './ViewServicesByManager';

export default function ManagerNavBar() 
{
  const { setIsManagerLoggedIn } = useAuth(); 
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
  setIsManagerLoggedIn(false);
  };

  return (
    <div className="page-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="logo-icon">👔</span>
          <span className="logo-text">Manager Portal</span>
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
            <Link to="/managerhome" className={location.pathname === '/managerhome' ? 'active' : ''}>
              <span className="nav-icon">🏠</span> Home
            </Link>
          </li>
          
          <li>
            <Link to="/managerprofile" className={location.pathname === '/managerprofile' ? 'active' : ''}>
              <span className="nav-icon">👤</span> My Profile
            </Link>
          </li>
          
          <li>
            <Link to="/addservice" className={location.pathname === '/addservice' ? 'active' : ''}>
              <span className="nav-icon">➕</span> Add Service
            </Link>
          </li>
          
          <li>
            <Link to="/viewservicesbymanager" className={location.pathname === '/viewservicesbymanager' ? 'active' : ''}>
              <span className="nav-icon">🔍</span> My Services
            </Link>
          </li>
          
          <li>
            <Link to="/viewbookings" className={location.pathname === '/viewbookings' ? 'active' : ''}>
              <span className="nav-icon">📋</span> View Bookings
            </Link>
          </li>
          
          <li>
            <Link to="/managerlogin" onClick={handleLogout} className="nav-cta">
              <span className="nav-icon">🚪</span> Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="container">
          <Routes>
            <Route path="/managerhome" element={<ManagerHome />} exact />
            <Route path="/managerprofile" element={<ManagerProfile/>} exact />
            <Route path="/addservice" element={<AddService/>} exact />
            <Route path="/viewservicesbymanager" element={<ViewServicesByManager/>} exact />
            <Route path="/viewbookings" element={<ViewBookings/>} exact />
            <Route path="/managerlogin" element={<ManagerLogin/>} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}