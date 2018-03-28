import React from 'react';
import './ReferenceTools.scss';

export default function ReferenceTools ({ data }) { 
    const imgPath = './../../assets/images/tools';

    return (
        <div className="reference-tool">
            {
                data.map((tool, index) =>
                    <div className="reference-tool-icon" key={ index }>
                        <img src={`${imgPath}/${ tool }.svg`} alt={`${ tool } icon`}/>
                    </div>
                )
            }
        </div>
    )
}
