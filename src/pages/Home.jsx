import Nav from "../components/Nav";
import Footer from "../components/Footer";

import nwbg from '../assets/network-bg.webp'
import bg1 from '../assets/bg-1.webp'
import bg4 from '../assets/bg-4.webp'
import bg2 from '../assets/bg-2.webp'
import bg6 from '../assets/bg-6.avif'

import icon from '../assets/Icon-w.svg'
import { Link } from "react-router-dom";
import icon1 from '../assets/Icon.svg'
import chain from '../assets/chain.svg'

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import {VscCompassActive, VscGift} from 'react-icons/vsc'
import Carousel from "../components/Carousel";

const Home = () => {
    
    const item = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0 },
        viewport:{ once: true },
    };
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return(
        <AnimatePresence>
            <motion.main
            key="hom"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            >
                <Nav className='toppppp'/><div className="md:mt-12"></div>
                <Carousel>
                    <div className="w-screen relative shrink-0">
                        <img className="w-screen shrink-0 brightness-[.4]  h-[70vh] botttt object-cover" src={bg6} />
                        <motion.div
                        initial={{opacity:0.1, y:40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}
                        className="w-full md:mt-12 pointer-events-none absolute top-0 botttt h-[70vh] flex flex-col justify-center items-center">
                            <h1 className="hd text-white font-medium text-3xl md:text-5xl shadow-xl mb-8 toppp">Welcome to Teqinfinity INC</h1>
                            <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                            <Link className="bg-white md:scale-90 hover:scale-95 anim pointer-events-auto text-tqred px-12 py-3 md:py-4 text-sm md:text-base" to='/about-us'>Learn More</Link>
                        </motion.div> 
                    </div>
                    <div className="w-screen relative shrink-0">
                        <img className="w-screen shrink-0 brightness-[.5]  h-[70vh] botttt object-cover" src={bg4} />
                        <motion.div
                        initial={{opacity:0.1, y:40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}
                        className="w-full md:mt-12 pointer-events-none absolute top-0 botttt h-[70vh] flex flex-col justify-center items-center">
                            <h1 className="hd text-white font-medium text-3xl md:text-5xl shadow-xl mb-8 toppp">Network Services</h1>
                            <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                            <Link className="bg-white md:scale-90 hover:scale-95 anim pointer-events-auto text-tqred px-12 py-3 md:py-4 text-sm md:text-base" to='/network-services'>Learn More</Link>
                        </motion.div> 
                    </div>
                    <div className="w-screen relative shrink-0">
                        <img className="w-screen shrink-0 brightness-[.5]  h-[70vh] botttt object-cover" src={bg4} />
                        <motion.div
                        initial={{opacity:0.1, y:40}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration:1}}
                        className="w-full md:mt-12 pointer-events-none absolute top-0 botttt h-[70vh] flex flex-col justify-center items-center">
                            <h1 className="hd text-white font-medium text-3xl md:text-5xl shadow-xl mb-8 toppp">Cloud Services</h1>
                            <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                            <Link className="bg-white md:scale-90 hover:scale-95 anim pointer-events-auto text-tqred px-12 py-3 md:py-4 text-sm md:text-base" to='/cloud-services'>Learn More</Link>
                        </motion.div> 
                    </div>
                    <div className="w-screen relative shrink-0">
                        <img className="w-screen shrink-0 brightness-[.5]  h-[70vh] botttt object-cover" src={bg4} />
                        <motion.div
                        initial={{opacity:0.1, y:40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}
                        className="w-full md:mt-12 pointer-events-none absolute top-0 botttt h-[70vh] flex flex-col justify-center items-center">
                            <h1 className="hd text-white font-medium text-3xl md:text-5xl shadow-xl mb-8 toppp">Data center Services</h1>
                            <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                            <Link className="bg-white md:scale-90 hover:scale-95 anim pointer-events-auto text-tqred px-12 py-3 md:py-4 text-sm md:text-base" to='/datacenter-services'>Learn More</Link>
                        </motion.div> 
                    </div>
                    <div className="w-screen relative shrink-0">
                        <img className="w-screen shrink-0 brightness-[.5]  h-[70vh] botttt object-cover" src={bg4} />
                        <motion.div
                        initial={{opacity:0.1, y:40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}
                        className="w-full md:mt-12 pointer-events-none absolute top-0 botttt h-[70vh] flex flex-col justify-center items-center">
                            <h1 className="hd text-white font-medium text-3xl md:text-5xl shadow-xl mb-8 toppp">End User Services</h1>
                            <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                            <Link className="bg-white md:scale-90 hover:scale-95 anim pointer-events-auto text-tqred px-12 py-3 md:py-4 text-sm md:text-base" to='/end-user-services'>Learn More</Link>
                        </motion.div> 
                    </div>
                    <div className="w-screen relative shrink-0">
                        <img className="w-screen shrink-0 brightness-[.5]  h-[70vh] botttt object-cover" src={bg4} />
                        <motion.div
                        initial={{opacity:0.1, y:40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1}}
                        className="w-full md:mt-12 pointer-events-none absolute top-0 botttt h-[70vh] flex flex-col justify-center items-center">
                            <h1 className="hd text-white font-medium text-3xl md:text-5xl shadow-xl mb-8 toppp">Software Development Services</h1>
                            <p className="text-white font-light text-center w-10/12 -mt-6 opacity-75 mb-5">We provide world class Networking, Infrastructure, Computing & so many other services</p>
                            <Link className="bg-white md:scale-90 hover:scale-95 anim pointer-events-auto text-tqred px-12 py-3 md:py-4 text-sm md:text-base" to='/software-development'>Learn More</Link>
                        </motion.div> 
                    </div>
                </Carousel>
                <div className="w-10/12 md:w-4/6 my-24 mx-auto">
                    <div className="mt-8 flex flex-wrap gap-12 justify-center">
                        <div className="flex flex-col justify-center text-center items-center gap-4 w-[20rem] h-[20rem] hover:scale-105 md:ring-tqred hover:bg-tqred anim bg-tqblue rounded-3xl text-white">
                            <img className="w-[50px]" src={icon} />
                            <h3 className="text-2xl font-semibold">Who we are?</h3>
                            <p className="w-10/12 opacity-80">In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost </p>
                        </div>
                        <div className="flex flex-col justify-center text-center items-center gap-4 w-[20rem] h-[20rem] hover:scale-105 md:ring-tqred hover:bg-tqred anim bg-tqblue rounded-3xl text-white">
                            <VscCompassActive size='50px'/>
                            <h3 className="text-2xl font-semibold">What do we provide?</h3>
                            <p className="w-10/12 opacity-80">In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost </p>
                        </div>
                        <div className="flex flex-col justify-center text-center items-center gap-4 w-[20rem] h-[20rem] hover:scale-105 md:ring-tqred hover:bg-tqred anim bg-tqblue rounded-3xl text-white">
                            <VscGift size='50px'/>
                            <h3 className="text-2xl font-semibold">Why Us?</h3>
                            <p className="w-10/12 opacity-80">In today's fast-moving markets, companies no longer just want a vendor who responds to requests at a minimal cost </p>
                        </div>
                    </div>
                </div>
                {/* <img className="w-screen" src={chain} /> */}
                <div className="my-24">
                    <h1 className="text-3xl hd font-semibold my-4 text-center">Partners</h1>
                    <div className="flex flex-wrap gap-8 mt-8 justify-center">
                        {/* {/* <img className="w-24 hover:scale-105 anim object-contain" src={icon1} />
                        <img className="w-24 hover:scale-105 anim object-contain" src={icon1} />
                        <img className="w-24 hover:scale-105 anim object-contain" src={icon1} />
                        <img className="w-24 hover:scale-105 anim object-contain" src={icon1} />
                        <img className="w-24 hover:scale-105 anim object-contain" src={icon1} /> */}
                        <img className="w-24 hover:scale-105 anim object-contain" src={icon1} />
                    </div>
                </div>
                <Footer/>
            </motion.main>
        </AnimatePresence>
    )
}

export default Home;