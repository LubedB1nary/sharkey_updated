
const Nwesletter = ({addclass}) => {
    return (
        <section className={addclass}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="newsletter">
                        <div className="p-top-left wow slideInLeft"><img src="/assets/images/newslatter/shape01.png" alt="Newsletter shape"/></div>
                        <div className="p-top-right wow slideInRight"><img src="/assets/images/newslatter/shape02.png" alt="Newsletter shape" /></div>
                        <div className="text">
                            <h3>Do you have imperialistic ambitions?</h3>
                        </div>
                        <div className="contact-info">
                            <div className="email-icon">
                            <i className="bi bi-envelope"></i>
                            </div>
                            <div className="email-details">
                                <p>Send e-Mail</p>
                                <a href="mailto:example@gmail.com">example@sharkeyinsurance.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Nwesletter;