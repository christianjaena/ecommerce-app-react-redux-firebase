import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/ShopSelector';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = ({ collections }) => (
	<div className='collection-overview'>
		{collections.map(({ id, ...otherCollectionsProps }) => {
			return <CollectionPreview key={id} {...otherCollectionsProps} />;
		})}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
