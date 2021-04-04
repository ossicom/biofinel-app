import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
  };
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Benutzer Profil</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor='name'>Vor und Nachnahme</label>
              <input
                id='name'
                type='text'
                placeholder='Vor und Nachname'
                value={user.name}
              ></input>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='Enter email'
                value={user.email}
              ></input>
            </div>
            <div>
              <label htmlFor='password'>Passwort</label>
              <input
                id='password'
                type='password'
                placeholder='Enter password'
              ></input>
            </div>
            <div>
              <label htmlFor='confirmPassword'>Passwort bestätigen</label>
              <input
                id='confirmPassword'
                type='password'
                placeholder='Enter confirm password'
              ></input>
            </div>
            <div>
              <label />
              <button className='primary' type='submit'>
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
