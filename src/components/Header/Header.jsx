import React from 'react';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionContainer,
} from './Header.styled';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/CartSelectors';
import { selectCurrentUser } from '../../redux/users/UserSelector';

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionContainer to='/shop'>
					SHOP
				</OptionContainer>
				<OptionContainer to='/'>
					CONTACT
				</OptionContainer>
				{currentUser ? (
					<OptionContainer as='div' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionContainer>
				) : (
					<OptionContainer to='/signin'>
						SIGN IN
					</OptionContainer>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropDown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
