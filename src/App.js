import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/burgerMenu/Navbar';
import TopNavbar from './components/topNavbar/TopNavbar';
import FlexBoxBasic from './components/flexBox/FlexBoxBasic';
import HomePage from './components/home/HomePage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/flexbox' component={FlexBoxBasic} />
					<Route exact path='/rightnav' component={Navbar} />
					<Route exact path='/topnav' component={TopNavbar} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
