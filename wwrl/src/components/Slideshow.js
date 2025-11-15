
import React, { useState, useEffect } from 'react';
import imageList from '../imageList';

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (imageList.length === 0) {
    return (
      <div className="slideshow-container">
        <div className="slideshow-placeholder">
          <p>
            🖼️ Add your wedding photos to <code>/public/images/</code>
          </p>
          <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: 0.7}}>
            Name them: 1.JPG, 2.JPG, 3.JPG, etc.
          </p>
          <p style={{fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.6}}>
            Supported formats: JPG, JPEG, PNG, WEBP, GIF
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        <img
          src={process.env.PUBLIC_URL + '/images/' + imageList[currentIndex]}
          alt=""
          className="slideshow-image"
        />
        <div className="slideshow-dots">
          {imageList.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
