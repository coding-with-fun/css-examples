import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FlexBoxBasic from './components/flexBox/FlexBoxBasic';
import HomePage from './components/home/HomePage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/flexbox' component={FlexBoxBasic} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
