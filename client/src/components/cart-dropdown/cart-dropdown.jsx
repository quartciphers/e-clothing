import React from 'react';

import {connect} from 'react-redux';
import { withRouter } from 'react-router';

import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import { CartDropdownContainer,CartItemsContainer,CartDropdownButton,EmptyMessageContainer } from './cart-dropdown-styles';

const CartDropdown = ({cartItems ,history,dispatch}) => (
    <CartDropdownContainer >
        <CartItemsContainer >

            {

            cartItems.length 
            ?
           ( cartItems.map(cartItem =>
                
              (  <CartItem key={cartItem.id} item={cartItem}/>)
                
                ))

                :(
                    <EmptyMessageContainer >Your cart is Empty ! </EmptyMessageContainer>
                )
                
                
                
                
                }
              
        </CartItemsContainer>
        <CartDropdownButton onClick={()=>{ 
            
            history.push('/checkout')
            dispatch(toggleCartHidden())
            
            }}>Go To CheckOut</CartDropdownButton>

    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));