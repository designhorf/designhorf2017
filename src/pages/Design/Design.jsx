import React from 'react';
import PageTitle from './../../components/PageTitle';
import Tools from './../../components/Tools';
import References from './../../components/References';
const designReferences = require('./../../../config/index').references;

export default function Design() {  
	return (
		<div className="content">
			<PageTitle title = 'Design' />
			<Tools />
			<References data={ designReferences } />
		</div>
	);
}
