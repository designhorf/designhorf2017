import React from 'react';
import './ToolIcons.scss';

export default function ToolIcons () {
    const tools = ['ps', 'sketch2', 'invision'];
    const imgPath = './../../assets/images/tools';

    return (
        <div className="tools-icons">
            {
                tools.map((tool, index) => 
                    <img className="tool-icon" srcSet={`${imgPath}/${tool}.svg`} alt={`${tool} icon`} key={index} />
                )
            }
        </div>
    )
}