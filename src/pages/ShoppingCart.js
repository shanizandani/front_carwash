// ShoppingCart.js
import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { CartItem } from "../pages/CartItem";
import { useNavigate } from "react-router-dom";
// import PaypalCheckoutButton from "./PaypalCheckoutButton"; 
// Import the PayPal button component
import PaypalCheckoutButton from "./PaypalCheckoutButton.js";
import "../styles/ShoppingCart.css"

export const ShoppingCart = () => {
  const { cartItems, products, getTotalCartAmount } = useContext(MenuContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  let selectedProduct = "";
  console.log("Selected Product:", selectedProduct);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {products.map((product) => {
          const cartQuantity = cartItems[product.id];
          if (cartQuantity !== 0) {
            selectedProduct = product.name;
            return <CartItem key={product.id} data={product} cartQuantity={cartQuantity} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/menu")}>Continue Shopping</button>

          {/* Include the PayPal Checkout Button component */}
          <div className="paypal-container">
            <p>Check out with:</p>
            {/* Include the PayPal Checkout Button component */}
            <PaypalCheckoutButton totalAmount={totalAmount} productName={selectedProduct} />
          </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default ShoppingCart;


// import React, { useContext } from "react";
// import { MenuContext } from "../context/MenuContext";
// import { CartItem } from "../pages/CartItem";
// import { useNavigate } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export const ShoppingCart = () => {
//   const { cartItems, products, getTotalCartAmount } = useContext(MenuContext);
//   const totalAmount = getTotalCartAmount();

//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div>
//         <h1>Your Cart Items</h1>
        
//       </div>
//       <div className="cart">
//         {products.map((product) => {
//           const cartQuantity = cartItems[product.id];
//           if (cartQuantity !== 0) {
//             return <CartItem key={product.id} data={product} cartQuantity={cartQuantity} />;
//           }
          
//           return null;
//         })}
//       </div>
//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p> Subtotal: ${totalAmount} </p>
//           <button onClick={() => navigate("/menu")}> Continue Shopping </button>
      
//             <PayPalScriptProvider options={{ clientId: "AfbUGtEZE9rX77TgWCDqKGON5e5BuEiPxc5DEudSA88h-_7erNXkaEMruhvbOZtLiV6e1wRmCsr4ENIs" }}>
//           <PayPalButtons style={{ layout: "horizontal" } }  />
//       </PayPalScriptProvider>
//         </div>
//       ) : (
//         <h1> Your Shopping Cart is Empty</h1>
        
//       )}
  
//     </div>

//   );
// };


// export default ShoppingCart