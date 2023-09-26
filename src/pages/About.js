import React from "react";
import CarwashImage from "../assets/aboutt.jpg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${CarwashImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Car Wash, we take pride in not only providing top-tier car care but also offering the most affordable and budget-friendly options in the market. Our commitment to excellence extends to ensuring that everyone can access high-quality car services without breaking the bank. We believe in making car care accessible to all, which is why our prices are the lowest you'll find. Don't compromise on the health and beauty of your vehicle. Choose Car Wash for premium yet affordable car care that suits every budget. Join the countless car owners who rely on us for the best value in the industry.
        </p>
      </div>
    </div>
  );
}

export default About;