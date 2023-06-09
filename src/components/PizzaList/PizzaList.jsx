import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PizzaCard from "../PizzaCard/PizzaCard"
import './PizzaList.css'

function PizzaList(){
    const pizzaList = useSelector(store=> store.pizzaList)
    const history = useHistory();

    function handleSubmit() {
      history.push('/form')
    }
    return (
		<div className="CardDeck">
			{/*TODO change to be carousel as container for cards */}
			{pizzaList.map((pizza) => (
				<PizzaCard key={pizza.id} pizza={pizza} />
			))}

				<button className="PizzaCardNext" onClick={handleSubmit}>
					Next
				</button>
		</div>
	);
}
export default PizzaList