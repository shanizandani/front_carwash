import React, { useState } from 'react';
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
      <img src={backgroundImage} alt="Logo" style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default ForgotPassword;

