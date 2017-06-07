import React from 'react';
import './Content.scss';

const CommitHeader = (props) => {
	return <p className="commit-date italic bold commit-header">Commits on { props.date }</p>
}

const CommitBody = (props) => {
	const { text, isProject } = props;
	let classnames;

	if (isProject) {
		classnames = 'commit-body project';
	} else {
		classnames = 'commit-body';
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
				data.map(commit => 
					<section key={ commit.id } className="commit-wrap bottom-space">
						<CommitHeader date={ commit.date } />
						<CommitBody text={ commit.text } isProject={ commit.isProject } /> 
					</section>
				)
			}
		</div>
	);
}