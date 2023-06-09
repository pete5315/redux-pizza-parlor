import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const pizzaList = (state = [], action) => {
  if (action.type === `GET_PIZZAS`) {
    return  action.payload
  }
  return state;
};

const orderList = (state = [], action) => {
  if (action.type === `GET_ORDER`) {
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

const orderHistory = (state = [], action) => {
  if (action.type === `GET_HISTORY`) {
    return  action.payload
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    pizzaList,
    orderList,
    formData,
    orderHistory
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
