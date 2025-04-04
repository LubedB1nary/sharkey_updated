import React from "react";

const Brances = () => {
  return (
    <section className="branch-section space bg-white">
      <div className="container">
        <div className="title-area three text-center">
          <div className="sub-title">
            <span><i className="asterisk"></i></span>OUR BRANCHES
          </div>
          <h2 className="sec-title">Visit our <span className="bold">branch offices</span></h2>
          <p className="sec-text text-gray">
            Explore our regional offices for personalized service in Montana, Arizona, and Idaho.
          </p>
        </div>
        <div className="row gy-30">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="branch-single-box">
              <div className="image-box">
                <div className="image">
                  <img src="/assets/images/resource/branch01.jpg" alt="Billings Head Quarters" />
                </div>
              </div>
              <div className="branch-content">
                <div className="branch-header">
                  <h4 className="location-name">Billings, Montana</h4>
                  <p className="location-type">HEAD QUARTERS</p>
                </div>
                <div className="divider"></div>
                <p className="address">
                  1234 Big Sky Ave, Billings, MT 59101, USA
                </p>
                <div className="phone">
                  <a href="tel:+14065551234">+1 406-555-1234</a>
                </div>
                <div className="email">
                  <a href="mailto:info@sharkeyinsurance.com">info@sharkeyinsurance.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="branch-single-box">
              <div className="image-box">
                <div className="image">
                  <img src="/assets/images/resource/branch02.jpg" alt="Phoenix Branch Office" />
                </div>
              </div>
              <div className="branch-content">
                <div className="branch-header">
                  <h4 className="location-name">Phoenix, Arizona</h4>
                  <p className="location-type">BRANCH OFFICE</p>
                </div>
                <div className="divider"></div>
                <p className="address">
                  5678 Desert Rd, Phoenix, AZ 85001, USA
                </p>
                <div className="phone">
                  <a href="tel:+16025555678">+1 602-555-5678</a>
                </div>
                <div className="email">
                  <a href="mailto:support@sharkeyinsurance.com">support@sharkeyinsurance.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="branch-single-box">
              <div className="image-box">
                <div className="image">
                  <img src="/assets/images/resource/branch03.jpg" alt="Boise Branch Office" />
                </div>
              </div>
              <div className="branch-content">
                <div className="branch-header">
                  <h4 className="location-name">Boise, Idaho</h4>
                  <p className="location-type">BRANCH OFFICE</p>
                </div>
                <div className="divider"></div>
                <p className="address">
                  9012 Mountain View Dr, Boise, ID 83702, USA
                </p>
                <div className="phone">
                  <a href="tel:+12085559012">+1 208-555-9012</a>
                </div>
                <div className="email">
                  <a href="mailto:support@sharkeyinsurance.com">support@sharkeyinsurance.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brances;