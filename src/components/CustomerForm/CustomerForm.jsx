function CustomerForm() {

    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <form>
            <input placeholder="Name" type="text"></input>
            <br></br><br></br>
            <input placeholder="Street Address" type="text"></input>
            <br></br><br></br>
            <input placeholder="City" type="text"></input>
            <br></br><br></br>
            <input placeholder="Zip Code" type="text"></input>
            <br></br><br></br>
            <input type="radio" id="pickup-btn"></input>
            <label htmlFor="pickup-btn">PICKUP</label>
            <br></br><br></br>
            <input type="radio"></input>
            <label htmlFor="pickup-btn">DELIVERY</label>
        </form>
        </>
    )

};

export default CustomerForm;
