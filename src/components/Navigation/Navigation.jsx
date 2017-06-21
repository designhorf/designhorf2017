import React from 'react';
import MenuElement from '../MenuElement';
import './Navigation.scss';

export default function Navigation () {
    return (
        <header className="navigation">
            <nav>
                <ul className="navigation-list">
                    <MenuElement linkTarget='/' menuText='Home' />
                    <MenuElement linkTarget='/code' menuText='Code' />
                    <MenuElement linkTarget='/design' menuText='Design' />
                </ul>
            </nav>
        </header>
    )
}
