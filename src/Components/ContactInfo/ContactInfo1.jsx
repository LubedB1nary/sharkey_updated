const ContactInfo1 = () => {
    return (
        <section className="contact-section space bg-white">
            <div className="p-top-left wow slideInLeft">
                <img src="/assets/images/contact/shape01.png" alt="Service shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="appointment-form">
                            <div className="header">
                                <h2 className="title">Request a Consultation</h2>
                                <span className="availability">(Available 24/7)</span>
                            </div>
                            <form id="appointment_form" className="appointment-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-person-fill"></i></span>
                                        <input type="text" id="fullName" name="name" placeholder="Your Name" required autoComplete="on" />
                                    </div>
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                                        <input type="email" id="userEmail" name="email" placeholder="Email Address" required autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group home-form-select">
                                    <select className="custom-select" id="service" name="service" autoComplete="off">
                                        <option>Select Insurance Service</option>
                                        <option value="home">Home Insurance</option>
                                        <option value="auto">Auto Insurance</option>
                                        <option value="life">Life Insurance</option>
                                        <option value="business">Business Insurance</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-calendar-fill"></i></span>
                                        <input type="text" id="datepicker" name="date" className="datepicker" placeholder="mm/dd/yy" required autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <span className="icon"><i className="bi bi-clock-fill"></i></span>
                                        <input type="time" id="timepicker" name="time" required autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group mb-15">
                                    <textarea id="msg" placeholder="Write your message" required></textarea>
                                </div>
                                <div className="form-group terms">
                                    <input type="checkbox" id="terms" required />
                                    <label htmlFor="terms">I agree to all terms and conditions.</label>
                                </div>
                                <button type="submit" className="theme-btn bg-dark" data-loading-text="Please wait...">
                                    <span className="link-effect">
                                        <span className="btn-title">Request Consultation</span>
                                    </span>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-1 lg-d-none"></div>
                    <div className="col-lg-5">
                        <div className="contact-content-wrap">
                            <div className="title-area">
                                <div className="sub-title">
                                    <span><img src='/assets/shark-fin.png' alt='' style={{width:"85%", filter:"brightness(0) invert(1)"}} /></span>Free Consultation
                                </div>
                                <h2 className="sec-title">
                                    Need Help with Your Coverage?<br/> Get a <span className="bold">Free Quote</span>
                                </h2>
                            </div>
                            <div className="contact-img br-10 overlay-anim1">
                                <img className="hover-reveal-item" src="/assets/images/contact/01.jpg" alt="Contact Sharkey Insurance" />
                                <a href="tel:+14065551234" className="contact-info">
                                    <div className="icon"><i className="icon-phone-circle"></i></div>
                                    <div className="number">+1 406-555-1234</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo1;