import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminRoute from './components/AdminRoute';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='navigation row'>
          <Header />
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen} exact></Route>
          <Route
            path='/product/:id/edit'
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path='/signin' component={SigninScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/shipping' component={ShippingAddressScreen}></Route>
          <Route path='/payment' component={PaymentMethodScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path='/order/:id' component={OrderScreen}></Route>
          <Route path='/orderhistory' component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path='/profile'
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path='/productlist'
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path='/orderlist'
            component={OrderListScreen}
          ></AdminRoute>
          <AdminRoute path='/userlist' component={UserListScreen}></AdminRoute>
          <AdminRoute
            path='/user/:id/edit'
            component={UserEditScreen}
          ></AdminRoute>
          <Route path='/' component={HomeScreen} exact></Route>
        </main>
        <footer className='footer'>
          <p>All right reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
