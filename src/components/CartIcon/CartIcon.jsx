import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/CartActions';
import { selectCartItemsCount } from '../../redux/cart/CartSelectors';
import { createStructuredSelector } from 'reselect';

import {
	CartIconContainer,
	ShoppingIconStyle,
	ItemCountContainer,
} from './CartIcon.styled';

const CartIcon = ({ itemCount, dispatch }) => {
	return (
		<CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIconStyle />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartIconContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
