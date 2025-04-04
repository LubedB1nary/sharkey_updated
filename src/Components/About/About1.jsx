import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const About1 = ({ subtitle, title, rotatetext, subtitle2, content, btnname, expyear, exptitle, avatar, name, designation }) => {
    return (
        <section className="about-section space bg-white" id="about-section">
            <div className="container">
                <div className="row gy-30">
                    <div className="col-lg-5">
                        <div className="about-content-wrap">
                            <div className="title-area">
                                <div className="sub-title"><span><img src='/assets/shark-fin.png' alt='' style={{width:"85%", filter:"brightness(0) invert(1)"}} /></span>{subtitle}</div>
                                <h2 className="sec-title">{parse(title)}</h2>
                            </div>
                            <div className="about-img">
                                <img className="br-10" data-tilt src="/assets/images/about/about01.jpg" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="about-middle-wrap ml-60 ltl-ml-0">
                            <div className="circle-box spin2">
                                <div className="logo-box"  style={{display:"flex", alignItems:"center", justifyContent:"center"}}><img src="/assets/anchor.png" style={{width:"65%"}} alt="" /></div>
                                <div className="text-inner text-inner-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="250.5" height="250.5" viewBox="0 0 250.5 250.5">
                                        <path d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" id="e-path-35ee1b2"></path>
                                        <text>
                                            <textPath id="e-text-path-35ee1b2" href="#e-path-35ee1b2" startOffset="0%">{rotatetext}</textPath>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div className="about-info">
                                <h5 className="since">{subtitle2}</h5>
                                <p className="text">{parse(content)}</p>
                                <Link to="/about" className="theme-btn bg-white mt-30">
                                    <span className="link-effect">
                                        <span className="effect-1">{btnname}</span>
                                        <span className="effect-1">{btnname}</span>
                                    </span><i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 d-flex align-items-end">
                        <div className="about-right-wrap">
                            <div className="experience-card">
                                <div className="years">
                                    <span className="count-number odometer" data-count="18">{expyear}</span>
                                </div>
                                <div className="text">{parse(exptitle)}</div>
                            </div>
                            <div className="profile-card overlay-anim1">
                                <img className="image" src={avatar} alt={name} />
                                <div className="profile-details">
                                    <h5 className="name">{name}</h5>
                                    <p className="title">{designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;