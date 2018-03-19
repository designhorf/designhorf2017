import React from 'react';

export default function ProfilePic () {
    return (
        <div className="ppic" onClick={ photoAnimation }>
            { imageList }
        </div>
    )
}

const images = importAllImages(require.context('./../../assets/images/home')),
    imageList = images.map((image, index) => <img src={ image } key={ index } />);

function importAllImages (r) {
    return r.keys().map(r);
}
  
function photoAnimation () {
    const pic = document.querySelector('.ppic'),
        allImages = pic.getElementsByTagName('img');

    Object.values(allImages).map((image, index) => {
        if ((index+1) % 2 == 0) {
            image.style.marginLeft = '-687px'
        } else {
            image.style.marginLeft = '687px'
        } 
    })
}