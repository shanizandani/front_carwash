import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
// import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import RegistrationForm from './pages/RegistrationForm';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import ShoppingCart from './pages/ShoppingCart'
import { MenuContextProvider } from './context/MenuContext';

// import { OrderProvider } from './context/OrderContext';
import OrderList from './pages/OrderList';
import PasswordResetPage from './pages/PasswordResetPage';



function App() {
  return (
    <div className="App">
      
      <Router>
              <AuthProvider>
                <MenuContextProvider>
               
                
      {/* <Header /> */}
      <Navbar />
           <Routes>
             <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/menu' element={<Menu/>}/>
              <Route exact path='/ShoppingCart' element={<ShoppingCart/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              <Route exact path='/order' element={<OrderList/>}/>
             
             </Route>
             <Route path="/login" element={<LoginPage />} />
             <Route path="/register" element={<RegistrationForm />}/>
             <Route path="/forgot-password" element={<ForgotPassword />}/>
             {/* <Route path="/reset-password/:token" component={<ResetPassword /> } /> */}
             <Route path="/password-reset/:encoded_pk/:token" element={<PasswordResetPage />} />

           </Routes>
          
           </MenuContextProvider>
         </AuthProvider>
         <Footer />
      </Router>
    </div>
  );
}


export default App;

