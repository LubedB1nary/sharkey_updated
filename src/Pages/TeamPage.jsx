import About4 from "../Components/About/About4";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import Team3 from "../Components/Team/Team3";

const TeamPage = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Our Team"
                Content="Meet the dedicated professionals at Sharkey Insurance who work tirelessly to protect your future. <br> Discover the expertise and commitment behind our success."
            ></BreadCumb>
            <Team3></Team3>
            <About4></About4>
            <Nwesletter addclass="newsletter-section bg-image3 mt--75"></Nwesletter>
        </div>
    );
};

export default TeamPage;