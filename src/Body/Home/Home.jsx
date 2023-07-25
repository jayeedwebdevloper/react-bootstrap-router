/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Products/Product';

const Home = () => {
    const products = useLoaderData();
    return (
        <div className='container py-5 mt-5'>
            <h2 className='pt-5 text-dark'>New Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map(product => <Product key={product.id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Home;