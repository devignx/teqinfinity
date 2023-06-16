import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const CloudServices = () => {
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <motion.main
        key="about"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.6}}
        >
            <Nav/>
            <div className="w-11/12 md:w-4/6 my-36 mx-auto">
                <h1 className="text-5xl hd text-center">Cloud Services</h1>
                <h3 className="text-xl my-3 mt-12 font-semibold">
                    Cloud Platform Services (AWS, Azure, GCP)
                </h3>
                <p>
                    Build your Cloud Journey with TeqInifity Cloud Platform services. Our Cloud Platform Services help  enhances your enterprise Cloud experience by leveraging below services: 
                </p>
                <ul className="lil list-disc mt-8 leading-10 text-xl">
                    <li>Cloud Infrastructure Services</li>
                    <li>Hybrid and Multi-cloud deployment</li>
                    <li>Cloud Transition & Transformation</li>
                    <li>Application Modernization</li>
                    <li>Cloud Maturity Assessment</li>
                    <li>Cloud DevOps</li>
                    <li>Cloud FinOps</li>
                    <li>Cloud Operating model
                    </li>
                </ul>
            </div>
            <Footer/>
        </motion.main>
    )
}

export default CloudServices;