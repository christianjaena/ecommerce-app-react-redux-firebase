import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/CartActions';
import { selectCartItemsCount } from '../../redux/cart/CartSelectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ itemCount, dispatch }) => {
	return (
		<div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
