import React from 'react';
import ProfilePic from './../../../assets/images/commits/profile_pic.jpg';
import './CommitBody.scss';

export default function CommitBody ({ index, isProject, text, date }) {
	const year = {date}.date.slice(0,4),
		month = {date}.date.slice(5),
		startDate = new Date(year, month - 1),
		today = new Date();
	
	return (
		<div key={ index } className={ getClassName(isProject) }>
			<img className="profile-pic" src={ ProfilePic } alt="profile pic"/>			
			<div className="commit-text-wrap">
				<p className="commit-title">{ text }</p>
				<div className="commit-small-texts">
					<b className="username">designhorf</b>
					<p className="committed-ago">committed on Github { 
						dateDiffInDays(startDate, today) < 365 
							? dateDiffInDays(startDate, today) + ' days' 
							: Math.round(dateDiffInDays(startDate, today)/365) + ' years' 
						} ago</p>
				</div>
			</div>
		</div>
	)
}

function dateDiffInDays (a, b) {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24,
		utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()),
		utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function getClassName (isProject) {
	if (isProject) {
		return 'commit-body project';
	}

	return 'commit-body';
}