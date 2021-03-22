import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: sign in action
  };
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Kunden Anmeldung</h1>
        </div>
        <div>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            id='email'
            placeholder='Enter email'
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter password'
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className='primary' type='submit'>
            Einloggen
          </button>
        </div>
        <div>
          <label />
          <div>
            Neuer Kunde? <Link to='/register'>Konto erstellen</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
