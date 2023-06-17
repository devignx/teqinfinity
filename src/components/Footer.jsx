import { Link } from "react-router-dom";
import logo from '../assets/Logo-w.svg'

import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoFacebook,IoLogoTwitter} from 'react-icons/io5'
import {IoLogoWhatsapp,IoMdCall} from 'react-icons/io'
import {HiOfficeBuilding,HiLink} from 'react-icons/hi'
import {RiAppsFill} from 'react-icons/ri'

const Footer = () => {

    return(
        <div className="bg-tqblue mt-12 md:min-h-[50vh]">
            <div className="flex scale-100 md:scale-90 pt-16 gap-16 px-12 overflow-hidden text-white flex-col md:flex-row md:justify-between py-6 w-full">
                <div className="flex flex-col  items-center scale-90 md:scale-100">
                    <img className="h-8 md:h-6 object-contain" src={logo} />
                    <div className="flex gap-4 mt-10">
                        <a href=""><AiFillInstagram size='30px'/></a>
                        <a href=""><IoLogoWhatsapp size='30px'/></a>
                        <a href=""><IoLogoFacebook size='30px'/></a>
                        <a href=""><IoLogoTwitter size='30px'/></a>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-xl flex gap-2 justify-center md:justify-start items-center font-bold text-center md:text-right mb-6Useful Links">Useful Links<HiLink/></h2>
                    <div className="flex flex-col mt-8 mx-auto text-white/70 items-center md:items-start gap-4">
                        <Link to='/' className="font-medium uppercase text-sm hover:text-white anim anim">Home</Link>
                        <Link to='/about-us' className="font-medium uppercase text-sm hover:text-white anim anim">About Us</Link>
                        {/* <Link to='/services' className="font-medium uppercase text-sm  anim">Services</Link> */}
                        <Link to='/contact' className="font-medium uppercase text-sm hover:text-white anim anim">Contact</Link>
                    </div>
                </div>
                <div className="sm:block md:hidden text-center md:text-left lg:block">
                    <h2 className="text-xl flex gap-2 justify-center md:justify-start items-center font-bold text-center md:text-right mb-6">Services<RiAppsFill/></h2>
                    <div className="flex flex-col mx-auto text-white/70 items-center md:items-start gap-4">
                            <Link className="hover:text-white anim" to='/network-services'>Network Services</Link>
                            <Link className="hover:text-white anim" to='/cloud-services'>Cloud Services</Link>
                            <Link className="hover:text-white anim" to='/datacenter-services'>Datacenter Infrastructure Services</Link>
                            <Link className="hover:text-white anim" to='/end-user-services'>End User Services</Link>
                            <Link className="hover:text-white anim" to='/software-development'>Software Development</Link>
                    </div>
                </div>
                <div className="md:w-3/6 lg:w-1/4">
                    <h2 className="text-xl flex gap-2 justify-center md:justify-end items-center font-bold text-center md:text-right mb-6"><HiOfficeBuilding/> Address</h2>
                    <div className="flex items-center md:items-end text-white/70 flex-col gap-6"> 
                        <a href='/' className="font-medium uppercase text-sm text-center md:text-right anim">Head office : 1st Floor, TVSK Complex, Periya Mariyammal Kovil Street, Tiruchengodu - 637 211</a>
                        <a href='/' className="font-medium uppercase  text-center md:text-right text-sm  anim">Branch office :  Bangalore, Chennai, Coimbatore</a>
                    </div>  
                    <h2 className="text-xl flex gap-2 mt-8 justify-center md:justify-end items-center font-bold text-center md:text-right mb-6"><IoMdCall/>Contact</h2>
                    <div className="flex w-full justify-center text-white/70 md:justify-end items-center md:items-end mt-4 gap-4">
                        <a href='/' className="font-medium uppercase text-center md:text-right anim">+91 9888565664</a>
                        <a href='/' className="font-medium uppercase  text-center md:text-right anim">+91 9658452655</a>
                    </div>  
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer;