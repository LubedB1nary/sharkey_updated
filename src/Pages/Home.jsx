import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import ContactList from "../Components/ContactInfo/ContactList";
import Nwesletter from "../Components/ContactInfo/Nwesletter";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee from "../Components/Marquee/Marquee";
import Partner1 from "../Components/Partner/Partner1";
 {/* import Pricing1 from "../Components/Pricing/Pricing1"; */}
import Process from "../Components/Process/Process";
import Services1 from "../Components/Services/Services1";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <HeroBanner1
                videotext="<strong>Watch</strong><br>Sharkey Story"
                title="Secure Your Future<br> with <span class='bold'>Sharkey Insurance</span><br> in Montana"
                btnname="Get a Quote"
                btnurl="/contact"
                mainimg="/assets/images/banner/hero-img-1.jpg"
                Clientnumber="10k"
                Client="Trusted by Thousands in Montana"
                customers="Satisfied Policyholders"
                rating="4.9"
                review="(500+ Reviews)"
           ></HeroBanner1>
           <About1
                subtitle="ABOUT SHARKEY INSURANCE"
                title="Your Reliable Insurance Partner<br> <span class='bold'>Protecting You</span><br> in Montana"
                rotatetext="* Home Insurance  * Auto Insurance  * Life Insurance"
                subtitle2="SINCE 1998"
                content="Providing comprehensive coverage with personalized service to safeguard what matters most in your life."
                btnname="Learn More"
                expyear="25"
                exptitle="<span class='fw-semibold'>Years of</span><br>Insurance Excellence"
                avatar="/assets/images/about/about02.jpg"
                name="JOHN SHARKEY"
                designation="Founder & CEO"
           ></About1>
           <Partner1></Partner1>
           <Services1></Services1>
           <Choose1></Choose1>
           <Process></Process>
           <Testimonial></Testimonial>
           <ContactInfo1></ContactInfo1>
           {/* <Pricing1></Pricing1> */}
           <Marquee></Marquee>
           <Blog1></Blog1>
           <ContactList></ContactList>
           <Nwesletter addclass="newsletter-section"></Nwesletter>
        </div>
    );
};

export default Home;