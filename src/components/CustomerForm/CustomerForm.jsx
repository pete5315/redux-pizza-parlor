import { useState } from "react";
import { useDispatch } from "react-redux";

function CustomerForm() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");

    dispatch = useDispatch();
    const handleRadio = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({type: "GET_FORM", payload: {name, address, city, zipCode, pickup, delivery}})
        
        setName("");
        setAddress("");
        setCity("");
        setZipCode("");
    }   


    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
            <br></br><br></br>
            <input placeholder="Street Address" type="text" value={address} onChange={(event) => setAddress(event.target.value)}></input>
            <br></br><br></br>
            <input placeholder="City" type="text" value={city} onChange={(event) => setCity(event.target.value)}></input>
            <br></br><br></br>
            <input placeholder="Zip Code" type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)}></input>
            <br></br><br></br>
            <input type="radio" value="Pickup" checked={this.state.selectedOption === "Pickup"} onChange={handleRadio}></input>
            <label htmlFor="pickup-btn">PICKUP</label>
            <br></br><br></br>
            <input type="radio" value="Delivery" checked={this.state.selectedOption === "Delivery"} onChange={handleRadio}></input>
            <label htmlFor="delivery-btn">DELIVERY</label>
            <br></br><br></br>
            <button type="submit">Next</button>
        </form>
        </>
    )

};

export default CustomerForm;
