import React from 'react';
import moment from 'moment';
import './CommitBody.scss';

export default function CommitBody ({ text, isProject, year, month }) {
	const monthValue = moment().month(month).format("M") - 1;
	
	return (
		<div className={ getClassName(isProject) }>
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

function getClassName (isProject) {
	if (isProject) {
		return 'commit-body project';
	}

	return 'commit-body';
}