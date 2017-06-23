import React from 'react';
import './Button.scss';

export default function Button ({ buttonText, buttonClass }) {
    return (
        <button className={ ( buttonClass ? 'btn ' + buttonClass : 'btn' ) }>
            { buttonText }
        </button>
    )
}