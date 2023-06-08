import { useSelector } from "react-redux"

function PizzaList(){
    const pizzaList = useSelector(store=> store.PizzaList)
    return(
        <div>
        {/*TODO change to be carousel as container for cards */}
        {pizzaList.map(pizza => (
            <PizzaCard pizza={pizza}/>

        ))}
        </div>
    )
}
export default PizzaList