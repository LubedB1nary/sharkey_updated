import { useRef } from "react";
import Slider from "react-slick";
import data from '../../Data/testimonial1.json';

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true, 
        autoplay: true,
        autoplaySpeed: 4000,             
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
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
        <section className="testimonial-section space-top">
            <div className="shape-mockup jump3 shape-mackup-area" data-left="35%" data-bottom="125px">
                <img src="/assets/shark_1.png" alt="" style={{width:"200px"}} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="testi-content-wrap">
                            <div className="title-area two white">
                                <div className="sub-title">
                                    <span><img src='/assets/shark-fin.png' alt='' style={{width:"85%", filter:"brightness(0) invert(1)"}} /></span>TESTIMONIAL
                                </div>
                                <h2 className="sec-title">
                                    What Our Valued <br/>
                                    <span className="bold"><span className="text-theme2">Clients</span> Say</span> <br/>
                                    About Sharkey Insurance
                                </h2>
                            </div>
                            <div className="pb-30">
                                <div className="border white"></div>
                            </div>
                            <div className="testi-clutch">
                                <img src="/assets/images/testimonial/clutch.png" alt="Clutch Reviews" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testi-slider swiper">
                            <div className="swiper-wrapper cs_slider_gap_301">
                                <Slider ref={sliderRef} {...settings}>
                                    {data.map((item, index) => (
                                        <div key={index} className="swiper-slide">
                                            <div className="testimonial-card">
                                                <div className="inner-box">
                                                    <div className="content">
                                                        <div className="quote-icon">
                                                            <i className="icon-quote"></i>
                                                        </div>
                                                        <div>
                                                            <p className="text">{item.desc}</p>
                                                            <div className="rating">
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-half"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="user-info">
                                                        <img src={item.img} alt="User Image" className="user-image" />
                                                        <div>
                                                            <h5 className="user-name">{item.title}</h5>
                                                            <p className="user-title">{item.subTitle}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <div className="array-button">
                                <button onClick={previous} className="array-prev">
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button onClick={next} className="array-next active">
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="stats-container mt-50 md-pb-80">
                            <div className="stat-box bg-theme br_tl-10 white">
                                <div className="count-box">
                                    <span className="count-number odometer" data-count="6"></span>10k+
                                </div>
                                <p className="text">Policies Issued</p>
                            </div>
                            <div className="stat-box bg-theme2 br_br-10 dark">
                                <div className="count-box">
                                    <span className="count-number odometer" data-count="1.5"></span>1000+
                                </div>
                                <p className="text">Clients Insured</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;