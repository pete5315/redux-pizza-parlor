import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Admin.css'

function Admin() {

    const dispatch = useDispatch();
    const orderHistory = useSelector( store => store.orderHistory)
    

    // Axios GET.
    const fetchOrderHistory = () => {
      axios.get( '/api/order')
        .then ( response => {
          dispatch( { type: 'GET_HISTORY', payload: response.data} )
        })
        .catch ( err => {
          console.log(err);
          alert(`Could not get Pizza`)
        })
    }

    useEffect( () => {
        fetchOrderHistory()
    }, [])


    return (
        <div>
            {/* background color is blue for header */}
            <div id="header">
                <header>
                    <h1>Prime Pizza Orders</h1>
                </header> 
            </div>
            <div id="Table">
               <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Time Order Placed
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Cost
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {orderHistory.map((order, i) => (
                            <tr key={i}>
                                <td >
                                    {/* person name */}
                                    {order.customer_name}            
                                </td>
                                <td>
                                    {/* time the order was placed */}
                                    {order.time}
                                </td>
                                <td>
                                    {/* Pick up or Deliver */}
                                    {order.type}
                                </td>
                                <td>
                                    {/* the total cost of the order */}
                                    ${order.total}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
            </div>
           
        </div>
    )
}

export default Admin