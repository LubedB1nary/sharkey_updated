import React from "react";

const About5 = () => {
  return (
    <section className="benifits-section space bg-theme3">
      <div className="p-top-left wow slideInLeft">
        <img src="/assets/images/resource/shape01.png" alt="Benefits shape" />
      </div>
      <div className="container">
        <div className="row gy-30 align-items-center">
          <div className="col-lg-6">
            <div className="benifits-content-wrapper">
              <div className="title-area twoT">
                <div className="sub-title">
                  <span>
                    <i className="asterisk"></i>
                  </span>
                  SERVICE BENEFITS
                </div>
                <h2 className="sec-title">
                  Introducing our dedicated <br /> expert{" "}
                  <span className="bold">insurance specialists</span>
                </h2>
              </div>
              <div className="pb-30">
                <div className="border"></div>
              </div>
              <div className="benifit-item">
                <span className="checkmark">
                  <i className="icon-checkmark2"></i>
                </span>
                <div className="content">
                  <h5 className="title">Personalized Consultation</h5>
                  <p className="text">
                    Receive tailored advice and strategic planning for optimal
                    coverage.
                  </p>
                </div>
              </div>
              <div className="benifit-item">
                <span className="checkmark">
                  <i className="icon-checkmark2"></i>
                </span>
                <div className="content">
                  <h5 className="title">Efficient Claims Processing</h5>
                  <p className="text">
                    Experience hassle-free claims handling with our dedicated
                    support team.
                  </p>
                </div>
              </div>
              <div className="benifit-item">
                <span className="checkmark">
                  <i className="icon-checkmark2"></i>
                </span>
                <div className="content">
                  <h5 className="title">Comprehensive Coverage</h5>
                  <p className="text">
                    Enjoy broad protection that adapts to your evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="benifit-image-box">
              <img
                className="image wow img-custom-anim-right"
                src="/assets/images/resource/benefit01.jpg"
                alt="Benefit image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About5;