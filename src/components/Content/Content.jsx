import React from 'react';
import Branch from '../Branch';
import PageTitle from '../PageTitle';
import Commits from '../Commits';

export default function Content({ data }) {  
	return (
		<div className="content">
			<PageTitle />
			<Branch />
			<Commits data={ data }/>
		</div>
	);
}