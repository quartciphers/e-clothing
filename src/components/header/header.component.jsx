import React from 'react';

import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utlis';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';


import {HeaderContainer,LogoContainer,OptionsContainer,OptionsLink} from './header.styles';



const Header = ({currentUser,hidden}) => (
    <HeaderContainer>
     <LogoContainer to='/'>
      <Logo />
     </LogoContainer>
     <OptionsContainer>
        <OptionsLink to="/shop" >
           SHOP
        </OptionsLink>   
         <OptionsLink to="/shop" >
           CONTACT
         </OptionsLink>  
          {
              currentUser ?
              <OptionsLink as='div' onClick={()=> auth.signOut()}>SIGNOUT</OptionsLink>
              :
              <OptionsLink  to='/signin'>SIGN IN</OptionsLink>
          } 
          <CartIcon/>
     </OptionsContainer>
    {
    
    hidden ? null 
    
    :
    
    <CartDropdown/>
    
    }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({

    currentUser : selectCurrentUser,
    hidden:selectCartHidden,

})



export default connect(mapStateToProps)(Header);