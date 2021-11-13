import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="bg-color py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-3">
                        <h4>About Us</h4>
                        <p>Automobile Regency  Company ltd provides comprehensive top class Car for our honourable client. Our Client always are satisfy with us.</p>
                    </div>
                    <div className="col-md-3 ">
                        <h4>Explore</h4>
                        <div>
                            <h6>All Cars</h6>
                            <h6>Top Selling Car</h6>
                            <h6>Car Reviews</h6>
                            <h6>Featured Car</h6>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <h4>Help</h4>
                        <div>
                            <h6>Contact Us</h6>
                            <h6>Privacy Policy</h6>
                            <h6>Legal Notice</h6>
                            <h6>Accessibility</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '40px' }} />
                        <p className="ms-2 fw-bolder">A#201 (7th floor), Road #19, <br />Agrabad, Chittagong</p>
                        <div className='d-flex justify-content-evenly' style={{ fontSize: '2em' }}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;