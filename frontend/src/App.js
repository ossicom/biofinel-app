import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
              Einkaufswagen
              {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}
            </Link>
            <Link to='/signin'>Anmelden</Link>
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
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
