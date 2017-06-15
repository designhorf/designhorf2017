import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.scss';

export default function Navigation () {
    return (
        <header className="navigation">
            <nav>
                <ul className="navigation-list">
                    <li className="navigation-list-element"><Link to='/'>Home</Link></li>
                    <li className="navigation-list-element"><Link to='/code'>Code</Link></li>
                    <li className="navigation-list-element"><Link to='/design'>Design</Link></li>
                </ul>
            </nav>
        </header>
    )
}
