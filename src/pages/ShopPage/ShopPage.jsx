import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				{
					collections.map(({ id, ...otherCollectionsProps }) => {
						return (
							<CollectionPreview key={id} {...otherCollectionsProps} />
						)
					})
				}
			</div>
		);
	}
}

export default ShopPage;
