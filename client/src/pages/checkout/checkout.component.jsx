import React from 'react';
import './checkout.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {selectCartTotal} from '../../redux/cart/cart.selector';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
const CheckoutPage = ({cartItems,total})=>(

    <div className="checkout-page">
         
         <div className="checkout-header">
          <div className='header-block'>
            <span >Product</span>
          </div>
          <div className='header-block'>
            <span >Description</span>
          </div>
          <div className='header-block'>
            <span >Quantity</span>
          </div>
          <div className='header-block'>
            <span >Price</span>
          </div>
          
          <div className='header-block'>
            <span >Remove</span>
          </div>
         </div>
       {  cartItems.map(cartItem =>
           <CheckOutItem 
           key={cartItem.id}
           cartItem={cartItem}/>
        )}
        <div className='total'>
            <span>Total:${total}</span>
        </div>
        <div className='test-warning'>
          *Testing credit card
           <br />
           424242424242424242
           01/2022
           123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)


const mapStateToProps = createStructuredSelector(
 
   {  cartItems : selectCartItems,
     total : selectCartTotal
   }

)

export default connect(mapStateToProps)(CheckoutPage);