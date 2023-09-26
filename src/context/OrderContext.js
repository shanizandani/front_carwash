// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// const OrderContext = createContext();

// const OrderProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);
//   const [user, setUser] = useState(null);
//   // ----------------------------- start CREATE ---------------------------------------------------------------------------
//   useEffect(() => {
//     // Fetch user data from the new API endpoint
//     axios
//       .get('http://127.0.0.1:8000/api/users/') // Replace with your user data API endpoint
//       .then((response) => {
//         const userData = response.data;
//         console.log('User data:', userData);
//         setUser(userData); // Set the user state
//       })
//       .catch((error) => console.error(error));
//   }, []);
//     axios.get('http://127.0.0.1:8000/api/orders', {
//     headers: {
//       Authorization: `Bearer ${yourAuthToken}`,
//     },
//   })
  
  
  

// // ----------------------------- stop CREATE ---------------------------------------------------------------------------

//   // ----------------------------- start ADD ---------------------------------------------------------------------------

//   const addOrders = (orderData) => {
//     axios
//       .post('http://127.0.0.1:8000/api/orders/create/', orderData)
//       .then((response) => {
//         console.log('Department added successfully:', response.data);
//         // Update the departments state with the newly added department
//         setOrders([...orders, response.data]);
//       })
//       .catch((error) => console.error('Failed to add department:', error));
//   };

// // ----------------------------- end ADD ---------------------------------------------------------------------------


 
//   const ordersContextValue = {
//     orders,
//     addOrders,
//     user,
//   };
//   console.log('Context value:', ordersContextValue)

//   return (
//     <OrderContext.Provider value={ordersContextValue}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export { OrderContext, OrderProvider};