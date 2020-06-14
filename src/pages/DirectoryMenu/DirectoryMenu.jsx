import React from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import './DirectoryMenu.scss';

import { selectDirectorySections } from '../../redux/directory/DirectorySelector';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

const DirectoryMenu = ({ sections }) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
