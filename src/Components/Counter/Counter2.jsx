const Counter2 = () => {
    return (
        <section className="counter-section py-80 bg-theme2">
            <div className="p-top-left wow slideInLeft">
                <img src="/assets/images/counter/shape01.png" alt="Counter shape" />
            </div>
            <div className="p-bottom-right wow slideInRight">
                <img src="/assets/images/counter/shape02.png" alt="Counter shape" />
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="title-area mb-0 md-mb-40">
                            <h2 className="sec-title mb-0">
                                Our achievements from 30+ years of trusted service
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="achievement-stats">
                            <div className="stat-item">
                                <div className="count-box">
                                    <span className="count-number odometer" data-count="10">10</span>k+
                                </div>
                                <p className="text">Policies Issued</p>
                            </div>
                            <div className="stat-item">
                                <div className="count-box">
                                    <span className="count-number odometer" data-count="97">97</span>%
                                </div>
                                <p className="text">Customer Satisfaction</p>
                            </div>
                            <div className="stat-item">
                                <div className="count-box">
                                    <span className="count-number odometer" data-count="100">100</span>
                                </div>
                                <p className="text">Expert Agents</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter2;