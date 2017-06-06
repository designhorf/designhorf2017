import React from 'react';
import './Content.scss';

const CommitHeader = (props) => {
	return <p className="italic">Commits on { props.date }</p>
}

const CommitBody = (props) => {
	const { text } = props;

	return (
		<div className="commit-body">
			<div className="img">
				<img src="" alt=""/>
			</div>
			
			<div className="text">
				<h2>{ text }</h2>
			</div>
		</div>
	)
}

export default function Content({ data }) {  
	return (
		<div className="content">
			{
				data.map(commit => 
					<section key={ commit.id } className="commit-wrap">
						<CommitHeader date={ commit.date } />
						<CommitBody text={ commit.text } /> 
						<p>designhorf</p>
						<p>committed on Github XXX days ago</p>
					</section>
				)
			}
		</div>
	);
}