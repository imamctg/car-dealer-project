import React from 'react';
import { Card } from 'react-bootstrap';
import './BestSellerCar.css';

const bestSell = [
    {
        img: 'https://i.ibb.co/XygQ9L5/top-sell1.jpg',
        name: 'Toyota Corolla',
        price: 65000,
        totalsell: 85,
        desc: 'Thanks in part to its spacious, upscale cabin and supple ride, the 2021 Toyota Avalon Hybrid sits in the top third of our hybrid'

    },
    {
        img: 'https://i.ibb.co/6rHbtVL/top-sell2-removebg-preview.png',
        name: '2021 Honda Insight',
        price: 72000,
        totalsell: 82,
        desc: 'Phenomenal fuel efficiency and intuitive features help the 2022 Honda Insight reach the top half of our hybrid.'

    },
    {
        img: 'https://i.ibb.co/p3YYLxV/top-sell3.jpg',
        name: '2021 Chevrolet Bolt',
        price: 75000,
        totalsell: 81,
        desc: 'The all-electric Chevrolet Bolt boasts a long driving range and swift acceleration,This car is awesome for ride.'

    },
    {
        img: 'https://i.ibb.co/D4Sm4fD/top-sell4-removebg-preview.png',
        name: 'Toyota Camry Hybrid',
        price: 61000,
        totalsell: 79,
        desc: 'The 2021 Toyota Camry Hybrid sits near the top of the hybrid and electric car class thanks to its spacious cabin, gentle ride.'

    },
    {
        img: 'https://i.ibb.co/GxJWw6L/top-sell5.jpg',
        name: 'Hyundai Sonata Hybrid',
        price: 67000,
        totalsell: 75,
        desc: 'The 2022 Hyundai Sonata Hybrid places near the top of the hybrid and electric car segment.'

    },
    {
        img: 'https://i.ibb.co/thCGXc9/car-img13.png',
        name: '2021 Toyota Prius',
        price: 85000,
        totalsell: 65,
        desc: 'The 2022 Toyota Prius delivers phenomenal fuel economy and offers up a lot of passenger and cargo space.'

    },
]

const BestSellerCar = () => {
    return (
        <div className="bestSelling-bg">
            <div className="row mt-3 mb-2 mx-auto container ">
                <h1 className="text-danger mb-3">BEST SELLING CAR</h1>
                <hr />
                {
                    bestSell.map(bestsel => <div className="col-md-4" key={bestsel.name}>
                        <div className="container service">
                            <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                                <Card.Img style={{ height: '180px' }} variant="top" src={bestsel.img} />
                                <Card.Body>
                                    <Card.Title>{bestsel.name}</Card.Title>
                                    <Card.Title>Price : $ {bestsel.price}</Card.Title>
                                    <Card.Title>Total Sell :  {bestsel.totalsell} million</Card.Title>
                                    <Card.Text>Description: {bestsel.desc}</Card.Text>
                                    {/* <Link to={`/booking/${product.id}`}>
                                <Button variant="info">BUY NOW</Button>
                            </Link> */}


                                </Card.Body>
                            </Card>


                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default BestSellerCar;