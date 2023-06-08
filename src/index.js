import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const pizzaList = (state = [], action) => {
  if (action.type === `GET_PIZZAS`) {
    return  action.payload 
  }
  return state;
};

const orderList = (state = [], action) => {
  if (action.type === `GET_ORDERS`) {
    return  action.payload 
  }
  return state;
};

const formData = (state = [], action) => {
  if (action.type === `GET_FORM`) {
    return  action.payload 
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    pizzaList,
    orderList,
    formData
  }),
  applyMiddleware(logger),
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
