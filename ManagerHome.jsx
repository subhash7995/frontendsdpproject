import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ManagerHome() 
{
  const [manager, setManager] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
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
    <div className="manager-dashboard">
      <div className="welcome-banner">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome back, {manager.name}!</h1>
          <p className="welcome-subtitle">Manage your services and bookings from your dashboard.</p>
        </div>
      </div>
      
      <div className="dashboard-sections">
        <div className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="action-cards">
            <Link to="/addservice" className="action-card">
              <div className="action-icon">➕</div>
              <h3 className="action-title">Add Service</h3>
              <p className="action-description">Create a new service offering for customers</p>
            </Link>
            
            <Link to="/viewservicesbymanager" className="action-card">
              <div className="action-icon">🔍</div>
              <h3 className="action-title">My Services</h3>
              <p className="action-description">View and manage your offered services</p>
            </Link>
            
            <Link to="/viewbookings" className="action-card">
              <div className="action-icon">📋</div>
              <h3 className="action-title">Bookings</h3>
              <p className="action-description">View and manage customer bookings</p>
            </Link>
          </div>
        </div>
        
        <div className="performance-section">
          <h2 className="section-title">Manager Tools</h2>
          <div className="tools-container">
            <div className="tool-card">
              <div className="tool-icon">📊</div>
              <h3 className="tool-title">Service Management</h3>
              <p className="tool-description">Add, edit, and manage your service offerings</p>
              <Link to="/viewservicesbymanager" className="tool-link">View Services</Link>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">📅</div>
              <h3 className="tool-title">Booking Management</h3>
              <p className="tool-description">Manage customer bookings and appointments</p>
              <Link to="/viewbookings" className="tool-link">View Bookings</Link>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">👤</div>
              <h3 className="tool-title">Profile Settings</h3>
              <p className="tool-description">Update your profile information</p>
              <Link to="/managerprofile" className="tool-link">Go to Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}