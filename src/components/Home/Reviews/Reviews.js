import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-5 review-bg">
            <h1 className="mb-5">THE LATEST NEW CAR RELEASE AND REVIEWS </h1>
            <hr className="hrline" />
            <div className="row mt-3 mb-2 mx-auto container">
                {
                    reviews.map(review => <Review
                        key={review.name}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;