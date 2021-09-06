import React from 'react';
import './checkout-item-style.scss';
import {connect} from 'react-redux';

import {removeItem} from '../../redux/cart/cart.action';
import {addItem} from '../../redux/cart/cart.action';
import {deleteItem} from '../../redux/cart/cart.action';

const CheckOutItem = ({cartItem , clearItem , addItem , deleteItem})=>{
    
  const {name,imageUrl,price,quantity} = cartItem;
    
  return ( <div className='checkout-item'>
        <div className='image-container'>
          <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={()=> deleteItem(cartItem)}>&#10094;</div>
          <span className='value'>{quantity}</span>
          <div className='arrow'onClick={()=> addItem(cartItem)}>&#10095;</div>
          </span>
        <span className='price'>{price}</span>
        <div className='remove-button'
        onClick={()=> clearItem(cartItem)}
        
        >&#10005;</div>

       
    </div>)
}

const mapDispatchToProps = (dispatch) => ({

   clearItem: item => dispatch(removeItem(item)),
   addItem: (item) => dispatch(addItem(item)),
   deleteItem: item =>dispatch(deleteItem(item))

})


export default connect(null,mapDispatchToProps)(CheckOutItem) ;