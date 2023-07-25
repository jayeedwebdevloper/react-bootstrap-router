/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className='container my-5 py-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
                {
                    products.map(product=> <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;