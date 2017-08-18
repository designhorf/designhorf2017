import React from 'react';
import images from './images';
import VardaVed from './Images/vardaved.jpg';
import iw1 from './Images/iw001.jpg';
import iw2 from './Images/iw002.jpg';
import iw3 from './Images/iw003.jpg';
import iw4 from './Images/iw004.jpg';

export default function ReferenceImages ({ data }) {
    return (
        <div>
            {
                data.map((image, index) => 
                    <div className="reference-image" key={ index }>
                        { console.log(image) }
                        <img src={ VardaVed } alt={`${image}`} />
                    </div>
                )
            }
        </div>
    )
}