import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { withRouter } from 'react-router';
import Navigation from '../Navigation';  
import Home from './../../pages/Home';
import Design from './../../pages/Design';
import Code from './../../pages/Code';
import './App.scss';

export default function App ({ data }) {  
  return (
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route exact path='/' component={ Home } />
					<Route exact path='/design' component={ Design } />
					<Route exact path='/code' component={ () => 
						<Code data={ data } /> }
					/>
				</Switch>
			</div>
		</BrowserRouter>
  );
}