import React from 'react';
import PageTitle from './../../components/PageTitle';
import Tools from './../../components/Tools';
import References from './../../components/References';

export default function Design() {  
	const designs = [
		{
			"text": 'Logo design for Varda-Véd Ltd.',
			"year": '2014',
			"month": 'July',
			"tools": ['illustrator'],
			"images": ['vardaved.jpg']
		},
		{
			"text": 'Monthly cover picture for Intelligent Waveforms',
			"year": '2015',
			"month": 'From December',
			"tools": ['ps'],
			"images": ['iw001.jpg', 'iw002.jpg', 'iw003.jpg', 'iw004.jpg']
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
