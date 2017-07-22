import React from 'react';
import Branch from './../../components/Branch';
import PageTitle from './../../components/PageTitle';
import Commits from './../../components/Commits';

export default function Content() {  
	const commits = [
			{
				"date": "2014-04",
				"text": "Started to learn HTML",
				"isProject": false
			},
			{
				"date": "2014-04",
				"text": "Started to learn CSS",
				"isProject": false
			},
			{
				"date": "2014-05",
				"text": "Started to learn JavaScript",
				"isProject": false
			},
			{
				"date": "2014-05",
				"text": "Started to learn Git",
				"isProject": false
			},
			{
				"date": "2014-06",
				"text": "Deployed 1st project",
				"isProject": true
			},
			{
				"date": "2014-06",
				"text": "Started to use npm+grunt",
				"isProject": false
			},
			{
				"date": "2014-08",
				"text": "Started to learn jQuery",
				"isProject": false
			},
			{
				"date": "2014-10",
				"text": "Started to use Twig",
				"isProject": false
			},
			{
				"date": "2014-12",
				"text": "RPD",
				"isProject": true
			},
			{
				"date": "2015-02",
				"text": "Started to use Gulp",
				"isProject": false
			},
			{
				"date": "2015-04",
				"text": "Created blog w/ jekyll",
				"isProject": true
			},
			{
				"date": "2015-07",
				"text": "Created 1st server w/ Node.js",
				"isProject": false
			},
			{
				"date": "2015-07",
				"text": "Started to use Express.js",
				"isProject": false
			},
			{
				"date": "2015-11",
				"text": "Started to use Handlebar.js",
				"isProject": false
			},
			{
				"date": "2016-04",
				"text": "Started to use Heroku",
				"isProject": false
			},
			{
				"date": "2016-09",
				"text": "Started to learn ES6",
				"isProject": false
			},
			{
				"date": "2016-09",
				"text": "Started to learn Babel",
				"isProject": false
			},
			{
				"date": "2016-12",
				"text": "Experimented w/ webpack",
				"isProject": false
			},
			{
				"date": "2017-02",
				"text": "Started to use yarn",
				"isProject": false
			},
			{
				"date": "2017-04",
				"text": "Deployed PRV project",
				"isProject": true
			},
			{
				"date": "2017-05",
				"text": "Started to learn React",
				"isProject": false
			}
	];

	return (
		<div className="content">
			<PageTitle />
			<Branch />
			<Commits data={ commits }/>
		</div>
	);
}