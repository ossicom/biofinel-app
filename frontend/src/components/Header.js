import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { signout } from '../actions/userActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Product from './Product';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productList = useSelector((state) => state.productList);
  const { loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <header className='navigation row'>
      <div>
        <Link className='brand' to='/'>
          biofinel
        </Link>
      </div>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <ul>
            <li>haselnüsse</li>
            <li>Oliven-Öle</li>
            <li>Honig</li>
            <li>Oliven</li>
          </ul>
        )}
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
            <Link to='#'>
              Willkommen {''}
              {userInfo.name} <i className='fa fa-caret-down'></i>{' '}
            </Link>
            <ul className='dropdown-content'>
              <li>
                <Link to='/profile'>Einstellungen</Link>
              </li>
              <li>
                <Link to='/orderhistory'>Bestell Übersicht</Link>
              </li>
              <li>
                <Link to='#signout' onClick={signoutHandler}>
                  Abmelden
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to='/signin'>Anmelden</Link>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className='dropdown'>
            <Link to='#admin'>
              Admin {''}
              <i className='fa fa-caret-down'></i>
            </Link>
            <ul className='dropdown-content'>
              <li>
                <Link to='/productlist'>Produkte</Link>
              </li>
              <li>
                <Link to='/orderlist'>Bestellungen</Link>
              </li>
              <li>
                <Link to='/userlist'>Users</Link>
              </li>
              <li>
                {' '}
                <Link to='#signout' onClick={signoutHandler}>
                  Abmelden
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
