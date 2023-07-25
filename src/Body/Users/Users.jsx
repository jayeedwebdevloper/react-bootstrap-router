/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div className='container py-5 my-5'>
            <div className="pt-5">
                <h2>Our Users are {users.length}</h2>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        users.map(user=><User key={user.id} user={user}></User>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;