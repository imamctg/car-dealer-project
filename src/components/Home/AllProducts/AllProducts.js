import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="package-tour">
            <h1 className="mb-5">OUR ALL CARS </h1>

            <div className="row mt-3 mb-2 mx-auto container">
                {
                    products.map(product => <div className="col-md-4" key={product.id}>
                        <div className="container service">
                            <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                                <Card.Img style={{ height: '180px' }} variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Title>Price : $ {product.price} Million</Card.Title>
                                    <Card.Text>Description: {product.description}</Card.Text>
                                    <Link to={`/booking/${product.id}`}>
                                        <Button variant="info">BUY NOW</Button>
                                    </Link>


                                </Card.Body>
                            </Card>


                        </div>

                    </div>
                    )}
            </div>
        </div>
    );
};

export default AllProducts;