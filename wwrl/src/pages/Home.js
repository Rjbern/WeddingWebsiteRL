import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <section style={{position: 'relative'}}>
      <h2>Welcome</h2>
      
      <div className="home-layout">
        <div className="slideshow-section">
          <Slideshow />
        </div>
        
        <div className="welcome-content">
          <div className="welcome-intro">
            <p>We're thrilled to celebrate this special day with our favorite people. Join us as we say "I do" and share in the joy, love, and festivities!</p>
          </div>
          
          <h3 style={{fontSize: '1.8rem', color: 'var(--olive)', marginTop: '2rem', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif", position: 'relative', zIndex: 1}}>
            ✦ Wedding Details ✦
          </h3>
          <ul className="details-list">
            <li><strong>Date:</strong> Friday, June 26, 2026</li>
            <li><strong>Location: </strong>Muskegon, MI</li>
          </ul>
          <div style={{textAlign: 'center', marginTop: '2.5rem', position: 'relative', zIndex: 1}}>
            <Link to="/rsvp" className="button">✦ RSVP Now ✦</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
