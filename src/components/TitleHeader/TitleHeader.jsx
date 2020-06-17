import React from 'react';
import {TitleHeaderContainer} from './TitleHeader.styled'

const TitleHeader = ({ title, subtitle }) => {
	return (
		<TitleHeaderContainer>
			<h2 className='title'>{title}</h2>
			<span>{subtitle}</span>
		</TitleHeaderContainer>
	);
};

export default TitleHeader;
