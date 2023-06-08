import { useSelector } from "react-redux";

function PizzaCard({pizza}){
    const [added, setAdded] = useSelector(false)


    return (
		<div className="PizzaCard">
			<div className="PizzaImageContainer">
				<img className="PizzaImage" src={pizza.image_path} alt="Example picture of pizza" />
			</div>
			<p className="PizzaDescription">{pizza.description}</p>
			<p>
				{!added ? (
					<button className="AddRemove-button" onClick={()=> setAdded(!added)}>Remove</button>
				) : (
					<button className="AddRemove-button" onClick={()=> setAdded(!added)}>Add</button>
				)}
			</p>
		</div>
	);


}

export default PizzaCard