import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import MealItem from "../Meals/MealItem";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <CartItem name={item.name} price={item.price} id={item.id} />
  
  ));
  return (
    <Modal onHide={props.onHide}>
      {cartItems || <button onClick={cartCtx.removeItem} id={props.id }>-</button>}
      
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
