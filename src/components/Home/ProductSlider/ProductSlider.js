import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ProductSlider.css';

const ProductSlider = () => {
    return (
        <div className="container slide-image mt-5 ">
            <h1 >TOP FEATURED CAR</h1>
            <hr className="hrline mb-3" />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/7p7W1QG/resized-image-Promo.jpg"
                        fluid
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Porsche</h3>
                        <p>Porsche car is named after its founder, Ferdinand Porsche, who started the company in 1931, in Stuttgart, Germany. Today,
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/rZWZpXh/resized-image-Promo-1.jpg"
                        fluid
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>HONDA</h3>
                        <p>Honda was named after its founder, Soichiro Honda. Honda originally founded the manufacturer Tōkai Seiki in 1937, which produced piston rings for Toyota.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://i.ibb.co/rZWZpXh/resized-image-Promo-1.jpg"
                        fluid
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Ferrari</h3>
                        <p>The luxury car brand Ferrari is named after its Italian founder, Enzo Ferrari, who was an official Alto race driver. In 1939, he quit racing to build his own company.

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ProductSlider;