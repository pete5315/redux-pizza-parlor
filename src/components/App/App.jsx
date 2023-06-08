import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    getPizzaData()
  })

  const getPizzaData = () =>{
    axios.get('/')
    .then((response)=>{
      console.log(response.data);
      dispatch({type:'GET_PIZZAS', payload: response.data })
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='App'>
      <Header />
      <img src='images/pizza_photo.png' />


    </div>
  );
}

export default App;
