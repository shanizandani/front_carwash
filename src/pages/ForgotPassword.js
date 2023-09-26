import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import backgroundImage from '../assets/logo5.jpg'; // Import your image

const ForgotPassword = () => {
  const { initiatePasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const success = await initiatePasswordReset(email);
      if (success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Password reset request failed:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#f3d3bd', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {isSubmitted ? (
        <h2>An email with instructions to reset your password has been sent to your email address.</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your email address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Add the image at the bottom */}
      <img src={backgroundImage} alt="Bottom Image" style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default ForgotPassword;


// import React, { useState } from 'react';
// import { Link} from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const ForgotPassword = () => {
//   const { initiatePasswordReset } = useAuth();
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const success = await initiatePasswordReset(email);
//       if (success) {
//         setIsSubmitted(true);
//       }
//     } catch (error) {
//       console.error('Password reset request failed:', error);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: '#f3d3bd' }}>
//       {isSubmitted ? (
//         <h2>An email with instructions to reset your password has been sent to your email address.</h2>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Enter your email address:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
  
// };

// export default ForgotPassword;



// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';

// const ForgotPassword = () => {
//   const { initiatePasswordReset } = useAuth();
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(''); // Initialize message state

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (email.trim() !== '') {
//         // Initiate password reset and set the message accordingly
//         const success = await initiatePasswordReset(email);

//         if (success) {
//           setMessage('Instructions for resetting your password will be sent to your email shortly.');
//         }
//       } else {
//         setMessage('Email address is required.'); // Set an error message
//       }
//     } catch (error) {
//       console.error('Password reset request failed:', error);
//     }
//   };

//   return (
//     <div>
//       {message ? ( // Display the message
//         <p>{message}</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Enter your email address:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;