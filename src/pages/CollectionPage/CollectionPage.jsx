import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/ShopSelector';
import {
	CollectionPageContainer,
	TitleContainer,
	ItemsContainer,
	CollectionItemStyled,
} from './CollectionPage.styled';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>
				{items.map(item => (
					<CollectionItemStyled key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
