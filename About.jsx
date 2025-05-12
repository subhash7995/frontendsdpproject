import React from 'react';

export default function About() {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container container-sm animate-fade-in">
          <h1 className="section-title text-center">About Our Home Services Platform</h1>
          <p className="mb-5">
            Welcome to the Home Services Booking App! Our platform connects you with trusted professionals for all your home service needs. Whether you're a customer looking for service, a service provider seeking work, or an administrator managing the platform, we've built a seamless experience for everyone.
          </p>
          
          <div className="card mb-5">
            <div className="card-body">
              <h2 className="mb-3">Our Mission</h2>
              <p>
                We're on a mission to simplify home services by connecting skilled professionals with homeowners who need their expertise. Our platform ensures quality, reliability, and convenience for all parties involved.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-light">
        <div className="container animate-fade-in">
          <h2 className="section-title text-center">How Our Platform Works</h2>
          <p className="text-center mb-5">
            Our intuitive platform provides a seamless experience from service booking to completion.
          </p>
          
          <div className="grid grid-3">
            <div className="card text-center p-4 animate-fade-in delay-100">
              <div className="text-center mb-3">📱</div>
              <h3 className="mb-2">Easy Booking</h3>
              <p>Browse available services and book appointments with just a few clicks. Our platform is designed for convenience.</p>
            </div>
            
            <div className="card text-center p-4 animate-fade-in delay-200">
              <div className="text-center mb-3">👨‍🔧</div>
              <h3 className="mb-2">Verified Professionals</h3>
              <p>All our service providers undergo thorough verification to ensure you get only qualified professionals.</p>
            </div>
            
            <div className="card text-center p-4 animate-fade-in delay-300">
              <div className="text-center mb-3">⭐</div>
              <h3 className="mb-2">Quality Assurance</h3>
              <p>Rate and review your experience to help us maintain high service standards across the platform.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container animate-fade-in">
          <h2 className="section-title text-center">Platform Roles</h2>
          <p className="text-center mb-5">
            Our platform serves different roles with specialized features for each.
          </p>
          
          <div className="grid grid-3">
            <div className="card animate-fade-in delay-100">
              <div className="card-header">
                <h3>Customers</h3>
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Browse available services</li>
                  <li>Book appointments online</li>
                  <li>Track service progress</li>
                  <li>Review and rate services</li>
                  <li>Manage personal profile</li>
                </ul>
              </div>
            </div>
            
            <div className="card animate-fade-in delay-200">
              <div className="card-header">
                <h3>Managers</h3>
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Manage service providers</li>
                  <li>Oversee service delivery</li>
                  <li>Handle quality control</li>
                  <li>Manage team schedules</li>
                  <li>Review customer feedback</li>
                </ul>
              </div>
            </div>
            
            <div className="card animate-fade-in delay-300">
              <div className="card-header">
                <h3>Administrators</h3>
              </div>
              <div className="card-body">
                <ul className="mb-0">
                  <li>Platform-wide oversight</li>
                  <li>User management</li>
                  <li>Service catalog management</li>
                  <li>System configuration</li>
                  <li>Analytics and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section text-center">
        <div className="container container-sm">
          <h2 className="section-title">Join Our Platform Today</h2>
          <p className="mb-4">Experience the future of home services with our innovative platform.</p>
          <div className="flex justify-center gap-md">
            <a href="/customerregistration" className="btn">Register as Customer</a>
            <a href="/contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
