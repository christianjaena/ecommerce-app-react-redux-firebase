import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
