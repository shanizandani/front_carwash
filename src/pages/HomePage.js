import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from "react-router-dom";
import BannerImage from "../assets/home3.jpg";
import "../styles/Home.css";

const HomePage = () => {
  const { user,logoutUser } = useContext(AuthContext);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      {user ? (
        <React.Fragment>
          <p style={{ color: '#8B4513' }}>Hello {user.username}</p>

          {/* <LogoutIcon onClick={logoutUser} style={{color: "red", cursor: 'pointer' }} /> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Link to="/login">Login</Link>
          <span> | </span>
          <Link to="/register">Register</Link>
          <span> | </span>
          <Link to="/forgot-password" className='text-danger'>Forgot Password?</Link> */}
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



// import React, { useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthContext';

// const HomePage = () => {
//   const [notes, setNotes] = useState([]);
//   const { authTokens, logoutUser } = useContext(AuthContext);

//   useEffect(() => {
//     getNotes();
//   }, []);

//   const getNotes = async () => {
//     const response = await fetch('http://127.0.0.1:8000/api/notes/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authTokens.access}` // Add space after 'Bearer'
//       },
//     });
//     const data = await response.json();
//     if (response.status === 200) {
//       setNotes(data);
//     } else if(response.statusText === 'Unauthrozied'){
//       logoutUser()
//     }
//   };

//   return (
//     <div>
//       You are logged in.
      
//       {notes.length > 0 ? (
//         <ul>
//           {notes.map((note) => (
//             <li key={note.id}> {note.body}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No notes available.</p>
//       )}
//     </div>
//   );
// };

// export default HomePage;
