import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {

   const priceForStripe = price *100 ;
   const publishKey = 'pk_test_51JWvQCSBSY1c4CcksHEykmbvMCHM3OicsAMTIl84eWQNIgxGMO1LsZUi01PDcekYECXTx8e7AEBAinM8Q8aImP2300nqx3vaLP';

  const onToken = token => {
        console.log(token);
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