import React, { useContext } from "react";
import {MenuContext} from "../context/MenuContext"


export const MenuItem = (props) => {
  const {id, cover, name, price } = props.data;

  const { addToCart, cartItems}= useContext(MenuContext)

  const cartItemCount = cartItems[id];



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






