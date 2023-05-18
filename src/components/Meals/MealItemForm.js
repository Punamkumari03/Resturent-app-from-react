import React, { useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
// import CartProvider from '../../context/CartProvider'
import CartContext from '../../context/cart-context'

const MealItemForm = () => {
  const ctx = useContext(CartContext)

  return (
    <form className={classes.form}>
    <div>
    <Input label="Amount"
      input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step: '1',
        defaultValue:'1'

      }}
    />
      
      </div>
      <button onClick={ctx.addItem}>+ Add</button>
    </form>
  )
}

export default MealItemForm
