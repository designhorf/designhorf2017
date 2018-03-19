import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

export default function Button ({ text, btnClass, link }) {
    return (
        <Link className={( 'link ' + 'link-' + text.toLowerCase() )} to={ link }>
            <button className={ ( btnClass ? 'btn ' + btnClass : 'btn' ) }>
                { text }
            </button>
        </Link>
    )
}