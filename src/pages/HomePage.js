import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from "react-router-dom";
import BannerImage from "../assets/home3.jpg";
import "../styles/Home.css";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>

      
      <div className="headerContainer">
      {user ? (
        <React.Fragment>
          <p style={{ color: '#8B4513' }}>Hello {user.username}</p>

        </React.Fragment>
      ) : (
        <React.Fragment>
        </React.Fragment>

      )}
<h1 style={{ color: '#8B4513' }}>CAR WASH</h1>
<p style={{ color: '#8B4513' }}>Quick and Thrifty: Your Car's TLC.</p>


        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );

};

export default HomePage;


