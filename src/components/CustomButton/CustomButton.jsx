import React from 'react';
import './CustomButton.scss';
const CustomButton = ({ children,isGoogleSignIn, inverted, ...otherButtonProps }) => {
	return (
		<button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherButtonProps}>
			{children}
		</button>
	);
};

export default CustomButton;
