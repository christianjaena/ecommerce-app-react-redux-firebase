import React from 'react';

const TitleHeader = ({ title, subtitle }) => {
	return (
		<div className='title-header'>
			<h2 className='title'>{title}</h2>
			<span>{subtitle}</span>
		</div>
	);
};

export default TitleHeader;
