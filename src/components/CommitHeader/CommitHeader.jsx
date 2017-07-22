import React from 'react';
import moment from 'moment';
import './CommitHeader.scss';

export default function CommitHeader ({ data, index }) {
	return (
		<div key={ index } className="title top-space title-bottom-space">
			<div className="square"></div>
			<p className="commit-date italic bold commit-header">
				Commits on { moment(data).format('MMMM, YYYY') }
			</p>
		</div>
	)
}