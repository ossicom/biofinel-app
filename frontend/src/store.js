import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
  orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
} from './reducers/orderReducers';
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from './reducers/productReducers';
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
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
  userDetails: userDetailsReducer, //User Profile
  userUpdateProfile: userUpdateProfileReducer, //Update User Profile
  userUpdate: userUpdateReducer, //Edit Users in Admin Screen
  productCreate: productCreateReducer, //Create Product AdminScreen
  productUpdate: productUpdateReducer, //UPDATE PRODUCT VID.39
  productDelete: productDeleteReducer, // Delete Product Vid40
  orderList: orderListReducer, //List Orders
  orderDelete: orderDeleteReducer, //Delete Order in Admin screen
  orderDeliver: orderDeliverReducer, //Deliver Order
  userList: userListReducer, //List Users in Admin Screen
  userDelete: userDeleteReducer, //Delete Users in Admin Screen
});

const composeEnhanger = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhanger(applyMiddleware(thunk))
);

export default store;
