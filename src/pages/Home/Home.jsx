import React from 'react';
import { Link } from 'react-router-dom';
import Introduction from './../../components/Introduction';
import Button from './../../components/Button';

export default function Home() {  
	return (
		<div className="content">
			<Introduction />
			<div>
				<Link to='/design'>
                	<Button buttonText="Design" />
				</Link>
                <img src="" alt=""/>
				<Link to='/code'>
                	<Button buttonText="Code" />
				</Link>
            </div>
		</div>
	);
}
