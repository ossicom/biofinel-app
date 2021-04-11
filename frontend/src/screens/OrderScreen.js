import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false); //paypal
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  //After PayPal order video 31
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  //paypal fertig
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    //paypal
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay, successDeliver]);
  //After Paypal order
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant='danger'>{error}</MessageBox>
  ) : (
    <div>
      <h1> Bestellnummer {order._id}</h1>
      <div className='row top'>
        <div className='col-2'>
          <ul>
            <li>
              <div className='card card-body'>
                <h2>Empfänger Adresse</h2>
                <p>
                  {order.shippingAddress.fullName} <br />
                  {order.shippingAddress.address}
                  <br />
                  {order.shippingAddress.postalCode} {''}
                  {order.shippingAddress.city}
                  <br />
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant='success'>
                    Geliefert an {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Nicht Geliefert!</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>
                  Bezahl Methode:
                  <br />
                  <br />
                </h2>
                {order.paymentMethod}
                {order.isPaid ? (
                  <MessageBox variant='success'>
                    Bezahlt mit {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant='danger'>Nicht Bezahlt!</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className='card card-body'>
                <h2>Bestellte Artikel</h2>
                <ul>
                  {order.orderItems.map((item) => (
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
                          {item.qty} x {item.price.toFixed(2)} Fr. ={' '}
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
                <h2>Bestellübersicht</h2>
              </li>
              <li>
                <div className='row'>
                  <div>Artikel</div>
                  <div>{order.itemsPrice.toFixed(2)} Fr.</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Versandkosten</div>
                  <div>{order.shippingPrice.toFixed(2)} Fr.</div>
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
                    <strong>
                      {order.totalPrice.toFixed(2)}
                      {''} Fr.
                    </strong>
                  </div>
                </div>
              </li>
              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant='danger'>{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant='danger'>{errorDeliver}</MessageBox>
                  )}
                  <button
                    type='button'
                    className='primary block'
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
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
