import React from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

import { selectDirectorySections } from '../../redux/directory/DirectorySelector';
import { createStructuredSelector } from 'reselect';

import {DirectoryMenuContainer} from './DirectoryMenu.styled'

import { connect } from 'react-redux';

const DirectoryMenu = ({ sections }) => {
	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</DirectoryMenuContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
