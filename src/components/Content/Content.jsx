import React from 'react';
import moment from 'moment';
import './Content.scss';

const CommitHeader = (props) => {
	const { index, data, month, year } = props,
		existsHeader = index > 0 && data[index - 1].month === month && data[index - 1].year === year;

	if (existsHeader) {
		return null;
	}

	return (
		<div className="title top-space">
			<div className="square"></div>
			<p className="commit-date italic bold commit-header">Commits on { month }, { year }</p>
		</div>
	)
}

const CommitBody = (props) => {
	const { text, isProject, year, month } = props;
	let classnames = 'commit-body';
	const monthValue = moment().month(month).format("M");

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
					<p className="committed-ago">committed on Github { moment([year, monthValue]).fromNow() }</p>
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
						<CommitHeader index={ index } data={ data } year={ commit.year } month={ commit.month } />
						<CommitBody text={ commit.text } year={ commit.year } month={ commit.month } isProject={ commit.isProject } /> 
					</section>
				)
			}
		</div>
	);
}