import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
} from './reducers/orderReducers';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import {
  userRegisterReducer,
  userSigninReducer,
} from './reducers/userReducers';

//code unten verhindert das löschen der produkte wenn die seite refresht wird zusammen in cartAction.js
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer, //After PayPal order video 31
  orderMineList: orderMineListReducer, //Bestell uebersicht
});

const composeEnhanger = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhanger(applyMiddleware(thunk))
);

export default store;
