import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className='row checkout-steps'>
      <div className={props.step1 ? 'active' : ''}>Einloggen</div>
      <div className={props.step2 ? 'active' : ''}>Versand Adresse</div>
      <div className={props.step3 ? 'active' : ''}>Bezahlung</div>
      <div className={props.step4 ? 'active' : ''}>Bestellung aufgeben</div>
    </div>
  );
}
