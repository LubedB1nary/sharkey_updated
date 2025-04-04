import { Link } from "react-router-dom";

const Choose1 = () => {
    return (
        <section className="choose-section space bg-theme3 overflow-hidden">
            <div className="p-top-right wow slideInRight">
                <img src="/assets/images/choose/shape01.png" alt="Choose shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                        <div className="choose-thumb">
                            <img src="/assets/images/choose/choose01.jpg" alt="Choose Thumb" />
                        </div>
                        <div className="since-box">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <span className="icon">
                                    <img src='/assets/compass.png' alt='' style={{width:"100%",marginTop:"-5%"}} />
                                    </span>
                                </div>
                                <h5 className="since">SINCE 1998</h5>
                                <div className="text">
                                    Providing reliable insurance coverage for your peace of mind.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-content-wrapper">
                            <div className="title-area two">
                                <div className="sub-title">
                                    <span><img src='/assets/shark-fin.png' alt='' style={{width:"85%", filter:"brightness(0) invert(1)"}} /></span>Why Sharkey Insurance
                                </div>
                                <h2 className="sec-title">
                                    We deliver dependable <br />
                                    <span className="bold">insurance</span> solutions
                                </h2>
                                <p className="sec-text text-gray">
                                    Offering personalized policies and expert advice to protect your assets and secure your future.
                                </p>
                            </div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <span className="checkmark">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <p>Experienced agents with local expertise</p>
                                </div>
                                <div className="feature-item">
                                    <span className="checkmark">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <p>Tailored policies for every lifestyle</p>
                                </div>
                            </div>
                            <div className="py-25">
                                <div className="border"></div>
                            </div>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <span className="checkmark">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <p>Responsive claims service and support</p>
                                </div>
                                <div className="feature-item">
                                    <span className="checkmark">
                                        <i className="bi bi-check-lg"></i>
                                    </span>
                                    <p>Competitive rates with comprehensive coverage</p>
                                </div>
                            </div>
                            <Link to="/team" className="theme-btn bg-dark mt-35">
                                <span className="link-effect">
                                    <span className="effect-1">Meet Our Agents</span>
                                    <span className="effect-1">Meet Our Agents</span>
                                </span>
                                <i className="bi bi-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;