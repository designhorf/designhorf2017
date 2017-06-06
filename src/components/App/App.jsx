import React from 'react';
import Content from '../Content';  
import './App.scss';

const commits = [
		{
			"id": 1,
			"date": "April 30, 2016",
			"text": "Started to learn React",
			"isProject": true
		},
		{
			"id": 2,
			"date": "May, 2016",
			"text": "Started to learn...",
			"isProject": false
		}
];

export default function App() {  
  return (
		<Content data={ commits }/>
  );
}