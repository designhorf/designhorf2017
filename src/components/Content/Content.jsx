import React from 'react';
import './Content.scss';

const CommitHeader = (props) => {
	const { index, date, data } = props,
		existsHeader = index > 0 && data[index - 1].date === date;

	if (existsHeader) {
		return null;
	}

	return (
		<div className="title top-space">
			<div className="square"></div>
			<p className="commit-date italic bold commit-header">Commits on { date }</p>
		</div>
	)
}

const CommitBody = (props) => {
	const { text, isProject } = props;
	let classnames = 'commit-body';

	if (isProject) {
		classnames = classnames + ' project';
	}

	return (
		<div className={ classnames }>
			<img className="profile-pic" src="./src/images/profile_pic.jpg" alt="profile pic"/>
			
			<div className="commit-text-wrap">
				<p className="commit-title">{ text }</p>
				<div className="commit-small-texts">
					<b className="username">designhorf</b>
					<p className="committed-ago">committed on Github xyz days ago</p>
				</div>
			</div>
		</div>
	)
}

export default function Content({ data }) {  
	return (
		<div className="content">
			{
				data.map((commit, index) => 
					<section key={ index } className="commit-wrap">
						<div className="line"></div>
						<CommitHeader date={ commit.date } index={ index } data={ data } />
						<CommitBody text={ commit.text } isProject={ commit.isProject } /> 
					</section>
				)
			}
		</div>
	);
}