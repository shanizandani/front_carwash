import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import BarcodeImage from '../assets/barkod.png';
import "../styles/OrderList.css";
import AudiImage from "../assets/order.jpg";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/orders/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + String(authTokens.access),
        },
      });
      const data = await response.json();

      if (response.status === 200) {
        setOrders(data);
      } else if (response.statusText === 'Unauthorized') {
        logoutUser();
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleUseWashes = async (orderId, currentWashingAmount) => {
    try {
      if (currentWashingAmount > 0) {
        const updatedWashingAmount = currentWashingAmount - 1;
        const updatedOrder = {
          ...orders.find(order => order.id === orderId),
          washing_amount: updatedWashingAmount,
        };

        const response = await fetch(`http://127.0.0.1:8000/api/orders/update/${orderId}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(authTokens.access),
          },
          body: JSON.stringify(updatedOrder),
        });

        if (response.status === 200) {
          getOrders();
          showBarcodeForFiveMinutes();
        } else if (response.statusText === 'Unauthorized') {
          logoutUser();
        }
      }
    } catch (error) {
      console.error('Error using washes:', error);
    }
  };

  const activeOrders = orders.filter(order => order.washing_amount > 0);
  const orderHistory = orders.filter(order => order.washing_amount <= 0);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const showBarcodeForFiveMinutes = () => {
    setShowBarcode(true);
    setRemainingTime(300);
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setShowBarcode(false);
    }, 300000);
  };

  return (
    <div className="container">
      <div className="left-side" style={{ backgroundImage: `url(${AudiImage})` }}></div>
      <div className="right-side">
        <div className="note">
          <p>
            Before clicking on "Use Wash," please make sure you are near the seller because the code is only valid for five minutes.
          </p>
        </div>

        {showBarcode && (
          <div className="barcode-container">
            <img src={BarcodeImage} alt="Barcode" className="barcode-img" />
            <p className="timer">Time remaining: {formatTime(remainingTime)}</p>
          </div>
        )}

        <h2>Active Orders</h2>
        <table className="order-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Washing Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activeOrders.map(order => (
              <tr key={order.id}>
                <td>{order.product_name}</td>
                <td>{order.washing_amount}</td>
                <td>
                  <div>
                    {order.washing_amount > 0 && (
                      <button onClick={() => handleUseWashes(order.id, order.washing_amount)}>
                        Use Wash
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={() => setShowOrderHistory(!showOrderHistory)}>
          {showOrderHistory ? 'Hide Order History' : 'Show Order History'}
        </button>

        {showOrderHistory && (
          <div>
            <h2>Order History</h2>
            <table className="order-history-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Product Name</th>
                  <th>Total Payment</th>
                  <th>Order Date</th>
                  <th>Washing Amount</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map(order => (
                  <tr key={order.id}>
                    <td>{order.customer_name}</td>
                    <td>{order.product_name}</td>
                    <td>{order.total_payment}</td>
                    <td>{order.order_date}</td>
                    <td>{order.washing_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;



// import React, { useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import BarcodeImage from '../assets/barkod.png';
// import "../styles/OrderList.css"
// import AudiImage from "../assets/3cars.jpg";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [showOrderHistory, setShowOrderHistory] = useState(false);
//   const [showBarcode, setShowBarcode] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(0); // Initialize the remaining time

//   const { authTokens, logoutUser } = useContext(AuthContext);

//   useEffect(() => {
//     getOrders();
//   }, []);

//   const getOrders = async () => {
//     try {
//       // Replace with your actual API endpoint and fetch code
//       const response = await fetch('http://127.0.0.1:8000/api/orders/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + String(authTokens.access),
//         },
//       });
//       const data = await response.json();

//       if (response.status === 200) {
//         setOrders(data);
//       } else if (response.statusText === 'Unauthorized') {
//         logoutUser();
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const handleUseWashes = async (orderId, currentWashingAmount) => {
//     try {
//       if (currentWashingAmount > 0) {
//         const updatedWashingAmount = currentWashingAmount - 1;

//         // Create an updated order object with the new washing_amount
//         const updatedOrder = {
//           ...orders.find(order => order.id === orderId),
//           washing_amount: updatedWashingAmount,
//         };

//         // Replace with your actual API endpoint and fetch code
//         const response = await fetch(`http://127.0.0.1:8000/api/orders/update/${orderId}/`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + String(authTokens.access),
//           },
//           body: JSON.stringify(updatedOrder),
//         });

//         if (response.status === 200) {
//           // Successfully updated washing_amount, so update the state
//           getOrders();
//           showBarcodeForFiveMinutes(); // Show barcode for 5 seconds
//         } else if (response.statusText === 'Unauthorized') {
//           logoutUser();
//         }
//       }
//     } catch (error) {
//       console.error('Error using washes:', error);
//     }
//   };

//   const activeOrders = orders.filter(order => order.washing_amount > 0);
//   const orderHistory = orders.filter(order => order.washing_amount <= 0);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   // Function to show the barcode for 5 minutes (300 seconds)
//   const showBarcodeForFiveMinutes = () => {
//     setShowBarcode(true);
//     setRemainingTime(300); // Set the remaining time to 300 seconds (5 minutes)
//     const interval = setInterval(() => {
//       setRemainingTime((prevTime) => prevTime - 1);
//     }, 1000); // Update the remaining time every 1 second

//     // Clear the interval and hide the barcode when the timer reaches 0
//     setTimeout(() => {
//       clearInterval(interval);
//       setShowBarcode(false);
//     }, 300000); // 300000 milliseconds = 5 minutes
//   };
  

//   return (
//     <div className="container">
//             <div
//         className="leftSide"
//         style={{ backgroundImage: `url(${AudiImage})` }}
//       ></div>
//         <div className="note">
//         <p>
//           Before clicking on "Use Wash," please make sure you are near the seller because the code is only valid for five minutes.
//         </p>
//       </div>
      
//       {showBarcode && (
//         <div className="center-container" style={{ marginLeft: '200px' }}>
//   <img src={BarcodeImage} alt="Barcode" />
//   <p style={{ marginLeft: '21px' }}>Time remaining: {formatTime(remainingTime)}</p>
// </div>
// )}
//       <p className="title">Your orders!</p>


// {activeOrders.length > 0 && (
//   <div>
//     <h2>Active Orders</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>Product Name</th>
//           <th>Washing Amount</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {activeOrders.map(order => (
//           <tr key={order.id}>
//             <td>{order.product_name}</td>
//             <td>{order.washing_amount}</td>
//             <td>
//               <div>
//                 {order.washing_amount > 0 && (
//                   <button onClick={() => handleUseWashes(order.id, order.washing_amount)}>
//                     Use Wash
//                   </button>
//                 )}
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// )}

//       <button onClick={() => setShowOrderHistory(!showOrderHistory)}>
//         {showOrderHistory ? 'Hide Order History' : 'Show Order History'}
//       </button>

//       {showOrderHistory && (
//         <div>
//           <h2>Order History</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Customer Name</th>
//                 <th>Product Name</th>
//                 <th>Total Payment</th>
//                 <th>Order Date</th>
//                 <th>Washing Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orderHistory.map(order => (
//                 <tr key={order.id}>
//                   <td>{order.customer_name}</td>
//                   <td>{order.product_name}</td>
//                   <td>{order.total_payment}</td>
//                   <td>{order.order_date}</td>
//                   <td>{order.washing_amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Render the barcode image and countdown timer when showBarcode is true */}


//     </div>
//   );
// };

// export default OrderList;






