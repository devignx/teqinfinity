import Nav from "../components/Nav";

import nwbg from '../assets/network-bg.webp'
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <main>
            <Nav className='topppp'/><div className="md:mt-12"></div>
            <div className="">
                <img className="w-full h-[50vh] botttt object-cover" src={nwbg} />
                <div className="w-full md:mt-16 pointer-events-none absolute top-0 botttt h-[50vh] flex flex-col justify-center items-center">
                    <h1 className="hd text-white font-medium text-3xl md:text-5xl mb-8 topppp">Network Services</h1>
                    <p className="text-white font-light -mt-6 opacity-75 mb-5">We provide world class Networking services</p>
                    <Link className="bg-white pointer-events-auto text-red-500 px-12 py-3 md:py-4 text-sm md:text-base" to='/network-services'>Learn More</Link>
                </div> 
            </div>
            <div className="w-11/12 md:w-4/6 mt-10 md:mt-12 mx-auto">
                <h2 className="text-2xl md:text-3xl hd">Who we are?</h2>
                <p className="text-black/70 text-sm leading-6 mt-4 md:mt-6">
                    The world is undergoing rapid changes characterized by groundbreaking technological advancements, dynamic shifts in economies, and a transforming global environment. These developments present challenges for our employees, clients, partners, and communities as they navigate this evolving landscape. At Teqinfinity, we continuously strive to surpass limits by utilizing our expertise, experience, and innovative network to empower enterprises, individuals, and communities in building a better future, quickly and collaboratively. To achieve this, we leverage our strengths in technology, talent, and a strong partner ecosystem to eliminate any obstacles to progress and drive business transformation. Our unwavering commitment centers around a single objective: ensuring our clients achieve sustainable growth ahead of schedule.We aim to harness technology to foster a sense of closeness, warmth, and understanding through the experiences we provide. Our mission is to unlock new possibilities and positively impact every individual we encounter. Moreover, our net-zero commitment revolves around embracing renewable energy, efficient waste management, and adopting circular economy practices to promote a healthier, safer, and more sustainable business.
                </p>
            </div>
        </main>
    )
}

export default Home;