/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, id, img, price, seller} = product;
    return (
        <div className="col pt-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Manufacturer: {seller}</p>
                        <p className="card-text">Price: ${price}</p>
                    </div>
                <Link to={`/products/${id}`} className="card-footer bg-primary text-white fw-bold btn btn-primary">
                        View this Product
                    </Link>
            </div>
        </div>
    );
};


export default Product;