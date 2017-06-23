import React from 'react';
import './Introduction.scss';

export default function Introduction () {
    return (
        <div className="home-header">
            <div className="introduction-box">
                <span className="introduction-1 bg-green">Hi, I am</span>
            </div>
            <div className="introduction-box">
                <span className="introduction-1 bg-green">Ferenc Horvath</span>
            </div>
            <div className="introduction-box">
                <span className="introduction-3 bg-green">Front-end developer & UI designer</span>
            </div>
        </div>
    )
}