import React from 'react';
import ToolIcons from '../ToolIcons';
import './Tools.scss';

export default function Tools () {
    return (
        <div className="tools">
            <div className="tools-title bottom-space">
                <h2>Tools what I use: </h2>
            </div>
            <ToolIcons />
        </div>
    )
}