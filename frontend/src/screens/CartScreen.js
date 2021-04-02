import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  //löschen eines produkts
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className='row top'>
      <div className='col-2'>
        <h1>Ihr Warenkorb</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Ihr Warenkorb ist leer!
            <Link to='/'>
              <h4>Back to Shopping</h4>
            </Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
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
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>{' '}
                    Stück a
                  </div>
                  <div>{item.price.toFixed(2)} Fr.</div>
                  <button
                    type='button'
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    löschen
                  </button>{' '}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='col-1'>
        <div className='card card-body'>
          <ul>
            <li>
              <h2>
                Zwischensumme
                <br />
                <br /> ({cartItems.reduce((a, c) => a + c.qty, 0)}) {''}
                Produkt (e) <br />
                <br />
                Total{''} = {''}
                {cartItems
                  .reduce((a, c) => a + c.price * c.qty, 0)
                  .toFixed(2)}{' '}
                Fr.
              </h2>
            </li>
            <li>
              <button
                type='button'
                onClick={checkoutHandler}
                className='primary block'
                disabled={cartItems.length === 0}
              >
                Weiter
              </button>
            </li>
          </ul>
        </div>
        <Link to='/'>
          <h4>Back to Shopping</h4>
        </Link>
      </div>
    </div>
  );
}
