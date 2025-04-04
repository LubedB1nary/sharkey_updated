import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Services1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,     
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };   

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };  
  
    return (
        <section className="service-section overflow-hidden">
        <div className="p-top-left wow slideInLeft">
            <img src="/assets/images/service/shape01.png" alt="Service shape" />
        </div>
        <div className="container space">
            <div className="row align-items-center gy-30">
                <div className="col-lg-4 col-md-6">
                    <div className="service-content-wrap">
                        <div className="title-area two white">
                            <div className="sub-title">
                                <span><img src='/assets/shark-fin.png' alt='' style={{width:"85%", filter:"brightness(0) invert(1)"}} /></span>Insurance Services
                            </div>
                            <div className="title-wrap">
                                <h2 className="sec-title">
                                    Trusted Insurance <br/>
                                    <span className="bold"><span className="text-theme2">Coverage</span></span> <br/>
                                    for Your Future
                                </h2>
                                <p className="sec-text">
                                    Protecting your assets with personalized insurance policies that ensure peace of mind.
                                </p>
                            </div>
                        </div>
                        <div className="service-btn-wrapper">
                            <div className="array-button">
                                <button onClick={previous} className="array-prev">
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button onClick={next} className="array-next active">
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                            <div className="service-btn">
                                <Link to="/service">ALL INSURANCE SERVICES +</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="service-slider swiper">
                        <div className="swiper-wrapper cs_slider_gap_301">
                        <Slider ref={sliderRef} {...settings}>
                            <div className="swiper-slide">
                                <div className="service-single-box bg-theme2">
                                    <div className="inner-box">
                                        <div className="icon">
                                            <i className="bi bi-power"></i>
                                        </div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Home Insurance</h4>
                                        <p className="text">
                                            Comprehensive coverage for your home, ensuring security and support when you need it most.
                                        </p>
                                        <Link to="/service/service-details" className="theme-btn service-btn">
                                            <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">01.</span>
                                        <div className="p-bottom-right wow slideInRight" data-wow-delay="500ms">
                                            <img src="/assets/images/service/box-shape.png" alt="Service shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-single-box white bg-theme">
                                    <div className="inner-box">
                                        <div className="icon">
                                            <i className="bi bi-puzzle"></i>
                                        </div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Auto Insurance</h4>
                                        <p className="text">
                                            Drive confidently with tailored auto insurance plans that keep you safe on the road.
                                        </p>
                                        <Link to="/service/service-details" className="theme-btn service-btn">
                                            <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">02.</span>
                                        <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                            <img src="/assets/images/service/box-shape02.png" alt="Service shape" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-single-box bg-theme2">
                                    <div className="inner-box">
                                        <div className="icon">
                                            <i className="bi bi-power"></i>
                                        </div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Life Insurance</h4>
                                        <p className="text">
                                            Safeguard your familys future with our trusted life insurance solutions designed for your needs.
                                        </p>
                                        <Link to="/service/service-details" className="theme-btn service-btn">
                                            <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">03.</span>
                                        <div className="p-bottom-right wow slideInRight" data-wow-delay="500ms">
                                            <img src="/assets/images/service/box-shape.png" alt="Service shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="service-single-box white bg-theme">
                                    <div className="inner-box">
                                        <div className="icon">
                                            <i className="bi bi-puzzle"></i>
                                        </div>
                                        <div className="border mt-50 xs-mt-40 mb-30"></div>
                                        <h4 className="title">Business Insurance</h4>
                                        <p className="text">
                                            Empower your business with risk management and coverage solutions that protect your enterprise.
                                        </p>
                                        <Link to="/service/service-details" className="theme-btn service-btn">
                                            <i className="bi bi-plus-lg"></i>
                                            <span className="link-text">View Details</span>
                                        </Link>
                                        <span className="serial">04.</span>
                                        <div className="p-top-right wow slideInRight" data-wow-delay="700ms">
                                            <img src="/assets/images/service/box-shape02.png" alt="Service shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="service-contact">
                        <div className="social-proof">
                            <div className="social">
                                <img src="/assets/images/service/social-img01.jpg" alt="Client 01" />
                                <img src="/assets/images/service/social-img02.jpg" alt="Client 02" />
                            </div>
                            <p className="text">
                                Partnering with you to secure your future and protect what matters most.
                            </p>
                        </div>
                        <div className="contact-btn">
                            <Link to="/contact" className="theme-btn">
                                <span className="link-effect">
                                    <span className="effect-1">Contact Us Now</span>
                                    <span className="effect-1">Contact Us Now</span>
                                </span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services1;