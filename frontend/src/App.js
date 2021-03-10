import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header class='navigation row'>
          <div>
            <a className='brand' href='/'>
              biofinel
            </a>
          </div>
          <div className='button'>
            <a href='haselnuesse'>Haselnüsse</a>
            <a href='oliven'>Oliven</a>
            <a href='tuerkischer-honig'>Honig</a>
            <a href='oliven oel'>Oliven Öl</a>
          </div>
          <div>
            <a href='/card'>Warenkorb</a>
            <a href='/signin'>Anmelden</a>
          </div>
        </header>
        <main>
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
