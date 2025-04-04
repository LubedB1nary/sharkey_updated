import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Header4({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div className='header-area2 header_nav_03 header-4-area'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container-fluid">
          <div className="cs_top_header_in header-style2">
            <div className="cs_top_header_left header-info">
                <ul className="list-style-1">
                <li><i className="icon icon-bentol"></i>Sharkey Insurance - Providing trusted insurance solutions tailored to secure your future.</li>
                <li><a href="mailto:example@gmail.com"><i className="bi bi-envelope-fill icon"></i>example@gmail.com</a></li>
                  </ul>
            </div>
            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links top-header-social-icon">
                  <ul className="social-icon-one">
                  <li><span className="menu-follow_title">Follow Us :</span></li>
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_header cs_accent_bg">
        <div className="container-fluid">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img src="/assets/images/logo/sharkey_logo_white.png" alt="Logo" />
              </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
            <div className="solutek-btn2 header-2-btn header-right-wrapper header-3-right">
              <div className="header-right">
                    <button onClick={() => setSearchToggle(!searchToggle)} className="search-btn">
                            <span className="icon"><i className="bi bi-search"></i></span>
                        </button>
                        <Link to="/contact" className="theme-btn bg-theme">
                            <span className="link-effect">
                                <span className="effect-1">Get a Quote</span>
                                <span className="effect-1">Get a Quote</span>
                            </span><i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div className={`search-popup ${searchToggle ? 'active' : ''}`} >
            <button onClick={() => setSearchToggle(!searchToggle)} className="close-search style-1"><i className="bi bi-x-lg"></i></button>
            <button onClick={() => setSearchToggle(!searchToggle)} className="close-search"><i className="bi bi-arrow-up"></i></button>
            <form method="post" action="#">
                <div className="form-group">
                    <input id="search1" type="search" name="search-field"  placeholder="Search..."  />
                    <button type="submit"><i className="bi bi-search"></i></button>
                </div>
            </form>
        </div>
  
    </div>
    
  );
}
