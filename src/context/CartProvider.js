import React, { useState } from 'react'
import CartContext from './cart-context'

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const CartProvider = (props) => {
  

    const [data,setData] = useState([])



    const addItemToCartHandler = (e) =>{
        e.preventDefault();
        const dataId=e.target.id
        DUMMY_MEALS .map((item)=>{
          return item.id ===  dataId &&
          setData([item,...data])
        })

        // setData(['1',...data])
        
}
    const removeItemFromCartHandler = e => {
e.preventDefault();
const dataId = e.target.id
setData(()=>{
  return data.filter(details => details.id !== dataId)
})

    };

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
