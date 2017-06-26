import React from 'react';
import './CommitHeader.scss';

// const akarmi = ({ data }) => {
// 	let commitsByMonth = {};
	
// 	data.forEach(commit => {
// 		const date = commit.date.slice(0, 7);
		
// 		if (!commitsByMonth[date]) {
// 			commitsByMonth[date] = [];
// 		}

// 		commitsByMonth[date].push(commit);
// 	})
// }

export default function CommitHeader ({ index, data, month, year }) {
	const existsHeader = (
		index > 0 &&
		data[index - 1].month === month &&
		data[index - 1].year === year
	);

	if (existsHeader) {
		return null;
	}

	return (
		<div className="title top-space title-bottom-space">
			<div className="square"></div>
			<p className="commit-date italic bold commit-header">Commits on { month }, { year }</p>
		</div>
	)
}