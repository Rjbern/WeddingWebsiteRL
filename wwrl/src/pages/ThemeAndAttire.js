import React from 'react';
import './ThemeAndAttire.css';

export default function ThemeAndAttire() {
  return (
    <section className="theme-attire">
      <h2>Theme & Attire</h2>
      <p>If possible, we would love for guests to fit within the color scheme of the wedding! Use the images below to get a sense of what we would love to see at the wedding. Feel free to reach out with any questions or concerns!</p>


      <div className="theme-section theme-flex-row">
        <div className="theme-flex-col">
          <h3>Summer Colors We Want to See!</h3>
          <div className="theme-images theme-images-vertical">
            <img src={process.env.PUBLIC_URL + '/images/summer-colors-1.jpg'} alt="Summer color palette 1" />
            <img src={process.env.PUBLIC_URL + '/images/summer-colors-2.jpg'} alt="Summer color palette 2" />
          </div>
        </div>
        <div className="theme-flex-col">
          <h3>Colors to Avoid, If Possible</h3>
          <div className="theme-images">
            <img src={process.env.PUBLIC_URL + '/images/colors-avoid.jpg'} alt="Colors to avoid" />
          </div>
        </div>
      </div>

      <div className="theme-section">
        <center>
        <h3>Bridal Party Colors</h3>
    <div className="theme-images bridal-party">
      <img src={process.env.PUBLIC_URL + '/images/bridal-party-colors.jpg'} alt="Bridal party colors" />
    </div>
        </center>
      </div>

      <div className="theme-section">
        <center>
        <h3>Style Inspiration</h3>
        <p>We want everyone to feel comfortable and wear what they like, but feel free to use these images to guide your style!</p>
        <div className="theme-images">
          <img src={process.env.PUBLIC_URL + '/images/style-1.jpg'} alt="Style inspiration 1" />
          <img src={process.env.PUBLIC_URL + '/images/style-2.jpg'} alt="Style inspiration 2" />
          <img src={process.env.PUBLIC_URL + '/images/style-3.jpg'} alt="Style inspiration 3" />
          <img src={process.env.PUBLIC_URL + '/images/style-4.jpg'} alt="Style inspiration 4" />
          <img src={process.env.PUBLIC_URL + '/images/style-5.jpg'} alt="Style inspiration 5" />
          <img src={process.env.PUBLIC_URL + '/images/style-6.jpg'} alt="Style inspiration 6" />
        </div>
        </center>
      </div>

      <div className="theme-section contact-section">
        <h4>Contact</h4>
        <p>Feel free to reach out with any questions or concerns!</p>
        <p>Email: <a href="mailto:your-email@example.com">laylaskates@gmail.com</a></p>
      </div>
    </section>
  );
}
