import React,{Component} from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';



import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';




class SignInComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e)=>{
         e.preventDefault();

         const {email,password} = this.state;
         const {emailSignInStart} = this.props;

         emailSignInStart(email, password);
        
        
    }

    handleChange=(e)=>{
      const {value ,name} = e.target;

      this.setState({[name] : value})
    }


render() {
    const {googleSignInStart} = this.props;
    

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and Password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' value={this.state.email}
                label='email'
                handleChange={this.handleChange}
                
                required/>
                 
                 <FormInput name='password' type='password' value={this.state.password}
                 label='password'
                handleChange={this.handleChange}
                 
                 required/>
                
            <div className='buttons'>
                 <CustomButton type='submit' > Sign IN </CustomButton>
                 <CustomButton type="button" onClick={googleSignInStart} isGoogleButton > Sign IN with Google </CustomButton>
            </div>
            </form>
           
        </div>
    )
}

}


const mapDispatchToProps = dispatch=> ({
     googleSignInStart : ()=> dispatch(googleSignInStart()),
     emailSignInStart : (email,password)=> dispatch(emailSignInStart({email,password})),
})


export default connect(null,mapDispatchToProps)(SignInComponent)