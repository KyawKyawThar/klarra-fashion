import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import CheckoutItems from '../../checkout/checkout-item';

import {
  selectCartItems,
  selectCartTotal,
} from '../../reducer/cart/cartSelector';
import StripeCheckoutButton from '../../stripe-button/stripe-button';
import './checkout.scss';

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem}></CheckoutItems>
      ))}
      <div className='total'>
        <span>Total: ${total}</span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOut);
