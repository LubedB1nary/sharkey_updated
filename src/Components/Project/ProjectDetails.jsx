import { Link } from "react-router-dom";

const ProjectDetails = () => {
    return (
        <section className="project-details space bg-white">
            <div className="container">
                <div className="row gy-30">
                    <div className="col-xl-4 col-lg-4">
                        <div className="project-sidebar">
                            <div className="sidebar-widget">
                                <div className="widget-box project-details-box">
                                    <h4 className="title">Project Details</h4>
                                    <div className="content">
                                        <ul>
                                            <li><strong>Clients :</strong> Rocky Mountain Insurance</li>
                                            <li><strong>Start Date :</strong> 05 April, 2023</li>
                                            <li><strong>End Date :</strong> 01 August, 2023</li>
                                            <li><strong>Tags :</strong> Insurance, Risk Management, Montana</li>
                                            <li><strong>Duration :</strong> 04 months</li>
                                            <li>
                                                <strong>Client Website :</strong>{" "}
                                                <a href="http://www.rockymountaininsurance.com" target="_blank" rel="noopener noreferrer">
                                                    www.rockymountaininsurance.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget-box consulting-box">
                                    <div className="inner-box">
                                        <h4 className="title">
                                            Need any service <br /> Business Consulting?
                                        </h4>
                                        <p className="text">Feel free to contact us and drop a message</p>
                                        <div className="pt-25 mb-50">
                                            <div className="border"></div>
                                        </div>
                                        <div className="contact-info">
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="icon-phone-circle-small"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Call Us Now</p>
                                                    <a href="tel:+14074014421">+1 407 401 4421</a>
                                                </div>
                                            </div>
                                            <div className="contact-item">
                                                <div className="icon">
                                                    <i className="bi bi-envelope-fill"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Send E-Mail</p>
                                                    <a href="mailto:contact@rockymountaininsurance.com">contact@rockymountaininsurance.com</a>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/contact" className="theme-btn bg-transparent mt-50">
                                            <span className="link-effect">
                                                <span className="effect-1">Contact Us</span>
                                                <span className="effect-1">Contact Us</span>
                                            </span>
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="project-details__content">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="details__content-right">
                                        <div className="details-image br-10 overflow-hidden mb-30 overlay-fade">
                                            <img src="/assets/images/project/details01.jpg" alt="" />
                                        </div>
                                        <h3 className="title">Custom Coverage Solutions</h3>
                                        <p className="mb-15">
                                            We partnered with Rocky Mountain Insurance to develop a tailored coverage plan for Montana businesses. Our strategy integrated local market insights with advanced risk management to address regional challenges effectively.
                                        </p>
                                        <p className="mb-40">
                                            Leveraging innovative technologies and expert consultation, we streamlined the claims process and elevated customer satisfaction. This project set a new benchmark for personalized insurance services in Montana.
                                        </p>
                                        <h3 className="title">Project Benefits</h3>
                                        <p className="mb-25">
                                            Our comprehensive solution delivered measurable improvements in risk management, operational efficiency, and customer trust.
                                        </p>
                                        <div className="featured-list mb-35">
                                            <ul className="list-style-1">
                                                <li>Optimized claims processing and risk assessment</li>
                                                <li>Enhanced customer support and satisfaction</li>
                                                <li>Tailored coverage for local business needs</li>
                                                <li>Robust risk management strategies</li>
                                            </ul>
                                        </div>
                                        <div className="row gy-30 align-items-center mb-50">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="details-image-box overlay-anim1">
                                                    <img className="img1" src="/assets/images/project/project-d1.jpg" alt="" />
                                                    <h5 className="title">Local Market Analysis</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="details-image-box overlay-anim1">
                                                    <img className="img1" src="/assets/images/project/project-d2.jpg" alt="" />
                                                    <h5 className="title">Risk Assessment</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="title">Complete Result</h3>
                                        <p>
                                            Our custom solution significantly improved operational efficiency and customer satisfaction, reinforcing the value of personalized insurance services in the Montana market.
                                        </p>
                                        <div className="featured-list">
                                            <ul className="list-style-2">
                                                <li>Optimized claims processing</li>
                                                <li>Increased operational efficiency</li>
                                                <li>Stronger customer relationships</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="py-40">
                                        <div className="border"></div>
                                    </div>
                                    <div className="details__pagination-box">
                                        <ul className="details__pagination">
                                            <li className="previous">
                                                <Link to="/project/project-details" aria-label="Previous">
                                                    <i className="bi bi-arrow-left"></i>
                                                    <span>Previous Projects</span>
                                                </Link>
                                            </li>
                                            <li className="next">
                                                <Link to="/project/project-details" aria-label="Next">
                                                    <span>Next Projects</span>
                                                    <i className="bi bi-arrow-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;