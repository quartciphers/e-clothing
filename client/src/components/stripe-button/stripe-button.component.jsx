import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';




const StripeCheckoutButton = ({price}) => {

   const priceForStripe = price *100 ;
   const publishKey = 'pk_test_51JWvQCSBSY1c4CcksHEykmbvMCHM3OicsAMTIl84eWQNIgxGMO1LsZUi01PDcekYECXTx8e7AEBAinM8Q8aImP2300nqx3vaLP';

  const onToken = token => {
       axios({
           url:'payment',
           method:'post',
           data:{
               amount: priceForStripe,
               token : token
           }
       }).then(response => {
           alert('Payment Successful');
       }).catch(error => {
           console.log('Payment error',error);
           alert('Payment Failed');
       });


    }

   return (
       <StripeCheckout
        
        label='Pay Now'
        name='e-clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total price$${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        tokens={onToken}
        stripeKey={publishKey}
        
       />
   )


}


export default StripeCheckoutButton;