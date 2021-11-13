import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <h1>FIND YOUR DREAM CAR</h1>
            <h5>We can help you find the best car. Check our reviews, <br />
                compare models and find cars for sale.</h5>
            <button>BUY THIS CAR</button>
            <div className="banner-img">
                <img src="https://i.ibb.co/rkYcC8B/banner-removebg-preview.png" alt="" />
            </div>

        </div>
    );
};

export default Banner;