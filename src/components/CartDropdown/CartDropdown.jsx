import React from 'react';

import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/CartActions'


import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/CartSelectors';

import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {CartDropDownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonStyled} from './CartDropdown.styled'
const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<CartDropDownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>
				)}
			</CartItemsContainer>
			<CustomButtonStyled onClick={() => {
				history.push('/checkout')
				dispatch(toggleCartHidden())
			}}>GO TO CHECKOUT</CustomButtonStyled>
		</CartDropDownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
