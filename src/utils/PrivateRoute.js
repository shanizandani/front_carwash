import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Outlet {...rest}>{children}</Outlet> : <Navigate to="/login" />;
}
export default PrivateRoute;


