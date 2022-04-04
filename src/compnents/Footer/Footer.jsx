import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { ImYoutube2 } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import style from './Footer.module.css';

const Footer = () => {
    return (

        <div>
            <footer className={`${style.MainFooter}`}>

                <div className="container p-4">

                    <section>

                        <div className="row d-flex justify-content-center text-dark">
                      
                            <div className="col-auto">
                                <p className="pt-2 text-white">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control bg-dark text-white rounded-pill" placeholder='Email Address' />

                                </div>
                            </div>

                            <div className="col-auto">

                                <button type="submit" className="btn btn-dark fw-bold mb-4 rounded-pill">Subscribe</button>
                            </div>

                        </div>
                    </section>

                    <section className={`${style.socialContainer}`}>
                        <div className={`${style.span}`}>
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <a href="#!"><BsFacebook className='fs-1 bg-white text-primary rounded-pill' /></a>

                        <a href="#!"><ImYoutube2 className='fs-1 bg-danger text-white rounded-2 mx-2' /></a>

                        <a href="#!"><FaTwitter className='fs-1 p-1 bg-info text-white rounded-pill' /></a>

                        <a href="#!"><BsLinkedin className='fs-1 bg-white text-primary mx-2' /></a>

                    </section>
                </div>
                <div className={`${style.footerBg}`}>
                    <p className="m-0">Copyright © Your Website 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

