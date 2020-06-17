import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/CartActions';

import {
	CollectionItemContainer,
	ImageContainer,
	CustomButtonContainer,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
} from './CollectionItem.styled';


const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<ImageContainer imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<CustomButtonContainer onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButtonContainer>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
