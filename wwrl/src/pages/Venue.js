import React from 'react';

export default function Venue() {
  return (
    <section>
      <h2>Venue</h2>
      <p>Address: 2199 N Scenic Dr</p>
      <div className="map-wrap">
        {/* Replace src with your Google Maps embed or static image */}
        <iframe
          title="venue-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.5139021317846!2d-86.38270376274815!3d43.298287196031275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881bdaf6cfe68007%3A0x3f59509193ed63a7!2s2199%20N%20Scenic%20Dr%2C%20Muskegon%2C%20MI%2049445!5e1!3m2!1sen!2sus!4v1763100954476!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{border:0}}
          loading="lazy"
        />
      </div>
      <p>Parking: On-site parking available. More travel info to come.</p>
    </section>
  );
}
