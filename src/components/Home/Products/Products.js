import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="package-tour">
            <h1 className="mt-3 mb-3">OUR PRODUCTS</h1>
            <hr className="hrline" />
            <div className="row mt-3 mb-2 mx-auto container">
                {
                    products.filter((item, index) => index < 6).map(product => <Product
                        key={product.name}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;