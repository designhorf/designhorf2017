import React from 'react';

export default function ReferenceImages ({ data }) {
    const imgPath = './../../src/assets/images/references/';

    return (
        <div>
            {
                data.map((image, index) => 
                    <div className="reference-image" key={ index }>
                        <img src={`${imgPath}${image}-mobile.jpg`} 
                        srcSet={
                        ` ${imgPath}${image}.jpg 1000w,
                        ${imgPath}${image}-mobile.jpg 480w`
                        }
                        alt={`${image}`} />
                    </div>
                )
            }
        </div>
    )
}