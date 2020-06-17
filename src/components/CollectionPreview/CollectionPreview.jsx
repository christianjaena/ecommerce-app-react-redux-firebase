import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './CollectionPreview.styled'

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title.toUpperCase()}</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, index) => index < 4)
					.map((item) => {
						return <CollectionItem key={item.id} item={item} />;
					})}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
