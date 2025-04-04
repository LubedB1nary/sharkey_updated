const ContactInfo3 = () => {
    return (
        <div>
            <section className="contact-section style-2 space bg-theme3">
                <div className="container">
                    <div className="row gy-30">
                        <div className="col-lg-5">
                            <div className="contact-content-wrap">
                                <div className="title-area twoT">
                                    <div className="sub-title">
                                        <span><i className="asterisk"></i></span>CONTACT US
                                    </div>
                                    <h2 className="sec-title">
                                        Get in touch with Sharkey Insurance <br />
                                        <span className="bold">contact information</span>
                                    </h2>
                                    <p className="sec-text text-gray">
                                        We’re always ready to help you secure your future. Let’s talk.
                                    </p>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="info">
                                            <h4 className="title">Our Address</h4>
                                            <p>
                                                1234 Big Sky Ave, Billings, <br /> Montana - USA
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="bi bi-telephone-fill"></i>
                                        </div>
                                        <div className="info">
                                            <h4 className="title">Call us Anytime</h4>
                                            <div className="content">
                                                Consulting: <a href="tel:+14065551234">+1 406-555-1234</a><br />
                                                Corporate: <a href="tel:+14065555678">+1 406-555-5678</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-item">
                                        <div className="icon">
                                            <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="info">
                                            <h4 className="title">Send E-Mail</h4>
                                            <div className="content">
                                                <a href="mailto:info@sharkeyinsurance.com">info@sharkeyinsurance.com</a><br />
                                                <a href="mailto:support@sharkeyinsurance.com">support@sharkeyinsurance.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="#">
                                        <span className="link-effect">
                                            <span className="effect-1">Facebook</span>
                                            <span className="effect-1">Facebook</span>
                                        </span>
                                    </a>
                                    <a href="#">
                                        <span className="link-effect">
                                            <span className="effect-1">Twitter/X</span>
                                            <span className="effect-1">Twitter/X</span>
                                        </span>
                                    </a>
                                    <a href="#">
                                        <span className="link-effect">
                                            <span className="effect-1">LinkedIn</span>
                                            <span className="effect-1">LinkedIn</span>
                                        </span>
                                    </a>
                                    <a href="#">
                                        <span className="link-effect">
                                            <span className="effect-1">Instagram</span>
                                            <span className="effect-1">Instagram</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-form">
                                <h2 className="title mt--5 mb-35">Let’s Contact With Us</h2>
                                <form id="contact_form" className="contact_form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <span className="icon">
                                                <i className="bi bi-person-fill"></i>
                                            </span>
                                            <input type="text" id="fullName" name="name" placeholder="Your Name" required autoComplete="on" />
                                        </div>
                                        <div className="form-group">
                                            <span className="icon">
                                                <i className="bi bi-envelope-fill"></i>
                                            </span>
                                            <input type="email" id="userEmail" name="email" placeholder="Email Address" required autoComplete="on" />
                                        </div>
                                    </div>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <span className="icon">
                                                <i className="bi bi-telephone-fill"></i>
                                            </span>
                                            <input type="text" id="phone" name="phone" placeholder="Phone No." required autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select" id="service" name="service" autoComplete="off">
                                                <option>What service do you need?</option>
                                                <option value="air">Air Freight</option>
                                                <option value="ocean">Ocean Freight</option>
                                                <option value="rail">Rail transport</option>
                                                <option value="cargo">Cargo ship</option>
                                                <option value="bulk">Bulk cargo</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="msg" name="msg" placeholder="Write Message" required></textarea>
                                    </div>
                                    <div className="form-group terms">
                                        <input type="checkbox" id="terms" required />
                                        <label htmlFor="terms">I agree to all terms and conditions.</label>
                                    </div>
                                    <button type="submit" className="theme-btn bg-dark mt-35" data-loading-text="Please wait...">
                                        <span className="link-effect">
                                            <span className="btn-title">Submit Now</span>
                                        </span>
                                        <i className="bi bi-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-map">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="map-box">
                            <iframe
                                className="map-canvas"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2266377107035!2d90.38657937589684!3d23.73929618920158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c71927841%3A0xde102c300beb3f0c!2sWebCode%20Institute!5e0!3m2!1sen!2sbd!4v1727077475625!5m2!1sen!2sbd"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo3;