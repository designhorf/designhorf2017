import React from 'react';
import Content from '../Content';  
import './App.scss';

const commits = [
		{
			"id": 1,
			"date": "30-04-2016",
			"text": "commit text",
			"isProject": true
		},
		{
			"id": 2,
			"date": "30-05-2016",
			"text": "2. commit text",
			"isProject": false
		}
];

export default function App() {  
  return (
		<Content data={ commits }/>
  );
}