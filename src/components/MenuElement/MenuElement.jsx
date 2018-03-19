import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MenuElement.scss';

export default function MenuElement ({target, text})  {
    return (
        <li className="navigation-list-element">
            <NavLink activeClassName="active" exact to={ target }>{ text }</NavLink>
        </li>
    )
}