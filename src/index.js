import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';


const pizzaList = (state = [], action) => {
  // TODO: Save all pizza options from the server
  if (action.type === `GET_PIZZAS`) {
    // this will replace the product list, payload is array of all products
    return  action.payload 
  }
  return state;
};

const orderList = (state = [], action) => {
  // TODO: Save all pizza options from the server
  if (action.type === `GET_ORDERS`) {
    // this will replace the product list, payload is array of all products
    return  action.payload 
  }
  return state;
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider>
        <App />
        </Provider>
    </React.StrictMode>
);
