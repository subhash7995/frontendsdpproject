import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddManager from './AddManager';
import ViewManagers from './ViewManagers';
import ViewCustomers from './ViewCustomers';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth();
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
    setIsAdminLoggedIn(false); 
  };

  return (
    <div className="page-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="logo-icon">⚙️</span>
          <span className="logo-text">Admin Dashboard</span>
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
            <Link to="/adminhome" className={location.pathname === '/adminhome' ? 'active' : ''}>
              <span className="nav-icon">🏠</span> Home
            </Link>
          </li>
          
          <li>
            <Link to="/addmanager" className={location.pathname === '/addmanager' ? 'active' : ''}>
              <span className="nav-icon">➕</span> Add Managers
            </Link>
          </li>
          
          <li>
            <Link to="/viewmanagers" className={location.pathname === '/viewmanagers' ? 'active' : ''}>
              <span className="nav-icon">👔</span> View Managers
            </Link>
          </li>
          
          <li>
            <Link to="/viewallcustomers" className={location.pathname === '/viewallcustomers' ? 'active' : ''}>
              <span className="nav-icon">👥</span> View Customers
            </Link>
          </li>
          
          <li>
            <Link to="/adminlogin" onClick={handleLogout} className="nav-cta">
              <span className="nav-icon">🚪</span> Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="container">
          <Routes>
            <Route path="/adminhome" element={<AdminHome />} exact />
            <Route path="/addmanager" element={<AddManager />} exact />
            <Route path="/viewmanagers" element={<ViewManagers />} exact />
            <Route path="/viewallcustomers" element={<ViewCustomers />} exact />
            <Route path="/adminlogin" element={<AdminLogin />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}