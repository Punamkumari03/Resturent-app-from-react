import React, { useContext } from 'react'

import classes from './cartItem.module.css'
import CartContext from '../../context/cart-context';

const CartItem = (props) => {
    const ctx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
    <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
        <button onClick={ctx.addItem} id={props.id }> + </button>
        <button onClick={ctx.removeItem} id={props.id }> - </button>
{/* <MealItemForm id={props.id}/> */}
        </div>
    </li>
  )
}

export default CartItem
