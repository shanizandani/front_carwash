import React, { useContext } from "react";
import {MenuContext} from "../context/MenuContext"


export const MenuItem = (props) => {
  const {id, cover, name, price } = props.data;

// function MenuItem({ cover, name, price}) {
//   const handleImageClick = () => {
  
//   };
  const { addToCart, cartItems}= useContext(MenuContext)

  const cartItemCount = cartItems[id];

  // const handleBuyClick = () => {
  //   onAddToCart({ cover, name, price });
  // };

  // Construct the full URL for the cover image using MEDIA_URL and the cover property
  const fullCoverURL = `https://project-carwash.onrender.com${cover}`;

  return (
    <div className="menuItem">
      <img src={fullCoverURL} alt={name} />
      <h1>{name}</h1>
      <p>${price} 
      <button className="addToCartBttn" onClick={() => addToCart(id)}> 
      add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
      </p>
    </div>
  );
}

export default MenuItem;


// import React from "react";

// function MenuItem({ cover, name, price, onAddToCart }) {
//   const handleImageClick = () => {
//     // Implement code to open the image in a larger view (lightbox/modal)
//     console.log('Image clicked:', cover);
//   };

//   const handleBuyClick = () => {
//     onAddToCart({ cover, name, price });
//   };

//   // Construct the full URL for the cover image using MEDIA_URL and the cover property
//   const fullCoverURL = `http://127.0.0.1:8000${cover}`;

//   return (
//     <div className="menuItem">
//       <img src={fullCoverURL} alt={name} onClick={handleImageClick} />
//       <h1>{name}</h1>
//       <p>${price} <button onClick={handleBuyClick}>Buy</button></p>
      
//     </div>
//   );
// }

// export default MenuItem;





