
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component'
import {Switch,Route} from 'react-router-dom'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
