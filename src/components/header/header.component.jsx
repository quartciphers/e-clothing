import React from 'react';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {signOutStart } from '../../redux/user/user.actions';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionsLink} from './header.styles';



const Header = ({currentUser,hidden,signOut}) => (
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
              <OptionsLink as='div' onClick={signOut}>SIGNOUT</OptionsLink>
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

});

const mapDispatchToProps = dispatch => ({
    
    signOut : ()=>dispatch(signOutStart())
     
});



export default connect(mapStateToProps,mapDispatchToProps)(Header);