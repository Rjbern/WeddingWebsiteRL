import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function RSVP() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [guests, setGuests] = useState(0);
  const [guestNames, setGuestNames] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Check if all guest names are filled in
    if (guests > 0 && guestNames.some(name => !name.trim())) {
      setSubmitMessage('❌ Please enter names for all additional guests.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Add RSVP to Firestore
      const docRef = await addDoc(collection(db, 'rsvps'), {
        name: name.trim(),
        attending: attending,
        additionalGuests: parseInt(guests),
        totalGuests: parseInt(guests) + 1,
        guestNames: guestNames.map(g => g.trim()).filter(g => g),
        timestamp: serverTimestamp(),
      });

      setSubmitMessage('✨ Thanks! Your RSVP has been saved.');
      console.log('RSVP saved with ID:', docRef.id);
      
      // Reset form
      setName('');
      setAttending('yes');
      setGuests(0);
      setGuestNames([]);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      console.error('Error saving RSVP:', error);
      setSubmitMessage('❌ Error saving RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleGuestCountChange(newCount) {
    const count = parseInt(newCount) || 0;
    setGuests(Math.min(count, 7)); // Cap at 7 additional guests
    
    // Adjust guest names array
    let newGuestNames = [...guestNames];
    if (newGuestNames.length < Math.min(count, 7)) {
      // Add empty names if needed
      while (newGuestNames.length < Math.min(count, 7)) {
        newGuestNames.push('');
      }
    } else if (newGuestNames.length > Math.min(count, 7)) {
      // Remove extra names
      newGuestNames = newGuestNames.slice(0, Math.min(count, 7));
    }
    setGuestNames(newGuestNames);
  }

  function handleGuestNameChange(index, value) {
    const newGuestNames = [...guestNames];
    newGuestNames[index] = value;
    setGuestNames(newGuestNames);
  }

  return (
    <section>
      <h2>RSVP</h2>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <label>
          Your name
          <input 
            value={name} 
            onChange={e=>setName(e.target.value)} 
            required 
            disabled={isSubmitting}
          />
        </label>
        <label>
          Will you attend?
          <select 
            value={attending} 
            onChange={e=>setAttending(e.target.value)}
            disabled={isSubmitting}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </select>
        </label>
        <label>
          Number of additional guests
          <input 
            type="number" 
            min="0" 
            max="7"
            value={guests} 
            onChange={e => handleGuestCountChange(e.target.value)}
            disabled={isSubmitting}
          />
        </label>
        {guests > 0 && (
          <fieldset style={{marginTop: '1.5rem', padding: '1rem', border: '1px solid var(--sage-green)', borderRadius: '8px'}}>
            <legend style={{fontWeight: 'bold', color: 'var(--sage-green)', marginBottom: '1rem'}}>Guest Names</legend>
            {guestNames.map((guestName, index) => (
              <label key={index} style={{display: 'block', marginBottom: '0.75rem'}}>
                Guest {index + 1} name
                <input 
                  type="text"
                  value={guestName} 
                  onChange={e => handleGuestNameChange(index, e.target.value)} 
                  required
                  disabled={isSubmitting}
                  placeholder="Enter guest name"
                />
              </label>
            ))}
          </fieldset>
        )}
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
        </button>
        {submitMessage && (
          <div style={{
            padding: '1rem',
            marginTop: '1rem',
            borderRadius: '8px',
            backgroundColor: submitMessage.includes('Error') ? 'rgba(220, 38, 38, 0.1)' : 'rgba(34, 197, 94, 0.1)',
            color: submitMessage.includes('Error') ? '#991b1b' : '#166534',
            border: `1px solid ${submitMessage.includes('Error') ? '#fca5a5' : '#86efac'}`,
            textAlign: 'center'
          }}>
            {submitMessage}
          </div>
        )}
      </form>
    </section>
  );
}
