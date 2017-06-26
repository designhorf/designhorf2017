import React from 'react';

export default function ReferenceImages ({ data }) {
    return (
        <div>
            {
                data.map((image, index) => 
                    <div className="reference-image" key={ index }>
                        <img src={`./src/components/References/Images/${ image }`} alt={`${image}`} />
                    </div>
                )
            }
        </div>
    )
}