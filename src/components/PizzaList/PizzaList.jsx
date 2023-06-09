import { useSelector } from "react-redux"
import PizzaCard from "../PizzaCard/PizzaCard"

function PizzaList(){
    const pizzaList = useSelector(store=> store.pizzaList)
    return (
		<div>
			{/*TODO change to be carousel as container for cards */}
			{pizzaList.map((pizza) => (
				<PizzaCard key={pizza.id} pizza={pizza} />
			))}
		</div>
	);
}
export default PizzaList