import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect } from "react";

const NetworkServices = () => {
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <main>
            <Nav/>
            <div className="w-11/12 md:w-4/6 mt-24 mx-auto">
                <p>NetworkServices</p>
            </div>
        </main>
    )
}

export default NetworkServices;