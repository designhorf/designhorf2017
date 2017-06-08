import React from 'react';
import Content from '../Content';  
import './App.scss';

const commits = [
		{
			"id": 1,
			"date": "April 30, 2014",
			"text": "Started to learn HTML",
			"isProject": false
		},
		{
			"id": 2,
			"date": "April 30, 2014",
			"text": "Started to learn CSS",
			"isProject": true
		},
		{
			"id": 3,
			"date": "May, 2014",
			"text": "Started to learn JavaScript",
			"isProject": false
		}
];

export default function App() {  
  return (
		<Content data={ commits }/>
  );
}