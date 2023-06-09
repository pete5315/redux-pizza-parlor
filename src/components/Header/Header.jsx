// import { useSelector } from "react-redux"

function Header(){
    // const pizzaStore = useSelector(store => store.pizzaStore)
    return (
		<header className="App-header">
			<h1 className="App-title">Prime Pizza</h1>
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