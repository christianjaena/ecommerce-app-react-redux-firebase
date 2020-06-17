import React from 'react';

import { connect } from 'react-redux';
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/CartActions';

import {
	CheckoutItemContainer,
	ImageContainer,
	NameContainer,
	QuantityContainer,
	ArrowContainer,
	ValueContainer,
	PriceContainer,
	RemoveButtonContainer,
} from './CheckoutItem.styled';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item' />
			</ImageContainer>
			<NameContainer >{name}</NameContainer>
			<QuantityContainer>
				<ArrowContainer onClick={() => removeItem(cartItem)}>
					&#10094;
				</ArrowContainer>
				<ValueContainer>{quantity}</ValueContainer>
				<ArrowContainer onClick={() => addItem(cartItem)}>
					&#10095;
				</ArrowContainer>
			</QuantityContainer>
			<PriceContainer>${price}</PriceContainer>
			<RemoveButtonContainer onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
