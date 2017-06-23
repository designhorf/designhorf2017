import React from 'react';
import { Link } from 'react-router-dom';
import Introduction from './../../components/Introduction';
import Button from './../../components/Button';
import './Home.scss';

export default function Home() {  
	return (
		<div className="content">
			<Introduction />
			<div className="home">
				<Link to='/design'>
                	<Button buttonText="Design" buttonClass="btn-design" />
				</Link>
                <img className="big-profile-pic" src="./src/images/FH.png" alt="Ferenc Horvath"/>
				<Link to='/code'>
                	<Button buttonText="Code" buttonClass="btn-code" />
				</Link>
            </div>
		</div>
	);
}
