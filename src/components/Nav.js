import React, {Component} from 'react';
import logo from '../images/logo_GTI.png';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                <div className="container-fluid ">
                    <a className="navbar-brand js-scroll-trigger " href="#"><img src={logo} alt="logo" /></a>
                    <button
                        className="navbar-toggler navbar-toggler-right text-center font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <div class="bg-light line1"></div>
                        <div class="bg-light line2"></div>
                        <div class="bg-light line3"></div> 
                    </button>
                    <div className="collapse navbar-collapse " id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">Why Us</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">Services</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">How We Work</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">Team</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">News</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                        </ul>
                        <div>
                            <button type="button" className="btn btn-light ">Client Login</button>
                           
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;