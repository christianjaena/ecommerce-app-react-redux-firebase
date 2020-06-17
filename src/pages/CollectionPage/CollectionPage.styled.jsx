import styled from 'styled-components';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleContainer = styled.h1`
	font-size: 38px;
	margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
`;

export const CollectionItemStyled = styled(CollectionItem)`
	margin-bottom: 30px;
`
