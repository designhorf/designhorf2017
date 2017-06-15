import React from 'react';
import Branch from './../../components/Branch';
import PageTitle from './../../components/PageTitle';
import Commits from './../../components/Commits';
import './Code.scss';

export default function Content({ data }) {  
	return (
		<div className="content">
			<PageTitle />
			<Branch />
			<Commits data={ data }/>
		</div>
	);
}