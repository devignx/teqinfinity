import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import nwbg from '../assets/network-bg.webp'
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    
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
            <Nav className='topppp'/><div className="md:mt-36   "></div>
            <div className="w-10/12 md:w-4/6 mt-10 md:mt-12 mx-auto">
                <h2 className="text-2xl md:text-3xl hd">Who we are?</h2>
                <p className="text-black/70 text-sm leading-6 mt-4 md:mt-6">
                    The world is undergoing rapid changes characterized by groundbreaking technological advancements, dynamic shifts in economies, and a transforming global environment. These developments present challenges for our employees, clients, partners, and communities as they navigate this evolving landscape. At Teqinfinity, we continuously strive to surpass limits by utilizing our expertise, experience, and innovative network to empower enterprises, individuals, and communities in building a better future, quickly and collaboratively. To achieve this, we leverage our strengths in technology, talent, and a strong partner ecosystem to eliminate any obstacles to progress and drive business transformation. Our unwavering commitment centers around a single objective: ensuring our clients achieve sustainable growth ahead of schedule.We aim to harness technology to foster a sense of closeness, warmth, and understanding through the experiences we provide. Our mission is to unlock new possibilities and positively impact every individual we encounter. Moreover, our net-zero commitment revolves around embracing renewable energy, efficient waste management, and adopting circular economy practices to promote a healthier, safer, and more sustainable business.
                </p>
            </div>
            <div className="w-10/12 md:w-4/6 mt-10 md:mt-12 mx-auto">
                <h2 className="text-2xl md:text-3xl hd">What de we provide?</h2>
                <p className="text-black/70 text-sm leading-6 mt-4 md:mt-6">
                    In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost - they need an innovative partner that can quickly turn ideas and projects into value-generators with minimal cash burn, and that is what we do. We are a single provider for managing and securing mission-critical IT services. We range from providing managed services to software solutions and applications for your business.
                </p>
            </div>
            <Footer/>
        </motion.main>
    )
}

export default About;