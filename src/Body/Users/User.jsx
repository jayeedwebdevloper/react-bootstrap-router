/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const { name, username, email, phone, id } = user
    return (
        <div className="col pt-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">User Name: {username}</p>
                </div>
                <Link to={`/users/${id}`} className="card-footer bg-primary text-white fw-bold btn btn-primary">
                    View this User
                </Link>
            </div>
        </div>
    );
};

export default User;