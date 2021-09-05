import React from 'react';
import './cart-dropdown-style.scss';
import CustomButton from '../custom-button/custom-button.component';



const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">

            <CustomButton>Go To CheckOut</CustomButton>

        </div>

    </div>
);

export default CartDropdown;