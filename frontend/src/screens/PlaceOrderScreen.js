import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.0 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className='row top'>
        <div className='col-2'>
          <ul>
            <li>
              <div className='card card-body'>
                <h2>Empfänger Adresse</h2>
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
                  <div>Versandkosten</div>
                  <div>{cart.shippingPrice.toFixed(2)} Fr.</div>
                </div>
              </li>
              <li>
                <div className='row'></div>
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
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant='danger'>{error}</MessageBox>}
            </ul>
          </div>{' '}
          <Link to='/'>
            <h4>Back to Shopping</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
