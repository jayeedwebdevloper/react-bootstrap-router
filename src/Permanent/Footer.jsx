/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer className='pt-5 pb-2 bg-dark'>
            <div className="container">
                <h3 className="text-white pb-5">Sign Up To Our Newsletter.</h3>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <h4 className="text-light-emphasis">Information</h4>
                                <ul className='text-white'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Laptops</li>
                                    <li>Watch</li>
                                    <li>Mobile</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h4 className="text-light-emphasis">
                                    Parts
                                </h4>
                                <ul className="text-white">
                                    <li>CPU</li>
                                    <li>RAM</li>
                                    <li>SSD</li>
                                    <li>HDD</li>
                                    <li>Monitors</li>
                                    <li>Casing</li>
                                    <li>Bag</li>
                                    <li>Cleaner</li>
                                    <li>Cooling Fans</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <h4 className="text-light-emphasis">
                                    Desktops
                                </h4>
                                <ul className="text-white">
                                    <li>MSI</li>
                                    <li>Microsoft</li>
                                    <li>Asus</li>
                                    <li>Samsung</li>
                                    <li>ROG</li>
                                    <li>Lenovo</li>
                                    <li>Dell</li>
                                    <li>HP</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h4 className="text-light-emphasis">
                                    Laptops
                                </h4>
                                <ul className="text-white">
                                    <li>MSI</li>
                                    <li>Microsoft</li>
                                    <li>Asus</li>
                                    <li>Samsung</li>
                                    <li>ROG</li>
                                    <li>Lenovo</li>
                                    <li>Dell</li>
                                    <li>HP</li>
                                    <li>Xiaomi</li>
                                    <li>Huawei</li>
                                    <li>Apple</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="button-addon2"/>
                                <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                        </div>
                        <h4 className="text-light-emphasis">Address</h4>
                        <p className='text-white'>
                            Address: 1234 Street Adress City Address, 1234 <br />
                            Phones: <a href="(00) 1234 5678">(00) 1234 5678</a> <br />
                            We are open: Monday-Thursday: 9:00 AM - 5:30 PM
                            Friday: 9:00 AM - 6:00 PM <br />
                            Saturday: 11:00 AM - 5:00 PM <br />
                            E-mail: <a href="shop@email.com">shop@email.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;