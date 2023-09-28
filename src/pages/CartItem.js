import React , {useContext} from "react";
import { MenuContext } from "../context/MenuContext";
import "../styles/Cart.css"

export const CartItem = (props) => {
  const { id, cover, name, price } = props.data;
  const fullCoverURL = `https://project-carwash.onrender.com${cover}`;
  const { cartItems,  addToCart, removeFromCart , updateCartItemCount} = useContext(MenuContext);

  return (
    <div className="cartItem">
      <img src={fullCoverURL} alt={name} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>


      </div>
    </div>
  );
};

export default CartItem;

