import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [customerCount, setCustomerCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      setIsLoading(true);
      try {
        const customerRes = await axios.get(`${config.url}/admin/customercount`);
        const managerRes = await axios.get(`${config.url}/admin/managercount`);
        const serviceRes = await axios.get(`${config.url}/admin/servicecount`);

        setCustomerCount(customerRes.data);
        setManagerCount(managerRes.data);
        setServiceCount(serviceRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Welcome to the Home Services Management System</p>
      </div>
      
      {isLoading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading dashboard data...</p>
        </div>
      ) : (
        <>
          <div className="stats-container">
            <div className="stat-card customer-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3 className="stat-title">Total Customers</h3>
                <p className="stat-value">{customerCount}</p>
                <p className="stat-description">Registered users on the platform</p>
              </div>
            </div>
            
            <div className="stat-card manager-card">
              <div className="stat-icon">👔</div>
              <div className="stat-content">
                <h3 className="stat-title">Service Managers</h3>
                <p className="stat-value">{managerCount}</p>
                <p className="stat-description">Professional service providers</p>
              </div>
            </div>
            
            <div className="stat-card service-card">
              <div className="stat-icon">🛠️</div>
              <div className="stat-content">
                <h3 className="stat-title">Available Services</h3>
                <p className="stat-value">{serviceCount}</p>
                <p className="stat-description">Services offered to customers</p>
              </div>
            </div>
          </div>
          
          <div className="admin-actions">
            <h2 className="section-title">Quick Actions</h2>
            <div className="action-buttons">
              <a href="/addmanager" className="action-button">
                <span className="action-icon">➕</span>
                <span className="action-label">Add Manager</span>
              </a>
              <a href="/viewmanagers" className="action-button">
                <span className="action-icon">👔</span>
                <span className="action-label">View Managers</span>
              </a>
              <a href="/viewallcustomers" className="action-button">
                <span className="action-icon">👥</span>
                <span className="action-label">View Customers</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}