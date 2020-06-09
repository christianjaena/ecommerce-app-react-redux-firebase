import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
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
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
