import BreadCumb from "../Components/Common/BreadCumb";
import Brances from "../Components/ContactInfo/Brances";
import ContactInfo3 from "../Components/ContactInfo/ContactInfo3";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Contact Us"
                Content="Get in touch with Sharkey Insurance. <br> We’re here to help you secure your future."
            ></BreadCumb>
            <ContactInfo3></ContactInfo3>
            <Brances></Brances>
            <Nwesletter addclass="newsletter-section bg-white"></Nwesletter>
        </div>
    );
};

export default ContactPage;