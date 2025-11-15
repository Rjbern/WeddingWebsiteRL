import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "When Should I RSVP?",
      answer: "RSVP as soon as you are sure of your answer! Please submit your RSVP through the link on our website to ensure we have an accurate headcount."
    },
    {
      question: "What is the Dress Code?",
      answer: "While we do not want to police what anyone wears to our special day, we do request that you stay within our color scheme when planning your outfit for the day! This is by no means a 'super formal' wedding so please do not stress! Please refer to the 'Theme and Attire' page for visual examples."
    },
    {
      question: "Can I Bring a Guest/Date?",
      answer: "Due to limited space, we are only able to accommodate guests formally invited on your wedding invitation. If you received a plus one, it will appear on your invitation. If so, please be sure to let us know if you will be bringing your allocated plus one, as well as listing their name on your RSVP."
    },
    {
      question: "Is the Venue Indoor or Outdoor?",
      answer: "The ceremony and the reception will be held outdoors. We will have a tent covering the reception area, which can be used for the ceremony in the event of rain."
    },
    {
      question: "Are Kids Allowed?",
      answer: "Everyone who is formally invited will be listed on your wedding invitation. Primarily, our wedding will be adult only."
    },
    {
      question: "When Should I Arrive?",
      answer: "Please plan to arrive with enough time to find parking and be seated before the ceremony begins. Details about timing and arrival instructions can be found on your invitation or the Venue page."
    },
    {
      question: "Can I Take Photos?",
      answer: "We kindly ask that your phones are silenced and put away during our ceremony. However, feel free to take as many photos as you like during the rest of the evening! We will have a shared photo app for all guests to share their photos!"
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p className="faq-intro">Any questions you may have relating to our wedding should be answered here! If you have any remaining questions, please feel free to reach out!</p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggleExpanded(index)}
              aria-expanded={expandedIndex === index}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">+</span>
            </button>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h3>Still Have Questions?</h3>
        <p>Feel free to reach out with any questions or concerns!</p>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      </div>
    </section>
  );
}
