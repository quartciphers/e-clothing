import React,{useState}from 'react';
import './sign-up.styles.scss';

import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {signUpStart} from '../../redux/user/user.actions';


const  SignUp = ({signUpStart})=>  {

  const[userCredentials,setCredentials]= useState({
    displayName:'',
    email: '', 
    password: '',
    confirmPassword: '',
});
const {displayName, email, password, confirmPassword} = userCredentials;
  

   const handleSubmit = async (e) => {

        e.preventDefault();
       
       

        if(password !== confirmPassword) {

            alert('Password Dont match');
            return;
        }
        signUpStart({displayName, email, password});
     
    }


   const  handleChange = (e) => {

        const {name,value} = e.target;

        setCredentials({...userCredentials,[name]:value});


    }
  
     
      return(
          <div className="sign-up">
            <h2 className='title'> I do not Have a Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form className="sign-up" onSubmit={handleSubmit}>
                 <FormInput 
                  
                  type ='text'
                  name='displayName'
                  value = {displayName}
                  onChange={handleChange}
                  label='Display Name'
                  required
                 
                 />
                 <FormInput 
                  
                  type ='text'
                  name='email'
                  value = {email}
                  onChange={handleChange}
                  label='Email'
                  required
                 
                 /><FormInput 
                  
                 type ='password'
                 name='password'
                 value = {password}
                 onChange={handleChange}
                 label='password'
                 required
                
                /><FormInput 
                  
                type ='password'
                name='confirmPassword'
                value = {confirmPassword}
                onChange={handleChange}
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




const mapDispatchToProps = dispatch => ({

    signUpStart : userCredentials => dispatch(signUpStart(userCredentials))

});


export default connect(null, mapDispatchToProps) (SignUp);