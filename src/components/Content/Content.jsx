import React from 'react';
import Branch from '../Branch';
import PageTitle from '../PageTitle';
import CommitHeader from '../CommitHeader';
import CommitBody from '../CommitBody';
import './Content.scss';

export default function Content({ data }) {  
	return (
		<div className="content">
			<PageTitle />
			<Branch />
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
	);
}