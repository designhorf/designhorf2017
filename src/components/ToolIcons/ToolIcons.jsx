import React from 'react';
import PsIcon from './ps.svg';
import IllustratorIcon from './illustrator.svg';
import SketchIcon from './sketch.svg';
import InvisionIcon from './invision.svg';
import MarvelIcon from './marvel.svg';

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
