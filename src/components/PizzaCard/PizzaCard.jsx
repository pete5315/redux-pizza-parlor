import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PizzaCard.css";

function PizzaCard({ pizza }) {
  const [added, setAdded] = useState(false);
  const orderList = useSelector((store) => store.orderList);
  const dispatch = useDispatch();

  function buttonClicked(added) {
    if (added) {
      alert("YOU MUST BUY THE PIZZA");
      // setAdded(!added);
    } else {
      console.log("false");
      dispatch({
        type: "GET_ORDER",
        // Pass in what we're tracking in state
        payload: [
          ...orderList,
          {
            name: pizza.name,
            description: pizza.description,
            price: pizza.price,
            image_path: pizza.image_path,
          },
        ],
      });
      setAdded(!added);
      console.log(orderList);
    }
  }

  return (
    <div className="PizzaCard">
      <div className="PizzaImageContainer">
        <img
          className="PizzaImage"
          src={pizza.image_path}
          alt="Example picture of pizza"
        />
      </div>
      <p className="PizzaDescription">{pizza.description}</p>
      <p className="PizzaPrice">${pizza.price}</p>
      <p>
        {added ? (
          <button
            className="AddRemove-button"
            onClick={() => buttonClicked(added)}
          >
            Remove
          </button>
        ) : (
          <button
            className="AddRemove-button"
            onClick={() => buttonClicked(added)}
          >
            Add
          </button>
        )}
      </p>
    </div>
  );
}

export default PizzaCard;
