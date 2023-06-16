import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NetworkServices = () => {
    
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
            <div className="w-11/12 md:w-4/6 mt-24 mx-auto">
                <p>NetworkServices</p>
            </div>
        </motion.main>
    )
}

export default NetworkServices;