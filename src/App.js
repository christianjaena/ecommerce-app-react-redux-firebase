import React from 'react';
import './App.css';

import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import Checkout from './pages/Checkout/Checkout';
import Header from './components/Header/Header';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/UsersActions';
import { selectCurrentUser } from './redux/users/UserSelector';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import { createStructuredSelector } from 'reselect';
class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={Checkout} />

					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUp />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
