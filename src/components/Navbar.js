import React from 'react';
import logo from '../images/logo.png'
import * as FaIcons from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
                <div className="container">
                    <a className="navbar-brand" href="#home"><img className='logo' src={logo} alt='logo...' /></a>
                    <button
                        className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <FaIcons.FaBars style={{ color: '#fff' }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#strengths">strengths</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education">education</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">photos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;