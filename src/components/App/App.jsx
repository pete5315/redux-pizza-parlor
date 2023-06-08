import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList'
import CustomerForm from '../CustomerForm/CustomerForm'
import Checkout from '../Checkout/Checkout'
import Admin from '../Admin/Admin'
import Footer from '../Footer/Footer'
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {




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
        <Route exact path="/admin">
          <Admin />
        </Route>  
        <Footer />
      </div>
    </Router>

  );
}

export default App;
