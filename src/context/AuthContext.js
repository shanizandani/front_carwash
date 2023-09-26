import { createContext, useState, useEffect , useContext} from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';




const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext);
  };

export default AuthContext;

export const AuthProvider = ({ children }) => {
  

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true)  

    const navigate = useNavigate(); // Replace useHistory with useNavigate
   

    
    let loginUser = async (e) => {
        e.preventDefault();
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
        });
        let data = await response.json();
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/'); // Use navigate function to navigate
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    };



    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens'); // Fix the typo here
        navigate('/login');
    }



    const registerUser = async (formData, e) => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.status === 201) {
            // Registration successful, log in the user using the event
            await loginUser(e);
          } else {
            console.error('Registration failed:', data);
          }
        } catch (error) {
          console.error('Registration error:', error);
        }
      };
      
    
      
// -----------------------------------------------------------------------------    


// const initiatePasswordReset = async (email) => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/forgot-password/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();
//       if (response.status === 200) {
//         // Password reset email sent successfully
//         return true;
//       } else {
//         console.error('Password reset request failed:', data);
//         return false;
//       }
//     } catch (error) {
//       console.error('Password reset request failed:', error);
//       return false;
//     }
//   };
const initiatePasswordReset = async (email, token) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/password-reset/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      // navigate(`/reset-password/${token}`); // Navigate to the ResetPassword page
      return true;
    } else {
      const data = await response.json();
      console.error('Password reset request failed:', data);
      return false;
    }
  } catch (error) {
    console.error('Password reset request failed:', error);
    return false;
  }
};



//   ---------------------------------------------------------


    // let updateToken = async ()=>{
    //     console.log('Update token ');

    //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ 'refresh': authTokens?.refresh })
    //     });

    //     let data = await response.json()
    //     if (response.status === 200){
    //         setAuthTokens(data);
    //         setUser(jwt_decode(data.access));
    //         localStorage.setItem('authTokens', JSON.stringify(data));

    //     } else{
    //         logoutUser()

    //     }
    //     if (loading){
    //         setLoading(false)
    //     }
    // }

 

  

    let contextData = {
        user: user,
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        setUser:setUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
        registerUser:registerUser,
        initiatePasswordReset: initiatePasswordReset,
       
        
    };


    useEffect(()=> {

        if(authTokens){
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)


    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}




