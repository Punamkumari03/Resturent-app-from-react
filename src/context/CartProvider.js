import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const [data,setData] = useState([])

    const addItemToCartHandler = (e) =>{
        e.preventDefault();
        setData(['1',...data])
        
}
    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items:[...data],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
