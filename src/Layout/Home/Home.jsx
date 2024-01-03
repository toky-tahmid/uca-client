import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Countries from "../Countries/Countries";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blog/Blogs";

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner></Banner>
           <div id="/country">
           <Countries data={data}></Countries>
           </div>
           <div id="testimonials">
           <Testimonials></Testimonials>
           </div>
           <br />
           <br />
           <div id="blogs">
           <Blogs></Blogs>
           </div>
        <br /> 
        <br />
           <div id="contact">
           <Contact></Contact>
           </div>
        </div>
    );
};

export default Home;