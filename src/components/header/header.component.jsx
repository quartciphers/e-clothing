import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utlis';
const Header = ({currentUser}) => (
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
     </div>
    </div>
)

export default Header;