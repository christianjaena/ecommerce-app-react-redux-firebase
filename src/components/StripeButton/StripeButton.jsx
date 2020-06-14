import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 	
		'pk_test_51Gu4KyHLGs0SeU0QbckIpI4eOz5XHkTyzoVA6tWJu2IM0c6LMrbshUJVtMyVkdItnX7ySc5It4ci1JmyHaLOC6yz00LS0Tkk9a'
	
	
	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful!')
	}
	
	return (
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
	
};

export default StripeButton;
