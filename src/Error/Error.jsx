/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="hv-100 d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className='text-secondary'>404</h1>
                    <h3 className="text-secondary">Page Not Found</h3>
                    <Link to='/'>Back to Home</Link>
                </div>

            </div>
        </div>
    );
};

export default Error;