import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <>
            <div className="flex border-b-2 justify-center md:justify-between px-8 py-6 w-full">
                <Link to='/' className="text-xl">Teqinfinity</Link>
                <div className="pc flex gap-12">
                    <Link to='/' className="font-medium uppercase text-sm  hover:text-red-500 anim">Home</Link>
                    <Link to='/about-us' className="font-medium uppercase text-sm  hover:text-red-500 anim">About Us</Link>
                    <Link to='/solutions' className="font-medium uppercase text-sm  hover:text-red-500 anim">Solutions</Link>
                    <Link to='/' className="font-medium uppercase text-sm  hover:text-red-500 anim">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;