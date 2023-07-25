/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { name, id, email, phone } = user;
    return (
        <div className='container py-5 mt-5'>
            <div className="pt-5">
                <h1>See <span className='text-primary'>{name}</span>'s Details</h1>
                <hr />
                <h4>ID: {id}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4>City: {user.address.city}</h4>

            </div>
        </div>
    );
};

export default UserDetails;