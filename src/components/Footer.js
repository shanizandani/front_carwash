import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="wrapper">
      <div className="content">
        {/* Your page content goes here */}
      </div>
      <div className="footer">
        <div className="socialMedia">
          <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        </div>
        <p> &copy; 2023 carwash.com</p>
      </div>
    </div>
  );
}

export default Footer;
