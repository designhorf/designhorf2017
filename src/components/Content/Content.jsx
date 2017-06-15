import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../../pages/Home';
import Design from './../../pages/Design';
import Code from './../../pages/Code';

export default function Content({ data }) {  
	return (
		<Switch>
			<Route exact path='/' component={ Home } />
			<Route path='/design' component={ Design } />
			<Route path='/code' component={ () => 
				<Code data={ data } /> }
			/>
		</Switch>
	);
}