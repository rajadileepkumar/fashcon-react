import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Logo from './../../logo.svg';
export default class Header extends Component {
    openNav() {
        document.getElementById("mySidenav").style.width = "300px";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    componentDidMount(){
        
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        if (window.pageYOffset >= 120) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    }

    render() {
        return (
            <header className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to='/'>
                            <img src={Logo} alt="Home" className="app-logo" />
                        </Link>
                        <div id="navbarNavDropdown" className="navbar-collapse mobile-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <button className="hamburg ToggleMenu nav-link" onClick={this.openNav}>
                                        <div className="hamburger">
                                            <div className="top-bun"></div>
                                            <div className="meat"></div>
                                            <div className="bottom-bun"></div>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="mySidenav" className="sidenav">
                        <Link to="#" className="closebtn" onClick={this.closeNav}>&times;</Link>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
            </header>
        )
    }

}