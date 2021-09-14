import React,{useState} from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';



const SignInComponent = ({googleSignInStart,emailSignInStart}) => {

  const[userCredentials,setCredentials] = useState({email:'',password:'',});
  const {email,password} = userCredentials;

  const   handleSubmit = async (e)=>{
         e.preventDefault();
         emailSignInStart(email, password);
    }

  const   handleChange=(e)=>{
      const {value ,name} = e.target;

      setCredentials({...userCredentials,[name] : value})
    }
    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email}
                label='email'
                handleChange={handleChange}
                
                required/>
                 
                 <FormInput name='password' type='password' value={password}
                 label='password'
                handleChange={handleChange}
                 
                 required/>
                
            <div className='buttons'>
                 <CustomButton type='submit' > Sign IN </CustomButton>
                 <CustomButton type="button" onClick={googleSignInStart} isGoogleButton > Sign IN with Google </CustomButton>
            </div>
            </form>
           
        </div>
    )

}


const mapDispatchToProps = dispatch=> ({
     googleSignInStart : ()=> dispatch(googleSignInStart()),
     emailSignInStart : (email,password)=> dispatch(emailSignInStart({email,password})),
})


export default connect(null,mapDispatchToProps)(SignInComponent)