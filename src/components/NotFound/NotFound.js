import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>

            <h2>This page is NotFound </h2>
            <h2>Please Go Back <NavLink className="menu" exact to="/home">Home</NavLink> Page !</h2>
            <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-20173.jpg" alt="" />
        </div>


    );
};

export default NotFound;