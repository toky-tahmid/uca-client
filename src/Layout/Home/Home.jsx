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
           <Countries data={data}></Countries>
           <Testimonials></Testimonials>
           <br />
           <br />
           <Blogs></Blogs>
        <br /> 
        <br />
        
           <Contact></Contact>
        </div>
    );
};

export default Home;