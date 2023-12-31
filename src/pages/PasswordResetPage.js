import React, { useState} from 'react';
import { useParams,useNavigate  } from 'react-router-dom';

function PasswordResetPage() {
  const [newPassword, setNewPassword] = useState('');
  const { token, encoded_pk } = useParams(); 
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
  
    // Make an API request to reset the password with the new password and the extracted 'token' and 'encoded_pk'
    try {
      const response = await fetch(`https://project-carwash.onrender.com/password-reset/${encoded_pk}/${token}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword }), // Use the field name "password"
      });
  
      if (response.status === 200) {
        alert('Password reset successful. You can now log in with your new password.');
        
        // Use the navigate function to redirect to the home page
        navigate('/');
      } else {
        // Handle error, display an error message, etc.
      }
    } catch (error) {
      // Handle network error
    }
  };
  

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default PasswordResetPage;

