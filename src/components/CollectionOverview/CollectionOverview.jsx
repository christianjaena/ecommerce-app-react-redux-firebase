import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/ShopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

import {CollectionOverviewContainer} from './CollectionOverview.styled'

const CollectionOverview = ({ collections }) => (
	<CollectionOverviewContainer>
		{collections.map(({ id, ...otherCollectionsProps }) => {
			return <CollectionPreview key={id} {...otherCollectionsProps} />;
		})}
	</CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
