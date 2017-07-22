import React from 'react';
import CommitHeader from '../CommitHeader';
import CommitBody from '../CommitBody';
import './Commits.scss';


export default function Commits ({ data }) {
	return (
		<div className="commits">
			{
				Object.keys(sortedData(data)).map((date, index) => (
					<section key={ index } className="commit-wrap">
						<div className="line"></div>
						<CommitHeader data={ date }	key={ index } />

						{
							sortedData(data)[date].map((commitData, index2) => (
								<CommitBody 
									key = { index2 } 
									isProject = { commitData.isProject }
									text = { commitData.text }
									date = { commitData.date }
								/>
							))
						}
					</section>
				))
			}
		</div>
	)
}

function sortedData (data) {
	let commitsByMonth = {};
	
	data.forEach(commit => {
		if (!commitsByMonth[commit.date]) {
			commitsByMonth[commit.date] = [];
		}

		commitsByMonth[commit.date].push(commit);
	})

	return commitsByMonth;
}

function getClassName (isProject) {
	if (isProject) {
		return 'commit-body project';
	}

	return 'commit-body';
}
