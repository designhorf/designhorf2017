import React from 'react';
import CommitHeader from '../CommitHeader';
import CommitBody from '../CommitBody';
import './Commits.scss'

export default function Commits ({ data }) {
	return (
		<div className="commits">
			{
				data.map((commit, index) => 
					<section key={ index } className="commit-wrap">
						<div className="line"></div>
						<CommitHeader
							index={ index }
							data={ data }
							year={ commit.year }
							month={ commit.month }
						/>
						<CommitBody
							text={ commit.text }
							year={ commit.year }
							month={ commit.month }
							isProject={ commit.isProject } 
						/> 
					</section>
				)
			}
		</div>
	)
}
