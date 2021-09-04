import React,{Component}from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth , createUserProfileDocument} from '../../firebase/firebase.utlis';


class SignUp extends Component {

    constructor(){
        super();
        this.state={

           displayName: '',
           email: '',
           password: '',
           confirmPassword: '',

        }
    }

  

    handleSubmit = async (e) => {

        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {

            alert('Password Dont match');
            return;
          
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password);

           await  createUserProfileDocument(user,{displayName})
             
           this.setState({

            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
 
         })
        }
        catch(err) {
            console.log(err.message);
        }

    }


    handleChange = (e) => {

        const {name,value} = e.target;

         this.setState({[name]:value});


    }
  render(){
      const {displayName, email, password, confirmPassword} = this.state;
      return(
          <div className="sign-up">
            <h2 className='title'> I do not Have a Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form className="sign-up" onSubmit={this.handleSubmit}>
                 <FormInput 
                  
                  type ='text'
                  name='displayName'
                  value = {displayName}
                  onChange={this.handleChange}
                  label='Display Name'
                  required
                 
                 />
                 <FormInput 
                  
                  type ='text'
                  name='email'
                  value = {email}
                  onChange={this.handleChange}
                  label='Email'
                  required
                 
                 /><FormInput 
                  
                 type ='password'
                 name='password'
                 value = {password}
                 onChange={this.handleChange}
                 label='password'
                 required
                
                /><FormInput 
                  
                type ='password'
                name='confirmPassword'
                value = {confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
               
               />
               <CustomButton
                type ='submit'>
                    Create Account 
              </CustomButton>
            </form>
          </div>
      )
  }

}


export default SignUp;