import React from 'react';
import MenuElement from '../MenuElement';
import './Navigation.scss';

export default function Navigation () {
    return (
        <header className="navigation">
            <nav>
                <ul className="navigation-list">
                    <MenuElement target='/' text='Home' />
                    <MenuElement target='/code' text='Code' />
                    <MenuElement target='/design' text='Design' />
                </ul>
            </nav>
        </header>
    )
}
