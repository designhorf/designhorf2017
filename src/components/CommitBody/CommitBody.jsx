import React from 'react';
import moment from 'moment';
import ProfilePic from './profile_pic.jpg';
import './CommitBody.scss';

export default function CommitBody ({ index, isProject, text, date }) {
	const m = moment({date}.date),
		today = moment().startOf('day'),
		days = Math.round(moment.duration(today - m).asDays()),
		months = Math.round(moment.duration(today - m).asMonths()),
		years = Math.round(moment.duration(today - m).asYears());

	return (
		<div key={ index } className={ getClassName(isProject) }>
			<img className="profile-pic" src={ ProfilePic } alt="profile pic"/>			
			<div className="commit-text-wrap">
				<p className="commit-title">{ text }</p>
				<div className="commit-small-texts">
					<b className="username">designhorf</b>
					<p className="committed-ago">committed on Github { days < 365 ? days + ' days' : years + ' years' } ago</p>
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