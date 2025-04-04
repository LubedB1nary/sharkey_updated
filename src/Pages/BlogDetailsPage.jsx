import BlogDetails from "../Components/Blog/BlogDetails";
import BreadCumb from "../Components/Common/BreadCumb";
import Nwesletter from "../Components/ContactInfo/Nwesletter";

const BlogDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Insurance Insights"
                Content="Discover the latest trends and expert advice on insurance and risk management, tailored specifically for Montana."
            ></BreadCumb>      
            <BlogDetails></BlogDetails>
            <Nwesletter addclass="newsletter-section"></Nwesletter>            
        </div>
    );
};

export default BlogDetailsPage;