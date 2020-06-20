import React from 'react';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/FirebaseUtils';
import { updateCollections } from '../../redux/shop/ShopActions';
import WithSpinner from '../../components/withSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		// this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
		// 	async snapshot => {
		// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 		updateCollections(collectionsMap);
		// 		this.setState({loading: false});
		// 	}
		// );

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
