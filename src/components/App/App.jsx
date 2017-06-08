import React from 'react';
import Content from '../Content';  
import './App.scss';

const commits = [
		{
			"id": 1,
			"year": 2014,
			"month": "April",
			"text": "Started to learn HTML",
			"isProject": false
		},
		{
			"id": 2,
			"year": 2014,
			"month": "April",
			"text": "Started to learn CSS",
			"isProject": true
		},
		{
			"id": 3,
			"year": 2014,
			"month": "May",
			"text": "Started to learn JavaScript",
			"isProject": false
		}
];

export default function App() {  
  return (
		<Content data={ commits }/>
  );
}