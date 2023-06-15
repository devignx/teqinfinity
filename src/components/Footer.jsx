import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <>
            <div className="flex border-b-2 justify-between px-8 py-6 w-full">
                <p className="text-xl">Teqinfinity</p>
                <div className="flex gap-12">
                    <Link to='/' className="font-medium uppercase text-sm  hover:text-red-500 anim">Home</Link>
                    <Link to='/about-us' className="font-medium uppercase text-sm  hover:text-red-500 anim">About Us</Link>
                    <Link to='/services' className="font-medium uppercase text-sm  hover:text-red-500 anim">Services</Link>
                    <Link to='/contact' className="font-medium uppercase text-sm  hover:text-red-500 anim">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;