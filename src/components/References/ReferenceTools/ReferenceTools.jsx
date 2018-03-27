import React from 'react';
import './ReferenceTools.scss';

export default function ReferenceTools ({ data }) { 
    return (
        <div className="reference-tool">
            {
                data.map((tool, index) =>
                    <div className="reference-tool-icon" key={ index }>
                        <img src={`./src/components/ToolIcons/Icons/${ tool }.svg`} alt={`${ tool } icon`}/>
                    </div>
                )
            }
        </div>
    )
}
