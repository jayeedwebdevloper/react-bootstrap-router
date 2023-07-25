/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Permanent/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Permanent/Footer';

const Controller = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Controller;