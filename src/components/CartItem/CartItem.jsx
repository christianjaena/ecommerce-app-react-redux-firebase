import React from 'react';

import {CartItemContainer, ItemDetailsContainer, NameContainer} from './CartItem.styled'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<img src={imageUrl} alt='item' />
			<ItemDetailsContainer>
				<NameContainer>{name}</NameContainer>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
};

export default CartItem;
