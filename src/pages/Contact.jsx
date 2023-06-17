import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";

import contact from '../assets/contact.webp'

import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoFacebook,IoLogoTwitter} from 'react-icons/io5'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
    
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
            {/* <img className="w-screen object-cover h-[70vh]" src={contact} /> */}
            <div className="w-11/12 md:w-4/6 mt-36 mx-auto">
                <h1 className="hd text-5xl  text-center">Contact</h1>
                <p className="block text-center mt-16">We are a single provider for managing and securing mission-critical IT services. We range from providing managed services to software solutions and applications for your business.</p>
                <a href="/" className="bg-tqred mx-auto hover:scale-105 mt-8 anim pointer-events-auto text-white px-12 py-3 md:py-4 block w-fit  text-sm md:text-base">Book an Appointment</a>
            </div>
            <div className="flex justify-center w-full text-tqblue gap-4 mt-24">
                <a href=""><AiFillInstagram size='60px'/></a>
                <a href=""><IoLogoWhatsapp size='60px'/></a>
                <a href=""><IoLogoFacebook size='60px'/></a>
                <a href=""><IoLogoTwitter size='60px'/></a>
            </div>
            <p className="text-xs fixed bottom-8 centerh">Copyrights Recieved &copy; 2023</p>
        </motion.main>
    )
}

export default Contact;