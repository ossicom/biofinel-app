import React from 'react';
import data from './data';
import Product from './components/Product';
function App() {
  return (
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
        <div>
          <div className='row center'>
            {data.products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </main>
      <footer className='footer'>
        <p>All right reserved</p>
      </footer>
    </div>
  );
}

export default App;
