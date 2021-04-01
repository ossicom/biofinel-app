import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.075 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className='row top'>
        <div className='col-2'>
          <ul>
            <li>
              <div className='card card-body'>
                <h2>Versand Adresse</h2>
                <p>
                  {cart.shippingAddress.fullName} <br />
                  {cart.shippingAddress.address}
                  <br />
                  {cart.shippingAddress.postalCode} {''}
                  {cart.shippingAddress.city}
                  <br />
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Bezahl Methode: </h2>
                <p>{cart.paymentMethod}</p>
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Warenkorb Übersicht</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className='row'>
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='small'
                          ></img>
                        </div>
                        <div className='min-30'>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x {item.price.toFixed(2)} Fr. = {''}
                          {item.qty * item.price}.00 Fr.
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <h2>Kosten Übersicht</h2>
              </li>
              <li>
                <div className='row'>
                  <div>Zwischen Total</div>
                  <div>{cart.itemsPrice.toFixed(2)} Fr.</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Porto</div>
                  <div>{cart.shippingPrice.toFixed(2)} Fr.</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Mwst.</div>
                  <div>{cart.taxPrice.toFixed(2)} Fr.</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>
                    <strong>Total inkl. Mwst.</strong>
                  </div>
                  <div>
                    <strong>{cart.totalPrice.toFixed(2)} Fr.</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type='button'
                  onClick={placeOrderHandler}
                  className='primary block'
                  disabled={cart.cartItems.length === 0}
                >
                  Bestellen
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
