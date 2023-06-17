import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import bg6 from '../../assets/bg-6.avif'

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
            <div className="w-11/12 md:w-4/6 my-16 md:my-36 mx-auto">
                <h1 className="text-3xl md:text-5xl hd text-center">End User Services</h1>
                <img className="w-screen rounded-xl mt-8 object-cover h-[50vh]" src={bg6} />
                <h3 className="text-xl my-3 mt-12 font-semibold">
                End User Services
                </h3>
                <p className=" mt-4">
                    Build your Cloud Journey with TeqInifity Cloud Platform services. Our Cloud Platform Services help  enhances your enterprise Cloud experience by leveraging below services: 
                </p>
                <ul className="lil list-disc mt-8 leading-10 ml-8">
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