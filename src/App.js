import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// import Card from "./components/UI/Card";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart,setShowCart] = useState(false)
  
  const showCartHandler = ()=>{
    setShowCart(true);
  }
  const removeCartHandler = ()=>{
    setShowCart(false)
  }
  return (
    <Fragment>
{showCart && <Cart onHide={removeCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      </Fragment>
  
  );
}

export default App;
