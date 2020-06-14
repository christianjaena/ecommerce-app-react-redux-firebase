import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { Route } from 'react-router-dom';
const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</div>
	);
};

export default ShopPage;
