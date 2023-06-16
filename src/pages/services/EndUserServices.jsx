import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const EndUserServices = () => {
    
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
                <h1 className="text-5xl my-8 hd text-center">End User Services</h1>
                <p className="text-center">
                    Build your Cloud Journey with TeqInifity Cloud Platform services. Our Cloud Platform Services help  enhances your enterprise Cloud experience by leveraging below services: 
                </p>
                <ul className="lil list-disc mt-8 leading-10 text-xl">
                    <li>Virtual Desktop Infrastructure</li>
                    <li>Desktop and Mobile device management</li>
                    <li>Directory Services - Active Directory, ADFS, Azure AD</li>
                    <li>Messaging and Collaboration</li>
                    <li>Desktop Infrastructure Automation - SCCM</li>
                    <li>Endpoint Security - Antivirus & Malware protection</li>    
                </ul>
            </div>
            <Footer/>
        </motion.main>
    )
}

export default EndUserServices;