import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utlis';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';

const Header = ({currentUser,hidden}) => (
    <div className="header">
     <Link to="/" className="logo-container">
      <Logo className="logo"/>
     </Link>
     <div className="options">
         <Link to="/shop" className="option">
           SHOP
          </Link>   
          <Link to="/shop" className="option">
          CONTACT
          </Link>  
          {
              currentUser ?
              <div className="option" onClick={()=> auth.signOut()}>SIGNOUT</div>
              :
              <Link className="option" to='/signin'>SIGN IN</Link>
          } 
          <CartIcon
          
          />
     </div>
    {
    
    hidden ? null 
    
    :
    
    <CartDropdown/>
    
    }
    </div>
);

const mapStateToProps = createStructuredSelector({

    currentUser : selectCurrentUser,
    hidden:selectCartHidden,

})



export default connect(mapStateToProps)(Header);