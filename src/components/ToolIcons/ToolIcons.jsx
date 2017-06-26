import React from 'react';
import PsIcon from './Icons/ps.svg';
import IllustratorIcon from './Icons/illustrator.svg';
import SketchIcon from './Icons/sketch.svg';
import InvisionIcon from './Icons/invision.svg';
import MarvelIcon from './Icons/marvel.svg';
import './ToolIcons.scss';

export default function ToolIcons () {
    return (
        <div className="tools-icons">
            <img className="tool-icon" src={ PsIcon } alt="PhotoShop icon"/>
            <img className="tool-icon" src={ IllustratorIcon } alt="Illustrator icon"/>
            <img className="tool-icon" src={ SketchIcon } alt="Sketch icon"/>
            <img className="tool-icon" src={ InvisionIcon } alt="Invision icon"/>
            <img className="tool-icon" src={ MarvelIcon } alt="Marvel icon"/>
        </div>
    )
}
