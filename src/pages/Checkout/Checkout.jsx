import React from 'react';
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	TestWarningContainer,
} from './Checkout.styled';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/CartSelectors';

const Checkout = ({ cartItems, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<TotalContainer>
				<span>TOTAL: ${total}</span>
			</TotalContainer>
			<TestWarningContainer>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: Any future date - CVV: Any 3 digits
			</TestWarningContainer>

			<StripeButton price={total} />
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
