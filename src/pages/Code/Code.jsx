import React from 'react';
import Branch from './../../components/Branch';
import PageTitle from './../../components/PageTitle';
import Commits from './../../components/Commits';
const commits = require('./../../../config/index').commits;

export default function Code() {  
	return (
		<div className="content">
			<PageTitle />
			<Branch />
			<Commits data={ commits }/>
		</div>
	);
}