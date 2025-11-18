import React from 'react';
import './LandingPage.css'
import { Link } from "react-router-dom";
import App from './App';

const LandingPage = () => {
  return (
    <div className="landing-page">

      <section className="hero">
        <div className="hero-content">
          <h1>Streamline Your Ticket Management</h1>
          <p>Efficiently handle support tickets, track issues, and improve customer satisfaction with our intuitive web app.</p>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Ticket Tracking</h3>
            <p>Monitor tickets from creation to resolution with real-time updates.</p>
          </div>
          <div className="feature-item">
            <h3>Team Collaboration</h3>
            <p>Assign tickets, add comments, and collaborate seamlessly with your team.</p>
          </div>
          <div className="feature-item">
            <h3>Analytics & Reports</h3>
            <p>Gain insights with customizable reports and performance metrics.</p>
          </div>
          <div className="feature-item">
            <h3>Integrations</h3>
            <p>Connect with email, Slack, and other tools for enhanced workflow.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;