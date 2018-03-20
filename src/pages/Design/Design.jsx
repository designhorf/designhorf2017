import React from 'react';
import PageTitle from './../../components/PageTitle';
import Tools from './../../components/Tools';
import References from './../../components/References';

export default function Design() {  
	const designReferences = [
		{
			'text': 'Logo design for Varda-Véd Ltd.',
			'year': '2014',
			'month': 'July',
			'tools': ['illustrator'],
			'images': ['vardaved']
		},
		{
			'text': 'Monthly cover picture for Intelligent Waveforms',
			'year': '2015',
			'month': 'From December',
			'tools': ['ps'],
			'images': ['iw007-1000x', 'iw009-1000x', 'iw011-1000x', 'iw019-1000x', 'iw020-1000x']
		},
		{
			'text': 'PRV Team',
			'link': 'http://www.prvteam.hu',
			'year': '2016',
			'month': 'December',	
			'tools': ['sketch'],
			'images': ['prvteam-mockup-long']
		},
		{
			'text': 'Layout design for Little Italy Restaurant',
			'year': '2016',
			'month': 'January',
			'tools': ['sketch'],
			'images': ['littleitaly-long']
		},
		{
			'text': 'Design opening & closing screen for Journey to my dreams daily vlog',
			'link': 'http://bit.ly/1R8Kqt6',
			'year': '2016',
			'month': 'January',
			'tools': ['ps', 'camera'],
			'images': ['jtmd']
		},
		{
			'text': 'Upcoming project',
			'year': '2017',
			'month': 'December',
			'tools': ['sketch'],
			'images': ['mela', 'mela-tshirt', 'mela-spring']
		}
	];

	return (
		<div className="content">
			<PageTitle title = 'Design' />
			<Tools />
			<References data={ designReferences }/>
		</div>
	);
}
