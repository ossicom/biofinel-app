import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <div>
          <div className='row top'>
            <div className='col-2'>
              <img
                className='large'
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className='col-1'>
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <h2>{product.price}</h2>
                </li>
                <li>
                  <h2>{product.description}</h2>
                </li>
              </ul>
            </div>
            <div className='col-1'>
              <div className='card card-body'>
                <ul>
                  <li>
                    <div className='row'>
                      <div>
                        <h2>Preis</h2>
                      </div>
                      <div className='price'>{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className='row'>
                      <div>
                        <h2>Status</h2>
                      </div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className='success'>Auf Lager</span>
                        ) : (
                          <span className='danger'>Nicht mehr verfügbar!</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className='primary block'>Ins Warenkorb</button>
                  </li>
                </ul>
              </div>
              <Link to='/'>
                <h5>Back to result</h5>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
