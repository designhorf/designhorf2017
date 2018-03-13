import React from 'react';
import PageTitle from './../../components/PageTitle';
import Tools from './../../components/Tools';
import References from './../../components/References';

export default function Design() {  
	const designReferences = [
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
			"images": ['iw007-1000x.jpg', 'iw009-1000x.jpg', 'iw011-1000x.jpg', 'iw019-1000x.jpg', 'iw020-1000x.jpg']
		},
		{
			"text": 'PRV Team',
			"link": 'http://www.prvteam.hu',
			"year": '2016',
			"month": 'December',
			"tools": ['sketch'],
			"images": ['prvteam-mockup-long.jpg']
		},
		{
			"text": 'Layout design for Little Italy Restaurant',
			"year": '2016',
			"month": 'January',
			"tools": ['sketch'],
			"images": ['littleitaly-long.jpg']
		},
		{
			"text": 'Design opening & closing screen for Journey to my dreams daily vlog',
			"year": '2016',
			"month": 'January',
			"tools": ['ps', 'camera'],
			"images": ['jtmd.jpg']
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
