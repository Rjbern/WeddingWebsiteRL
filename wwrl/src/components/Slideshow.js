import React, { useState, useEffect } from 'react';

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch images from the public/images folder
    const loadImages = async () => {
      try {
        // Try to load images by common naming patterns
        const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
        const foundImages = [];
        
        // Try numbered images first (1.jpg, 2.jpg, etc.)
        for (let i = 1; i <= 50; i++) {
          for (const ext of imageExtensions) {
            const imagePath = `/images/${i}.${ext}`;
            const img = new Image();
            
            await new Promise((resolve) => {
              img.onload = () => {
                foundImages.push(imagePath);
                resolve();
              };
              img.onerror = () => {
                resolve();
              };
              img.src = imagePath;
            });
          }
        }

        // Also try to load images with common names
        const commonNames = [
          'photo', 'image', 'wedding', 'couple', 'ceremony', 'reception',
          'bride', 'groom', 'flowers', 'cake', 'engagement'
        ];
        
        for (const name of commonNames) {
          for (const ext of imageExtensions) {
            const imagePath = `/images/${name}.${ext}`;
            const img = new Image();
            
            await new Promise((resolve) => {
              img.onload = () => {
                if (!foundImages.includes(imagePath)) {
                  foundImages.push(imagePath);
                }
                resolve();
              };
              img.onerror = () => {
                resolve();
              };
              img.src = imagePath;
            });
          }
        }

        setImages(foundImages);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (isLoading) {
    return (
      <div className="slideshow-container">
        <div className="slideshow-placeholder">
          <p>Loading photos...</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="slideshow-container">
        <div className="slideshow-placeholder">
          <p>🖼️ Add your wedding photos to <code>/public/images/</code></p>
          <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: 0.7}}>
            Name them: 1.jpg, 2.jpg, 3.jpg, etc.
          </p>
          <p style={{fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.6}}>
            Supported formats: jpg, jpeg, png, webp, gif
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="slideshow-container">
      <div className="slideshow-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Wedding photo ${currentIndex + 1}`}
          className="slideshow-image"
        />
        <div className="slideshow-dots">
          {images.map((_, index) => (
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
