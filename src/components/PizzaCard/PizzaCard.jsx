import { useState } from "react";

function PizzaCard({pizza}){
    const [added, setAdded] = useState(false)


    return (
		<div className="PizzaCard" >
			<div className="PizzaImageContainer">
				<img className="PizzaImage" src={pizza.image_path} alt="Example picture of pizza" />
			</div>
			<p className="PizzaDescription">{pizza.description}</p>
            <p className="PizzaPrice">${pizza.price}</p>
			<p>
				{added ? (
					<button className="AddRemove-button" onClick={()=> setAdded(!added)}>Remove</button>
				) : (
					<button className="AddRemove-button" onClick={()=> setAdded(!added)}>Add</button>
				)}
			</p>
		</div>
	);


}

export default PizzaCard