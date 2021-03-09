import React from 'react';
import data from './data';
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
              <div key={product._id} className='card'>
                <a href={`/product/${product._id}`}>
                  <img
                    className='medium'
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className='card-body'>
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className='price'>${product.price}</div>
                </div>
              </div>
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
