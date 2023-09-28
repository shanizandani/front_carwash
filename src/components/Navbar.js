import React, { useState, useContext } from "react";
import Logo from "../assets/logo73.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import AuthContext from '../context/AuthContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const {  logoutUser } = useContext(AuthContext);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/order"> Orders </Link>
          <Link to="/ShoppingCart"> {/* Add a Link to the shopping cart */}
          <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} />
        </Link>
          
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/order"> Orders </Link>
        <Link to="/ShoppingCart"> {/* Add a Link to the shopping cart */}
          <ShoppingCartIcon style={{ color: "white", cursor: "pointer" }} />
        </Link>
        <LogoutIcon onClick={logoutUser} style={{color: "white", cursor: 'pointer' }} />
        <button onClick={toggleNavbar}>
         
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;