


function Header(){
    // const pizzaStore = useSelector(store => store.pizzaStore)

import { useState } from "react";
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Header.css'
  
function Header(){
  let totalCost=0;
  const orderList = useSelector(store => store.orderList)
  const location = useLocation();
  for (let item of orderList){
    totalCost += Number(item.price)

  }

    return (
		<header className="App-header">
			<h1 className="App-title">Prime Pizza</h1>
      {!(location.pathname==='/checkout') ? (
			<span className="cart-total">

				<span>
					<button>🛒</button>
				</span>
				<span>
					Total: Value Pulled from pizzaStore
					{/* pizzaStore.total */}
				</span>
			</span>

		</header>
	);
}

export default Header