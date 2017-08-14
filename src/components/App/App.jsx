import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';  
import Home from './../../pages/Home';
import Design from './../../pages/Design';
import Code from './../../pages/Code';
import './App.scss';

export default function App({ data }) {  
  return (
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
  );
}