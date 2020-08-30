import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/burgerMenu/Navbar';
import TopNavbar from './components/topNavbar/TopNavbar';
import FlexBoxBasic from './components/flexBox/FlexBoxBasic';
import HomePage from './components/home/HomePage';
import VariableFormFields from './components/variableForm/VariableFormFields';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/flexbox' component={FlexBoxBasic} />
					<Route exact path='/rightnav' component={Navbar} />
					<Route exact path='/topnav' component={TopNavbar} />
					<Route exact path='/varform' component={VariableFormFields} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
