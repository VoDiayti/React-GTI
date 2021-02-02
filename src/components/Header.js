import React, {Component} from 'react';
import logo from '../images/logo_GTI.png';


class Header extends Component {
    render() {
        return (
            <header className="masthead-bg text-white text-center">
                <nav className="navbar navbar-expand-lg  fixed-top" id="mainNav">
                <div className="container-fluid">
                    <a className="navbar-brand js-scroll-trigger " href="#"><img src={logo} id="imglogo"  alt="logo" /></a>
                    <button
                        className="navbar-toggler navbar-toggler-right text-center font-weight-bold bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <div class="bg-light line1"></div>
                        <div class="bg-light line2"></div>
                        <div class="bg-light line3"></div> 
                    </button>
                    <div className="collapse navbar-collapse row2" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto row pr-3">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#About">About</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#WhyUs">Why Us</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#Services">Services</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#HowWeWork">How We Work</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#Team">Team</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#News">News</a> </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link navbar-cl py-3 px-0 px-lg-3  js-scroll-trigger" href="#Contact">Contact</a></li>
                        </ul>
                        <div>
                            <button type="button" className="btn-btn-light font-weight-bold mx-lg-1">Client Login</button>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </header>
            
        );
    }
}

export default Header;