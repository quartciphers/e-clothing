import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utlis';
import {connect} from 'react-redux';

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
);

const mapStateToProps =(state)=>({

    currentUser: state.user.currentUser

})



export default connect(mapStateToProps)(Header);