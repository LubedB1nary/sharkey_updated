import Slider from "react-slick";
import data from '../../Data/testimonial3.json';

const Testimonial3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true, 
        autoplay: true,
        autoplaySpeed: 4000,             
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };   

    return (
        <section className="testimonial-section style-3 space bg-theme2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="testi-title-wrap mb-60 md-mb-40">
                        <div className="title-area mb-0">
                            <div className="sub-title"><span><i className="asterisk"></i></span>Testimonials</div>
                            <h2 className="sec-title mb-0">What is our satisfied clients <br/><span className="bold">feedback</span> about bentol</h2>
                        </div>
                        <div className="review-card">
                            <div className="review-content">
                                <p className="text">REVIEWED ON</p>
                                <div className="clutch"><img src="/assets/images/testimonial/clutch1.png" alt="" /></div>
                            </div>
                            <div className="rating-inner">
                                <span className="stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                </span>
                                <span className="rating-text">4.9 RATINGS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="testi-slide-wrapper">
                        <div className="testi-slider-3 swiper">
                            <div className="swiper-wrapper pb-60 md-pb-40 cs_slider_gap_301">

                            <Slider {...settings}>
                            {data.map((item, index)=>(
                                <div key={index} className="swiper-slide">
                                    <div className="testimonial-card style-3">
                                        <div className="content-inner">
                                            <div className="card-header">
                                                <img src={item.img} alt="User image" className="user-image" />
                                                <div className="user-details">
                                                    <h5 className="user-name">{item.subTitle}</h5>
                                                    <p className="user-title">{item.title}</p>
                                                </div>
                                            </div>
                                            <p className="user-review">
                                            {item.desc}
                                            </p>
                                        </div>
                                        <div className="rating-inner">
                                            <span className="stars">
                                            <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                            </span>
                                            <span className="rating-text">(4.9)</span>
                                        </div>
                                    </div>
                                </div>
                                  ))}
                            </Slider>


                            </div>
                            <div className="swiper-dot text-center">
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial3;