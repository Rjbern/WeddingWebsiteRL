import React from 'react';

export default function Schedule() {
  return (
    <section>
      <h2>Schedule</h2>
      <p style={{marginBottom: '2rem', fontStyle: 'italic', color: 'var(--text-light)'}}>
        Here's how our day will unfold. We can't wait to celebrate with you!
      </p>
      <ul className="schedule">
        <li>
          <strong>3:00 PM</strong>
          <span>Guest Arrival & Refreshments</span>
        </li>
        <li>
          <strong>4:00 PM</strong>
          <span>Ceremony</span>
        </li>
        <li>
          <strong>5:00 PM</strong>
          <span>Cocktail Hour</span>
        </li>
        <li>
          <strong>6:30 PM</strong>
          <span>Dinner & Speeches</span>
        </li>
        <li>
          <strong>9:00 PM</strong>
          <span>Dancing & Celebration</span>
        </li>
      </ul>
    </section>
  );
}
