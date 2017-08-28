import React from 'react';
import './CommitHeader.scss';

export default function CommitHeader ({ data, index }) {
	const year = {data}.data.slice(0,4),
		month = {data}.data.slice(5);

	Date.prototype.getMonthName = function() {
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		return months[this.getMonth()];
	};

	let startDate = new Date(year, month - 1),
		month2 = startDate.getMonthName(3);

	return (
		<div key={ index } className="title top-space title-bottom-space">
			<div className="square"></div>
			<p className="commit-date italic bold commit-header">
				Commits on { month2 }, { year }
			</p>
		</div>
	)
}