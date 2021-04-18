import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <header className='navigation row'>
      <div>
        <Link className='brand' to='/'>
          biofinel
        </Link>
      </div>
      <div>
        <Link to='/product/:id'>Haselnüsse</Link>
        <Link to='/product/2'>Oliven</Link>
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
