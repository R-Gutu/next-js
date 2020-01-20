import Link from 'next/link';
import React, { Fragment } from 'react';
import { NAVIGATION_LINKS } from './HeaderConstants';


const prepareNavigationLinks = NAVIGATION_LINKS =>
    NAVIGATION_LINKS.map((navigationItem) => {
        // navigationItem.active = window.location.pathname.includes(navigationItem.url)

        return navigationItem;
    });

const Header = () => {
    const navigationItems = prepareNavigationLinks(NAVIGATION_LINKS) || [];

    return (
        <Fragment>
            <nav className="navbar fixed-top navbar-expand-lg stylish-color-dark scrolling-navbar">
            <span className="logo">My Logo</span>
            <a className="navbar-brand" href="/index">
                <img src="/img/logo/coca-cola.png" alt="Skillup logo" srcSet="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        navigationItems.map((item, index) =>
                            <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                                <Link as={item.url} href={item.url}><a className="nav-link">{item.label}</a></Link>
                            </li>
                        )
                    }
                </ul>
                <ul className="navbar-nav nav-flex-icons">
                    <li className="nav-item">
                        <a className="nav-link"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><i className="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
            </nav>
            <style jsx>{`
            .navbar {
                position: relative;
                color: white;
            }        
            
            .navbar .logo {
                position: absolute;
                width: 100px;
                left: 45%;
                text-align: center;
                color: white;
                font-weight: bold;
                font-size: 22px;
                animation: opacity 2s forwards;
            }
            
            .navbar .navbar-brand img {
                width: auto;
                max-width: 80px;
            }
            .navbar a {
                color: white;
            }
            
            @keyframes opacity {
                0% { opacity: 0;}
                100% { opacity: 1; }
            }
            `}</style>
        </Fragment>
    );
}

export default Header;