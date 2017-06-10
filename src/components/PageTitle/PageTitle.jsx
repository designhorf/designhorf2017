import React from 'react';
import './PageTitle.scss';

export default function PageTitle ({ title = 'Code' }) {
	return <h1 className="page-title">{ title }</h1>
}