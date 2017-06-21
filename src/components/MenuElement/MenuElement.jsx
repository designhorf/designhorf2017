import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function MenuElement ({linkTarget, menuText})  {
    return (
        <li className="navigation-list-element">
            <NavLink activeClassName="active" exact to={ linkTarget }>{ menuText }</NavLink>
        </li>
    )
}