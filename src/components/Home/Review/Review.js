import React from 'react';
import './Review.css';
import ReactStars from "react-rating-stars-component";
import { Card } from 'react-bootstrap';

const thirdExample = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 4,
    color: "blue",
    activeColor: "red",
    onChange: newValue => {
        console.log(`Example 3: new value is ${newValue}`);
    }
}


const Review = (props) => {
    const { name, img, review, ratting } = props.review;
    return (
        <div className="col-md-4">
            <div className="container  review-info">
                <Card className="mb-2" border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> <span className="text-info fw-bold">Reviews</span> : {review}</Card.Text>
                        <Card.Text> <span className="text-info fw-bold">Rating</span> : {ratting}</Card.Text>
                        <ReactStars  {...thirdExample} />
                        {/* <Rating>
                            initialRating={ratting}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating> */}


                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default Review;