import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='navigation row'>
          <div>
            <Link className='brand' to='/'>
              biofinel
            </Link>
          </div>
          <div className='button'>
            <Link to='product/1'>Haselnüsse</Link>
            <Link to='product/2'>Oliven</Link>
            <Link to='product/3'>Honig</Link>
            <Link to='product/4'>Oliven Öl</Link>
          </div>
          <div>
            <Link to='/cart'>
              Warenkorb
              {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className='dropdown'>
                <Link to='#'>Willkommen {userInfo.name}</Link>
                <Link to='#signout' onClick={signoutHandler}>
                  Ausloggen
                </Link>
              </div>
            ) : (
              <Link to='/signin'>Anmelden</Link>
            )}
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/signin' component={SigninScreen}></Route>
          <Route path='/register' component={RegisterScreen}></Route>
          <Route path='/shipping' component={ShippingAddressScreen}></Route>
          <Route path='/payment' component={PaymentMethodScreen}></Route>
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
