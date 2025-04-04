import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section bg-dark">
            <div className="footer-top space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-brand">
                            <div className="brand-header">
                                <a href="/" className="footer-logo d-block mb-20">
                                    <img src="/assets/images/logo/sharkey_logo_white.png" alt="" />
                                </a>
                                <p className="text">
                                    Providing trusted insurance solutions <br /> tailored to secure your future.
                                </p>
                            </div>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/" className="social-link">FB.</a>
                                <a href="https://x.com/" className="social-link">TW.</a>
                                <a href="https://www.linkedin.com/" className="social-link">LN.</a>
                                <a href="https://www.instagram.com/" className="social-link">IG</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                                    <div className="footer-widget">
                                        <h4 className="title">Company</h4>
                                        <ul className="list-unstyled">
                                            <li><Link to="/about">Who We Are</Link></li>
                                            <li><Link to="/service">Our Services</Link></li>
                                            <li><Link to="/team">Meet Our Team</Link></li>
                                            <li><Link to="/blog">Latest Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 p-0 sm-pl-15">
                                    <div className="footer-widget">
                                        <h4 className="title">Services</h4>
                                        <ul className="list-unstyled">
                                            <li><Link to="/service/service-details">Home Insurance</Link></li>
                                            <li><Link to="/service/service-details">Auto Insurance</Link></li>
                                            <li><Link to="/service/service-details">Life Insurance</Link></li>
                                            <li><Link to="/service/service-details">Business Insurance</Link></li>
                                            <li><Link to="/service/service-details">Claims Assistance</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 md-d-none"></div>
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-widget ml-0 mb-0">
                                <h4 className="title">Newsletter</h4>
                                <p className="text">Don&apos;t miss the latest updates and insurance tips</p>
                                <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                    <div className="form-group">
                                        <input type="email" name="email" className="email" placeholder="Email Address" autoComplete="on"  />
                                        <button type="submit">
                                            <i className="bi bi-send"></i>
                                            <span className="btn-title"></span>
                                        </button>
                                    </div>
                                </form>
                                <div className="notify">
                                    <div className="icon">
                                        <i className="bi bi-bell"></i>
                                    </div>
                                    Sign up to be notified of updates
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0">
                                &copy;2025 - All Rights Reserved by <a href="#">Sharkey Insurance</a>
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="footer-policy">
                                <a href="#">Terms &amp; Conditions</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Legal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;