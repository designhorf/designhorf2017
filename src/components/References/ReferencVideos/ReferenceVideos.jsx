import React from 'react';

export default function ReferenceVideos ({ data }) {

    return (
        <div>
            {
                data.map((video, index) => 
                    <div className="reference-image" key={ index }>
                        <iframe src={video.source} width={video.width || 640} height={video.height || 640} frameborder="0"></iframe>
                    </div>
                )
            }
        </div>
    )
}