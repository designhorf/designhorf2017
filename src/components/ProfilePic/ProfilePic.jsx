import React from 'react';
import './ProfilePic.scss';

export default function ProfilePic () {
    const imgPath = './../../assets/images/home';

    return (
        <div className="ppic" onClick={ photoAnimation }>
            { createProfileImage(imgPath) }
        </div>
    )
}

function createProfileImage (imgPath) {
    let elements = [];

    for (let index = 1; index < 13; index++) {
        if (index < 10) {
            elements.push(<img srcSet={`${imgPath}/0${index}.jpg`} alt={index} />);
        } else {
            elements.push(<img srcSet={`${imgPath}/${index}.jpg`} alt={index} />);
        }
    }

    return elements;
};

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
};