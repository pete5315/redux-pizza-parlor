import { useSelector } from "react-redux"

function Header(){
  let totalCost=0;
  const orderList = useSelector(store => store.orderList)
  const [address, setAddress] = useState("");
  for (let item of orderList){
    totalCost += Number(item.price)

  }
  if (address===) {
    alert("YOU MUST BUY THE PIZZA");
    setAdded(!added);
  }
    return (
		<header className="App-header">
			<h1 className="App-title">Prime Pizza</h1>
      {added ? (
			<span className="cart-total">
        
      <p>
      <span>
        <button>🛒</button>
      </span>
      <span>
        Total: ${totalCost.toFixed(2)}
      </span>
      </p>
    </span>
        ) : (
          <></>
        )}

		</header>
	);
}

export default Header