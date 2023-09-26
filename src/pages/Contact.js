import React from "react";
import AudiImage from "../assets/3cars.jpg";
import "../styles/Contact.css";

function Contact() {
  // Google Maps URL for your business location (replace with your actual address)
  const googleMapsUrl = "https://www.google.com/maps?q=Your+Business+Address";

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${AudiImage})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <div className="contact-info">
            <h2>Opening Hours</h2>
            <p>Sunday - Thursday: 9:00  - 16:00 </p>
            <p>Friday: 10:00  - 14:00 </p>
            <p>Saturday: Closed</p>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <p>
              <span className="contact-label">Phone:</span> (123) 456-7890
            </p>
            <p>
              <span className="contact-label">Email:</span> info@example.com
            </p>
          </div>

          {/* Add the Google Maps link */}
          <div className="contact-info">
            <h3>Location</h3>
            <p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
