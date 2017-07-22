import React from 'react';
import moment from 'moment';
import ProfilePic from './profile_pic.jpg';
import './CommitBody.scss';

export default function CommitBody ({ index, isProject, text, date }) {
	// const monthValue = moment().month(month).format("M") - 1;
	
	return (
		<div key={ index } className={ getClassName(isProject) }>
			<img className="profile-pic" src={ ProfilePic } alt="profile pic"/>
			
			<div className="commit-text-wrap">
				<p className="commit-title">{ text }</p>
				<div className="commit-small-texts">
					<b className="username">designhorf</b>
					<p className="committed-ago">committed on Github { date }</p>
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