
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import nwbg from '../assets/network-bg.webp'

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {VscCompassActive, VscGift} from 'react-icons/vsc'
import icon from '../assets/Icon-w.svg'


const About = () => {
    
    // useEffect(() => {
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    //   }, []);

    return(
        <motion.main
        key="about"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:.6}}
        >
            <Nav className='topppp'/><div className="md:my-20 block">

            </div>
                <div className="mb-12">
                    <img className="w-full h-[40vh] botttt object-cover" src={nwbg} />
                    <motion.div
                    initial={{opacity:0, y:40}}
                    whileInView={{opacity:'100', y:0}}
                    transition={{duration:.6}}
                    className="w-full md:mt-16 pointer-events-none absolute top-0 botttt h-[40vh] flex flex-col justify-center items-center">
                        <h1 className="hd text-white font-medium text-3xl shadow-xl md:text-5xl mb-8 topppp">About Teqinfinity INC</h1>
                        <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                    </motion.div> 
                </div>
            <div className="w-10/12 md:w-4/6 py-6 block mx-auto">
                <h2 className="text-2xl md:text-3xl hd">Who we are?</h2>
                <p className="text-black/70 leading-6 mt-4 mb-10 md:mt-6">
                    The world is undergoing rapid changes characterized by groundbreaking technological advancements, dynamic shifts in economies, and a transforming global environment. These developments present challenges for our employees, clients, partners, and communities as they navigate this evolving landscape. At Teqinfinity, we continuously strive to surpass limits by utilizing our expertise, experience, and innovative network to empower enterprises, individuals, and communities in building a better future, quickly and collaboratively. To achieve this, we leverage our strengths in technology, talent, and a strong partner ecosystem to eliminate any obstacles to progress and drive business transformation. Our unwavering commitment centers around a single objective: ensuring our clients achieve sustainable growth ahead of schedule.We aim to harness technology to foster a sense of closeness, warmth, and understanding through the experiences we provide. Our mission is to unlock new possibilities and positively impact every individual we encounter. Moreover, our net-zero commitment revolves around embracing renewable energy, efficient waste management, and adopting circular economy practices to promote a healthier, safer, and more sustainable business.
                </p>
                <Link className="bg-tqred md:scale-90 hover:scale-95 anim pointer-events-auto text-white px-12 py-3 md:py-4 text-sm md:text-base" to='/about-us'>View Services</Link>
            </div>

            <div className="w-10/12 md:w-4/6 py-8 mt-8 block mx-auto">
                <h2 className="text-2xl md:text-3xl hd">What do we provide?</h2>
                <p className="text-black/70 leading-6 mt-4 md:mt-6">
                    In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost - they need an innovative partner that can quickly turn ideas and projects into value-generators with minimal cash burn, and that is what we do. We are a single provider for managing and securing mission-critical IT services. We range from providing managed services to software solutions and applications for your business.
                </p>
            </div>
            
            <div className="w-10/12 md:w-4/6 mt-10 md:mt-12 mb-24 mx-auto">
                <div className="mt-8 flex flex-wrap gap-12 justify-center">
                    <div className="flex flex-col justify-center text-center items-center gap-4 w-[20rem] h-[20rem] bg-tqblue hover:scale-105 anim rounded-3xl text-white">
                        <img className="w-[50px]" src={icon} />
                        <h3 className="text-2xl font-semibold">Who we are?</h3>
                        <p className="w-10/12 opacity-80">In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost </p>
                    </div>
                    <div className="flex flex-col justify-center text-center items-center gap-4 w-[20rem] h-[20rem] bg-tqblue hover:scale-105 anim rounded-3xl text-white">
                        <VscCompassActive size='50px'/>
                        <h3 className="text-2xl font-semibold">What do we provide?</h3>
                        <p className="w-10/12 opacity-80">In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost </p>
                    </div>
                    <div className="flex flex-col justify-center text-center items-center gap-4 w-[20rem] h-[20rem] bg-tqblue hover:scale-105 anim rounded-3xl text-white">
                        <VscGift size='50px'/>
                        <h3 className="text-2xl font-semibold">Why Us?</h3>
                        <p className="w-10/12 opacity-80">In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost </p>
                    </div>
                </div>
            <div className="flex flex-col mt-20 gap-2">
                <h3 className="text-3xl hd font-semibold mb-8">Some of our expert Services</h3>
                <Link to='/network-services' className="py-2 text-black/70">Network Services</Link>
                <Link to='/cloud-services' className="py-2 text-black/70">Cloud Services</Link>
                <Link to='/datacenter-services' className="py-2 text-black/70">Datacenter Infrastructure Services</Link>
                <Link to='/end-user-services' className="py-2 text-black/70">End User Services</Link>
                <Link to='/software-development' className="py-2 text-black/70">Software Development</Link>
            </div>
            </div>


            <Footer/>
        </motion.main>
    )
}

export default About;