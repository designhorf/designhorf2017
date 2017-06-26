import React from 'react';
import PageTitle from './../../components/PageTitle';
import Tools from './../../components/Tools';
import References from './../../components/References';
// import './Design.scss';

export default function Design() {  
	const designs = [
		{
			"text": 'Logo design for Varda-Véd Ltd.',
			"year": '2014',
			"month": 'July',
			"tools": ['illustrator'],
			"images": ['vardaved.jpg']
		}
	];
	
	return (
		<div className="content">
			<PageTitle title = 'Design' />
			<Tools />
			<References data={ designs }/>
		</div>
	);
}
