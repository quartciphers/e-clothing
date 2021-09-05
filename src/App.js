import React,{ Component} from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component'
import {Switch,Route} from 'react-router-dom'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utlis';
import {createUserProfileDocument} from './firebase/firebase.utlis'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

class App extends Component {
 

 unsubricbeFromAuth = null;


  componentDidMount() {
    const {setCurrentUser} = this.props;
   
   this.unsubricbeFromAuth = auth.onAuthStateChanged(async userAuth =>{
     
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
    
      userRef.onSnapshot(snapShot =>{
        setCurrentUser({
         

          id : snapShot.id,
          ...snapShot.data()  
      })
     
   
    
    })
      
    }
  
    setCurrentUser(userAuth);
    
    })

  }

  componentWillUnmount() {
    this.unsubricbeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
       
      </div>
    );
  }
  
  
}

const mapDispatchToProps = (dispatch) =>({
      
     setCurrentUser: user => dispatch(setCurrentUser(user))

})


export default connect (null,mapDispatchToProps) (App);
