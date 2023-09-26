import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import AudiImage from '../assets/logo73.jpg';
import '../styles/Login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login">
      <div className="topImage" style={{ backgroundImage: `url(${AudiImage})` }}></div>

      <div className="spacer"></div>

      <div className="bottomContent">
        <form onSubmit={loginUser}>
          <h2>Welcome to Car Wash</h2>

          <div className="input-container">
            <AccountCircleIcon className="input-icon" />
            <input type="text" name="username" placeholder="Username" />
          </div>

          <div className="input-container">
  <div className="password-input" style={{ width: '60%', display: 'flex', alignItems: 'center' }}>
    <LockIcon className="input-icon" style={{ marginLeft: '40px' }} />
    {passwordVisible ? (
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%' }} // Full width for the input
      />
    ) : (
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%' }} // Full width for the input
      />
    )}
  </div>
  <button
    type="button"
    className="password-toggle-button"
    onClick={handleTogglePassword}
    style={{
      width: '30px',
      height: '30px',
      fontSize: '12px',
      padding: '5px',
      marginLeft: '10px', // Add margin to the left for spacing
      background: 'none', // Remove the black background
      border: 'none', // Remove the border
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Add the RemoveRedEyeIcon here */}
    <RemoveRedEyeIcon />
  </button>
</div>

          <button className="special-login-button" type="submit">
            Sign In
          </button>
        </form>
        <p className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>/
          <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


// import React, { useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import AudiImage from '../assets/logo73.jpg';
// import '../styles/Login.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LockIcon from '@mui/icons-material/Lock';

// const LoginPage = () => {
//   let { loginUser } = useContext(AuthContext);

//   return (
//     <div className="login">
//       <div className="topImage" style={{ backgroundImage: `url(${AudiImage})` }}>

// </div>

// <div className="spacer"></div> {/* Add a spacer div for space between the top image and form */}

// <div className="bottomContent">
//   <form onSubmit={loginUser}>
//   <h2>Welcome to Car Wash</h2>  
//   {/* <p className="caption">
//     Affordable and convenient car wash packages. Join for top-quality service.
//   </p> */}

//     <div className="input-container">
      
//       <AccountCircleIcon className="input-icon" />
//       <input type="text" name="username" placeholder="Enter Username" />
//     </div>

//     <div className="input-container">
//       <LockIcon className="input-icon" />
//       <input type="password" name="password" placeholder="Enter Password" />
//     </div>

//     <button className="special-login-button" type="submit">Sign In</button>
//   </form>
//   <p className="forgot-password">
//     <a href="/forgot-password">Forgot Password?</a>/
//     <a href="/register">Register here</a>
//   </p>
// </div>

//     </div>
//   );
// };

// export default LoginPage;




// import React, { useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import AudiImage from '../assets/logo.jpg';
// import '../styles/Login.css';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LockIcon from '@mui/icons-material/Lock';

// const LoginPage = () => {
//   let { loginUser } = useContext(AuthContext);

//   return (
//     <div className="login">
//       <div className="leftSide" style={{ backgroundImage: `url(${AudiImage})` }}></div>
//       <div className="rightSide">
//         <h1>Welcome to Car Wash</h1>
//         <p className="caption">
//         Affordable and convenient car wash packages. Join for top-quality service.
//         </p>
//         <form onSubmit={loginUser}>
//         <div className="input-container">
//   <AccountCircleIcon className="input-icon" /> {/* Place the Person icon */}
//   <input type="text" name="username" placeholder="Enter Username" />
// </div>

// <div className="input-container">
//             <LockIcon className="input-icon" /> {/* Add LockIcon */}
//             <input type="password" name="password" placeholder="Enter Password" />
//           </div>
         
// <button className="special-login-button" type="submit">Sign In</button>

//         </form>
//         <p className="forgot-password">
//           <a href="/forgot-password">Forgot Password?</a>/
//           <a href="/register">Register here</a>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default LoginPage;








