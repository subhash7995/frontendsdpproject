//import React from 'react';
import ChatBotTrigger from '../components/ChatBotTrigger';

export default function Home() {
  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">Home Services at Your Fingertips</h1>
            <p className="hero-subtitle">Book trusted professionals for all your home service needs with just a few clicks. Our top-rated experts are ready to help with any task.</p>
            <div className="hero-buttons">
              <a href="/customerregistration" className="btn btn-lg">Get Started</a>
              <a href="/about" className="btn btn-outline btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="text-center mb-4">We offer a wide range of premium home services to meet all your needs</p>
          
          <div className="services-container">
            <div className="service-card primary animate-fade-in delay-100">
              <div className="service-icon">🧹</div>
              <h3 className="service-title">Cleaning Services</h3>
              <p className="service-description">Professional cleaning for homes and offices with meticulous attention to detail. Our cleaning experts use premium products for best results.</p>
            </div>
            
            <div className="service-card secondary animate-fade-in delay-200">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">Repair & Maintenance</h3>
              <p className="service-description">Skilled technicians for all your repair and maintenance needs. From electrical work to plumbing, we've got you covered.</p>
            </div>
            
            <div className="service-card tertiary animate-fade-in delay-300">
              <div className="service-icon">🏡</div>
              <h3 className="service-title">Home Improvement</h3>
              <p className="service-description">Transform your living space with our professional renovation services. Create the home of your dreams with our expert designers.</p>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <ChatBotTrigger text="Have questions about our services?" icon="🤔" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="text-center mb-4">Getting started is simple with our easy-to-use platform</p>
          
          <div className="step-container">
            <div className="step-card animate-fade-in delay-100">
              <div className="step-number">1</div>
              <h3 className="step-title">Book</h3>
              <p className="step-description">Choose the service you need and select a convenient time slot that works for your schedule.</p>
            </div>
            
            <div className="step-card animate-fade-in delay-200">
              <div className="step-number">2</div>
              <h3 className="step-title">Match</h3>
              <p className="step-description">We'll match you with the best professional in your area based on your specific needs.</p>
            </div>
            
            <div className="step-card animate-fade-in delay-300">
              <div className="step-number">3</div>
              <h3 className="step-title">Service</h3>
              <p className="step-description">Your professional arrives on time and completes the service to your satisfaction.</p>
            </div>
            
            <div className="step-card animate-fade-in delay-400">
              <div className="step-number">4</div>
              <h3 className="step-title">Review</h3>
              <p className="step-description">Rate your experience and provide feedback to help us maintain high quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container container-sm">
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-description">Join thousands of satisfied customers who trust us with their home service needs.</p>
          <a href="/customerregistration" className="cta-button">Register Now</a>
        </div>
      </section>
    </>
  );
}
