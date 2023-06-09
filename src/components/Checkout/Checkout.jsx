function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <span>
        <p>John Smith</p>
      </span>
      <span>
        <p>For Delivery</p>
      </span>
      <br></br>
      <table>
        <thead>
          <th>Name</th>
          <th>Cost</th>
        </thead>
        <tbody>
          <tr>
            <td>Onomonapizza</td>
            <td>14.99</td>
          </tr>
          <tr>
            <td>Pepperoni</td>
            <td>13.99</td>
          </tr>
        </tbody>
      </table>
      <h1>Total: 28.98</h1>
      <button>Checkout</button>
    </div>
  );
}

export default Checkout;
