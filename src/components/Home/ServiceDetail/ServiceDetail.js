import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/products/')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    const Item = products.filter(td => td.id == id);

    console.log(Item)

    return (
        <div>
            <div>
                <img className="img-fluid" src={Item[0]?.img} alt="" />
                <h2>Name : {Item[0]?.name}</h2>
                <h5>Package Price : $ {Item[0]?.price}</h5>
                <p>Description: {Item[0]?.fullDesc}</p>
                <Link to={`/booking/${Item[0]?._id}`}>
                    <button className="btn btn-warning">Book {Item[0]?.name.toLowerCase()}</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceDetail;