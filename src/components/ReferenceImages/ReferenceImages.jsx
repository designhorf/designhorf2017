import React from 'react';

export default function ReferenceImages ({ data }) {
    const imgPath = './../../src/assets/images/references/';

    return (
        <div>
            {console.log({data})}
            {
                data.map((image, index) => 
                    <div className="reference-image" key={ index }>
                        <picture>
                            <source media="(max-width: 480px)" srcSet={`${imgPath}${image}-small.jpg`} />
                            <source media="(max-width: 768px)" srcSet={`${imgPath}${image}-medium.jpg`} />
                            <img srcSet={`${imgPath}${image}-large.jpg`} alt={`${image}`} />
                        </picture>
                    </div>
                )
            }
        </div>
    )
}