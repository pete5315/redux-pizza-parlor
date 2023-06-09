import axios from "axios";
import { useSelector } from "react-redux";
import TableItem from "../TableItem/TableItem";

function Checkout() {
  const formData = useSelector(store => store.formData)
  const orderList = useSelector(store => store.orderList)
  console.log(formData, orderList);
  let totalCost = 0;
  for (let item of orderList){
    totalCost += Number(item.price)

  }
  console.log('totalcost:', totalCost);
  const postCheckout = () =>{
    axios.post("/api/order",{formData, orderList})
    .then((response)=>{
      console.log('Client POST success', response);
    }).catch((error)=>{
      console.log('Error in client side POST', error);
    });
  }
  return (
		<div>
			<h1>Checkout</h1>
			<span>
				<p>{formData.name}</p>
				<p>{formData.address}</p>
				<p>{formData.city}</p>
				<p>{formData.zipCode}</p>
			</span>
			<span>
				{/* Need to figure out our data structure for this before rendering {formData.delivery}*/}
				{/* <div>{formData.transport ? (<p>formData.pickup</p>):(<p>formData.delivery</p>)} </div> */}
				<p>For Delivery</p>
			</span>
			<br></br>
			<table>
				<thead>
          <tr>
					  <th>Name</th>
					  <th>Cost</th>
          </tr>
				</thead>
				<tbody>
						{orderList.map((items) => (
					<tr key={items.id}>
							<TableItem items={items} />
					</tr>
						))}
				</tbody>
			</table>
			<h1>Total: ${totalCost.toFixed(2)}</h1>
			<button onClick={postCheckout}>Checkout</button>
		</div>
  );
}

export default Checkout;
