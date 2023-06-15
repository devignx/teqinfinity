import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const About = () => {

    return(
        <main>
            <Nav/>
            <div className="w-11/12 md:w-4/6 mt-12 mx-auto">
                <p>About US</p>
            </div>
        </main>
    )
}

export default About;