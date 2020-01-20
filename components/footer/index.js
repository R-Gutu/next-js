import React, { Fragment } from 'react'

const Footer = () => {
    return <footer className="page-footer center-on-small-only stylish-color-dark" id="footer-hbs">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5 className="title mb-4 mt-3 font-bold">Footer Content</h5>
                    <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.</p>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-2 mx-auto">
                    <h5 className="title mb-4 mt-3 font-bold">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-2 mx-auto">
                    <h5 className="title mb-4 mt-3 font-bold">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
                <hr className="clearfix w-100 d-md-none" />
                <div className="col-md-2 mx-auto">
                    <h5 className="title mb-4 mt-3 font-bold ">Links</h5>
                    <ul>
                        <li><a href="#!">Link 1</a></li>
                        <li><a href="#!">Link 2</a></li>
                        <li><a href="#!">Link 3</a></li>
                        <li><a href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className="call-to-action">
            <ul>
                <li>
                    <h5 className="mb-1">Register for free</h5>
                </li>
                <li><a href="" className="btn btn-danger btn-rounded">Sign up!</a></li>
            </ul>
        </div>
        <hr />
        <div className="social-section text-center">
            <ul>
                <li><a className="btn-floating btn-sm btn-fb"><i className="fab fa-facebook"> </i></a></li>
                <li><a className="btn-floating btn-sm btn-tw"><i className="fab fa-twitter"> </i></a></li>
                <li><a className="btn-floating btn-sm btn-gplus"><i className="fab fa-google-plus"> </i></a></li>
                <li><a className="btn-floating btn-sm btn-li"><i className="fab fa-linkedin"> </i></a></li>
                <li><a className="btn-floating btn-sm btn-dribbble"><i className="fab fa-dribbble"> </i></a></li>
            </ul>
        </div>
        <div className="footer-copyright">
            <div className="container-fluid">
                © 2020 Copyright: <a href="#"> vitali </a>
            </div>
        </div>
        <style jsx>{`
            .container {
                margin: 0 20px;
            }
        
            .call-to-action ul, 
            .social-section ul {
                list-style: none;
                padding: 0;
            }
        
            .call-to-action {
                text-align: center;
            }
        
            .social-section ul {
                display: flex;
                justify-content: center;
            }
        `}</style>
    </footer>
};

export default Footer;