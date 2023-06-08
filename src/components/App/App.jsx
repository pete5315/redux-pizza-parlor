import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';


import { useEffect } from 'react';

import PizzaList from '../PizzaList/PizzaList'
import CustomerForm from '../CustomerForm/CustomerForm'
import Checkout from '../Checkout/Checkout'
import Admin from '../Admin/Admin'
import { HashRouter as Router, Route, Link } from 'react-router-dom';



function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    getPizzaData()
  })

  const getPizzaData = () =>{
    axios.get('/api/pizza')
    .then((response)=>{
      console.log(response.data);
      dispatch({type:'GET_PIZZAS', payload: response.data })
    })
    .catch((err)=>{
      console.log(err);
    })
  }




  return (

    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>

        {/* <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p> */}

        <Header />
        <Route exact path="/">
          <PizzaList />
        </Route>
        <Route exact path="/form">
          <CustomerForm />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
      </div>
    </Router>

  );
}

export default App;
