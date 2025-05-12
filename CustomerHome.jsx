import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChatBotTrigger from '../components/ChatBotTrigger';

export default function CustomerHome() 
{
  const [customer, setCustomer] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
    setLoading(false);
  }, []);
     
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }
  
  return (
    <div className="customer-dashboard">
      <div className="welcome-banner">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome back, {customer.name}!</h1>
          <p className="welcome-subtitle">Discover and book the services you need, all in one place.</p>
          <div className="help-section">
            <ChatBotTrigger text="Need assistance?" icon="🤖" />
          </div>
        </div>
      </div>
      
      <div className="dashboard-sections">
        <div className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-cards">
            <Link to="/viewallservices" className="action-card">
              <div className="action-icon">🛒</div>
              <h3 className="action-title">Book Services</h3>
              <p className="action-description">Browse and book from our wide range of home services</p>
            </Link>
            
            <Link to="/bookedservices" className="action-card">
              <div className="action-icon">📋</div>
              <h3 className="action-title">My Bookings</h3>
              <p className="action-description">View and manage your booked services</p>
            </Link>
            
            <Link to="/customerprofile" className="action-card">
              <div className="action-icon">👤</div>
              <h3 className="action-title">My Profile</h3>
              <p className="action-description">View and update your personal information</p>
            </Link>
          </div>
        </div>
        
        <div className="featured-section">
          <h2 className="section-title">Popular Services</h2>
          <div className="featured-services">
            <div className="service-card">
              <div className="service-icon">🧹</div>
              <h3 className="service-title">Home Cleaning</h3>
              <p className="service-description">Professional cleaning for your home</p>
              <Link to="/viewallservices" className="service-link">Book Now</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">Plumbing</h3>
              <p className="service-description">Fix leaks and plumbing issues</p>
              <Link to="/viewallservices" className="service-link">Book Now</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3 className="service-title">Electrical</h3>
              <p className="service-description">Electrical repairs and installations</p>
              <Link to="/viewallservices" className="service-link">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}