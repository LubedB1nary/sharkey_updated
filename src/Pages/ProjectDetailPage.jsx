import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import ProjectDetails from "../Components/Project/ProjectDetails";

const ProjectDetailPage = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Case Study: Project Details"
                Content="Explore our in-depth case study showcasing how we delivered innovative solutions that drove real results for our client. <br> Discover the strategy, execution, and measurable outcomes that transformed their business."
            ></BreadCumb>
            <ProjectDetails></ProjectDetails>
            <Nwesletter addclass="newsletter-section"></Nwesletter>
        </div>
    );
};

export default ProjectDetailPage;