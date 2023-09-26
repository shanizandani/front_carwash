import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/PaymentConfirmation.css"

// require('dotenv').config();
// const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;

const PaypalCheckoutButton = ({ productName ,totalAmount }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };
  console.log("Rendering PayPal button");

  if (paidFor) {
    return (
      <div className="payment-confirmation">
        <p>Thank you for your purchase!</p>
        <p
          className="confirmation-link"
          onClick={() => {
            window.location.href = "http://localhost:3000/order";
          }}
        >
          Click here to view your order
        </p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <PayPalScriptProvider options={{clientId: "AfbUGtEZE9rX77TgWCDqKGON5e5BuEiPxc5DEudSA88h-_7erNXkaEMruhvbOZtLiV6e1wRmCsr4ENIs" }}>
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: productName,
                amount: {
                  value: totalAmount, // Pass the total amount to be paid
                },
              },
            ],
          });
        }}

        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
        }}
        onCancel={() => {}}
        onError={(err) => {
          setError(err);
          console.error("PayPal Checkout Error", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;





// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PaypalCheckoutButton = ({ totalAmount }) => {
//   const [paidFor, setPaidFor] = useState(false);
//   const [error, setError] = useState(null);

//   const handleApprove = (orderId) => {
//     setPaidFor(true);
//   };
//   console.log("Rendering PayPal button");

//   if (paidFor) {
//     // You can display a success message or redirect the user to a thank you page
//     return <p>Thank you for your purchase!</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <PayPalScriptProvider options={{ clientId: "AfbUGtEZE9rX77TgWCDqKGON5e5BuEiPxc5DEudSA88h-_7erNXkaEMruhvbOZtLiV6e1wRmCsr4ENIs" }}>
//       <PayPalButtons
//         style={{ layout: "horizontal" }}
//         createOrder={(data, actions) => {
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: totalAmount, // Pass the total amount to be paid
//                 },
//               },
//             ],
//           });
//         }}

//         onApprove={async (data, actions) => {
//           const order = await actions.order.capture();
//           console.log("order", order);

//           handleApprove(data.orderID);
//         }}
//         onCancel={() => {}}
//         onError={(err) => {
//           setError(err);
//           console.error("PayPal Checkout Error", err);
//         }}
//       />
//     </PayPalScriptProvider>
//   );
// };

// export default PaypalCheckoutButton;