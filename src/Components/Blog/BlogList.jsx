import { Link } from "react-router-dom";

const BlogList = () => {
    return (
        <section className="blog-list-section space bg-white">
            <div className="container">
                <div className="row gy-30 flex-column-reverse flex-lg-row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="blog-list-left">
                            <div className="blog-list-card">
                                <div className="image overlay-anim1">
                                    <Link to="/blog/blog-details">
                                        <img src="/assets/images/blog/blog-thumb01.jpg" alt="Insurance Tips" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <span className="category">INSURANCE</span>
                                    <h3 className="title">
                                        <Link to="/blog/blog-details">
                                            Expert Tips for Choosing the Right Coverage
                                        </Link>
                                    </h3>
                                    <div className="author-info">
                                        <div className="author">
                                            <img src="/assets/images/blog/social-pr01.jpg" alt="Author Image" />
                                            <span className="name"><span>By</span> Robert Aguilar</span>
                                        </div>
                                        <span className="date">
                                            <i className="icon-calender"></i> August 09, 2024
                                        </span>
                                    </div>
                                    <div className="pt-20 pb-25">
                                        <div className="border dark"></div>
                                    </div>
                                    <p className="description">
                                        Discover how to navigate the complex world of insurance and secure the best protection for your assets in Montana.
                                    </p>
                                    <Link to="/blog/blog-details" className="continue-reading">
                                        Continue Reading
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-list-card">
                                <div className="image overlay-anim1">
                                    <Link to="/blog/blog-details">
                                        <img src="/assets/images/blog/blog-thumb02.jpg" alt="Risk Management" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <span className="category">RISK MANAGEMENT</span>
                                    <h3 className="title">
                                        <Link to="/blog/blog-details">
                                            Understanding Risk Management in Insurance
                                        </Link>
                                    </h3>
                                    <div className="author-info">
                                        <div className="author">
                                            <img src="/assets/images/blog/social-pr02.jpg" alt="Author Image" />
                                            <span className="name"><span>By</span> Amy Renner</span>
                                        </div>
                                        <span className="date">
                                            <i className="icon-calender"></i> August 09, 2024
                                        </span>
                                    </div>
                                    <div className="pt-20 pb-25">
                                        <div className="border dark"></div>
                                    </div>
                                    <p className="description">
                                        Learn how effective risk management can lower your premiums and protect you against unforeseen events.
                                    </p>
                                    <Link to="/blog/blog-details" className="continue-reading">
                                        Continue Reading
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-list-card">
                                <div className="image overlay-anim1">
                                    <Link to="/blog/blog-details">
                                        <img src="/assets/images/blog/blog-thumb03.jpg" alt="Innovative Solutions" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <span className="category">INNOVATION</span>
                                    <h3 className="title">
                                        <Link to="/blog/blog-details">
                                            Innovative Insurance Solutions for Montana
                                        </Link>
                                    </h3>
                                    <div className="author-info">
                                        <div className="author">
                                            <img src="/assets/images/blog/social-pr03.jpg" alt="Author Image" />
                                            <span className="name"><span>By</span> David Lucas</span>
                                        </div>
                                        <span className="date">
                                            <i className="icon-calender"></i> August 09, 2024
                                        </span>
                                    </div>
                                    <div className="pt-20 pb-25">
                                        <div className="border dark"></div>
                                    </div>
                                    <p className="description">
                                        Explore how technological innovations are transforming insurance policies and enhancing customer experience in Montana.
                                    </p>
                                    <Link to="/blog/blog-details" className="continue-reading">
                                        Continue Reading
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-list-card">
                                <div className="image overlay-anim1">
                                    <Link to="/blog/blog-details">
                                        <img src="/assets/images/blog/blog-thumb04.jpg" alt="Financial Planning" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <span className="category">FINANCIAL PLANNING</span>
                                    <h3 className="title">
                                        <Link to="/blog/blog-details">
                                            Financial Planning & Insurance: A Winning Combo
                                        </Link>
                                    </h3>
                                    <div className="author-info">
                                        <div className="author">
                                            <img src="/assets/images/blog/social-pr02.jpg" alt="Author Image" />
                                            <span className="name"><span>By</span> Amy Renner</span>
                                        </div>
                                        <span className="date">
                                            <i className="icon-calender"></i> August 09, 2024
                                        </span>
                                    </div>
                                    <div className="pt-20 pb-25">
                                        <div className="border dark"></div>
                                    </div>
                                    <p className="description">
                                        Uncover strategies to integrate financial planning with insurance for a secure future.
                                    </p>
                                    <Link to="/blog/blog-details" className="continue-reading">
                                        Continue Reading
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-list-card">
                                <div className="image overlay-anim1">
                                    <Link to="/blog/blog-details">
                                        <img src="/assets/images/blog/blog-thumb05.jpg" alt="Corporate Insurance" />
                                    </Link>
                                </div>
                                <div className="card-content">
                                    <span className="category">CORPORATE INSURANCE</span>
                                    <h3 className="title">
                                        <Link to="/blog/blog-details">
                                            Corporate Insurance Solutions for Montana Businesses
                                        </Link>
                                    </h3>
                                    <div className="author-info">
                                        <div className="author">
                                            <img src="/assets/images/blog/social-pr01.jpg" alt="Author Image" />
                                            <span className="name"><span>By</span> Robert Aguilar</span>
                                        </div>
                                        <span className="date">
                                            <i className="icon-calender"></i> August 09, 2024
                                        </span>
                                    </div>
                                    <div className="pt-20 pb-25">
                                        <div className="border dark"></div>
                                    </div>
                                    <p className="description">
                                        Discover how customized corporate insurance policies can protect your business assets and foster sustainable growth.
                                    </p>
                                    <Link to="/blog/blog-details" className="continue-reading">
                                        Continue Reading
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar-widget blog-sidebar pl-15 lg-pl-0">
                            <div className="widget-box sidebar-search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" name="search" placeholder="Search..." required />
                                    <button type="submit">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="sidebar-category-list">
                                <h4 className="sidebar-title"> Category </h4>
                                <div className="widget-box">
                                    <ul className="categories">
                                        <li><a href="#">Insurance <span>(8)</span></a></li>
                                        <li><a href="#">Risk Management <span>(4)</span></a></li>
                                        <li><a href="#">Financial Planning <span>(5)</span></a></li>
                                        <li><a href="#">Innovations <span>(3)</span></a></li>
                                        <li><a href="#">Corporate Solutions <span>(2)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-latest-posts">
                                <h4 className="sidebar-title"> Latest Posts </h4>
                                <div className="widget-box">
                                    <div className="latest-posts">
                                        <div className="post">
                                            <a href="#">
                                                <img src="/assets/images/blog/latest-details01.jpg" alt="Post Image" />
                                            </a>
                                            <div className="post-content">
                                                <a href="#">Expert Tips for Choosing the Right Coverage</a>
                                                <p>August 09, 2024</p>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <a href="#">
                                                <img src="/assets/images/blog/latest-details02.jpg" alt="Post Image" />
                                            </a>
                                            <div className="post-content">
                                                <a href="#">Understanding Risk Management in Insurance</a>
                                                <p>August 09, 2024</p>
                                            </div>
                                        </div>
                                        <div className="post">
                                            <a href="#">
                                                <img src="/assets/images/blog/latest-details03.jpg" alt="Post Image" />
                                            </a>
                                            <div className="post-content">
                                                <a href="#">Innovative Insurance Solutions for Montana</a>
                                                <p>August 09, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-tags">
                                <h4 className="sidebar-title"> Tags </h4>
                                <div className="widget-box">
                                    <div className="tag-list">
                                        <span className="tag">INSURANCE</span>
                                        <span className="tag active">RISK</span>
                                        <span className="tag">FINANCE</span>
                                        <span className="tag">CORPORATE</span>
                                        <span className="tag">PLANNING</span>
                                        <span className="tag">MARKETING</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-newsletter">
                                <h4 className="sidebar-title"> Newsletter </h4>
                                <div className="widget-box mb-0">
                                    <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                        <div className="form-group">
                                            <input type="email" name="email" className="email mb-0" placeholder="Enter email" autoComplete="on" required />
                                            <button type="submit">
                                                <i className="bi bi-send"></i>
                                                <span className="btn-title"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogList;