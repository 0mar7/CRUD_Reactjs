import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.webp';
import style from './Navbar.module.css'

const Navbar = ({ loginData, logOut }) => {
    return (
        <div>

            <div className="container-fluid bg-light">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a  className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <li className='px-2 list-unstyled'>
                            <img src={logo} alt="logo" width={180} />
                        </li>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">


                        {loginData ? <>
                            <li className="nav-item">
                                <NavLink className='px-2' to="/home">HOME</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className='px-2' to="/employeeList">EMPLOYEE LIST</NavLink>
                            </li>

                        </> : ''}

                        <li className="nav-item">
                            <NavLink className='px-2'  to="/employeeList">ECOSYSTEM</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='px-2' to="/employeeList">TECHNOLOGY</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='px-2' to="/employeeList">ONCARE</NavLink>
                        </li>
                    </ul>

                    <div className="col-md-3 text-end">

                        {loginData ? <>
                            <button onClick={logOut} type="button" className="btn btn-outline-primary me-2">Logout</button>
                        </> : <>
                            <button type="button" className="btn btn-primary mx-2">
                                <NavLink className='text-light' to="/login">Login</NavLink>
                            </button>
                            <button type="button" className="btn btn-outline-primary mx-2">
                                <NavLink to="/register">Register</NavLink>
                            </button>
                        </>}


                    </div>
                </header>
            </div>


        </div>
    )
}

export default Navbar;



