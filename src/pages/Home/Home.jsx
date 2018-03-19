import React from 'react';
import Introduction from './../../components/Introduction';
import Button from './../../components/Button';
import ProfilePic from './../../components/ProfilePic';

import './Home.scss';

export default function Home() {
	// console.log("%cThis will be formatted with yellow text", "color: #eeaa44")

	return (
		<div className="content">
			<Introduction />
			<div className="home">
				<Button link="/design" text="Design" btnClass="btn-design" />
				<ProfilePic />
				<Button link="/code" text="Code" btnClass="btn-code" />
            </div>
		</div>
	);
}
