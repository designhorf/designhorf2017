import React from 'react';
import Branch from './../../components/Branch';
import PageTitle from './../../components/PageTitle';
import Commits from './../../components/Commits';
import './Code.scss';

export default function Content() {  
	const commits = [
			{
				// "date": "2014-04-01",
				"year": 2014,
				"month": "April",
				"text": "Started to learn HTML",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "April",
				"text": "Started to learn CSS",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "May",
				"text": "Started to learn JavaScript",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "May",
				"text": "Started to learn Git",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "June",
				"text": "Deployed 1st project",
				"isProject": true
			},
			{
				"year": 2014,
				"month": "June",
				"text": "Started to use npm+grunt",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "August",
				"text": "Started to learn jQuery",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "October",
				"text": "Started to use Twig",
				"isProject": false
			},
			{
				"year": 2014,
				"month": "December",
				"text": "RPD",
				"isProject": true
			},
			{
				"year": 2015,
				"month": "February",
				"text": "Started to use Gulp",
				"isProject": false
			},
			{
				"year": 2015,
				"month": "April",
				"text": "Created blog w/ jekyll",
				"isProject": true
			},
			{
				"year": 2015,
				"month": "July",
				"text": "Created 1st server w/ Node.js",
				"isProject": false
			},
			{
				"year": 2015,
				"month": "July",
				"text": "Started to use Express.js",
				"isProject": false
			},
			{
				"year": 2015,
				"month": "November",
				"text": "Started to use Handlebar.js",
				"isProject": false
			},
			{
				"year": 2016,
				"month": "April",
				"text": "Started to use Heroku",
				"isProject": false
			},
			{
				"year": 2016,
				"month": "September",
				"text": "Started to learn ES6",
				"isProject": false
			},
			{
				"year": 2016,
				"month": "September",
				"text": "Started to learn Babel",
				"isProject": false
			},
			{
				"year": 2016,
				"month": "December",
				"text": "Experimented w/ webpack",
				"isProject": false
			},
			{
				"year": 2017,
				"month": "February",
				"text": "Started to use yarn",
				"isProject": false
			},
			{
				"year": 2017,
				"month": "April",
				"text": "Deployed PRV project",
				"isProject": true
			},
			{
				"year": 2017,
				"month": "May",
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