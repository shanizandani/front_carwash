import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import "../styles/RegistrationForm.css";
import backgroundImage from '../assets/home2.jpg'; // Import your image

const RegistrationForm = () => {
  const { registerUser, loginUser } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData, e);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Registration error:', error);
      setRegistrationSuccess(false); // Reset the registration success state
    }
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: '#f3d3bd', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="registration-form-container">
        {registrationSuccess ? (
          <p>Registration successful! You can now log in.</p>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              style={{ width: '50%' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ width: '50%' }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              style={{ width: '50%' }}
            />
            <button type="submit">Register</button>
          </form>
        )}
      </div>

      {/* Add the image at the bottom */}
      <img src={backgroundImage} alt="Bottom Image" style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default RegistrationForm;


// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import "../styles/RegistrationForm.css"

// const RegistrationForm = () => {
//   const { registerUser, loginUser } = useAuth();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData, e);
//       setRegistrationSuccess(true);
//     } catch (error) {
//       console.error('Registration error:', error);
//       setRegistrationSuccess(false); // Reset the registration success state
//     }
//   };

//   return (
//     <div className="page-wrapper" style={{ backgroundColor: '#f3d3bd' }}>
//       <div className="registration-form-container">
//         {registrationSuccess ? (
//           <p>Registration successful! You can now log in.</p>
//         ) : (
//           <form onSubmit={handleSubmit} className="registration-form">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleInputChange}
//               style={{ width: '50%' }}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               style={{ width: '50%' }}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               style={{ width: '50%' }}
//             />
//             <button type="submit">Register</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;


// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import "../styles/RegistrationForm.css"

// const RegistrationForm = () => {
//   const { registerUser, loginUser } = useAuth();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData, e);
//       setRegistrationSuccess(true);
//     } catch (error) {
//       console.error('Registration error:', error);
//       setRegistrationSuccess(false); // Reset the registration success state
//     }
//   };
  
  
//   return (
//     <div>
//       {registrationSuccess ? (
//         <p>Registration successful! You can now log in.</p>
//       ) : (
       
// <form onSubmit={handleSubmit} className="registration-form">
//   <input
//     type="text"
//     name="username"
//     placeholder="Username"
//     value={formData.username}
//     onChange={handleInputChange}
//     style={{ width: '50%' }} 
//   />
//   <input
//     type="email"
//     name="email"
//     placeholder="Email"
//     value={formData.email}
//     onChange={handleInputChange}
//     style={{ width: '50%' }} 
//   />
//   <input
//     type="password"
//     name="password"
//     placeholder="Password"
//     value={formData.password}
//     onChange={handleInputChange}
//     style={{ width: '50%' }} 
//   />
//   <button type="submit">Register</button>
  
  
// </form>


//       )}
//     </div>
//   );
// };

// export default RegistrationForm;








