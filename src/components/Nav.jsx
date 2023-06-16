import { Link } from "react-router-dom";

import logo from '../assets/Logo-h.svg'
import icon from '../assets/icon.svg'

import {IoCloseCircleOutline} from 'react-icons/io5'
import { useState } from "react";

const Nav = () => {

    const [mobNav,setMobNav] = useState(false);

    return(
        <>
            <div className="flex pc border-b-2 items-center fixed topppp top-0 bg-white justify-center md:justify-between pl-8 px-12 w-full">
                <Link to='/' className="text-xl "> <img className="h-6 " src={logo} alt=""/></Link>
                <div className=" flex gap-12">
                    <Link to='/' className={`text-lg py-6 target:text-red-500 hover:text-red-500 anim`}>Home</Link>
                    <Link to='/about-us' id='about-us' className="text-lg py-6 target:text-red-500 hover:text-red-500 anim">About Us</Link>
                    <div className="relative peer py-6">
                        <Link to='/network-services' className="text-lg peer py-6 h-max active:text-red-500 hover:text-red-500 anim">Network Services</Link>
                        <div className="flex flex-col overflow-hidden text-sm topppp -translate-y-[160px] peer-hover:translate-y-0 peer-hover:scale-y-100 hover:scale-100 hover:opacity-100 hover:translate-y-0 scale-y-0 opacity-0 peer-hover:opacity-100 anim absolute rounded-2xl rounded-tr-none drop-shadow-lg top-0 right-0 mt-16 anim bg-white w-max">
                            <Link to='/network-services#enterprise' className="py-4 px-6 hover:bg-red-500 hover:text-white anim border-b">Enterprise Networking</Link>
                            <Link to='/network-services#datacenter' className="py-4 px-6 h-max hover:bg-red-500 hover:text-white anim border-b">Datacenter Networking</Link>
                            <Link to='/network-services#software-defined-networking' className="py-4 px-6 hover:bg-red-500 hover:text-white anim border-b">Software Defined Networking</Link>
                            <Link to='/network-services#security-threat-mgmt' className="py-4 px-6 hover:bg-red-500 hover:text-white anim border-b">Network Security & Threat management</Link>
                            <Link to='/network-services#support-services' className="py-4 px-6 hover:bg-red-500 hover:text-white anim">Network Support Services</Link>
                        </div>
                    </div>
                    <Link to='/' className="text-lg py-6 active:text-red-500 hover:text-red-500 anim">Contact</Link>
                </div>
            </div>
            <div className="topppp">
                {   !mobNav &&
                    <button onClick={()=> setMobNav(true)} className="bg-white flex items-center justify-center gap-2 h-12 shadow-md rounded-e-full fixed left-0 top-4 mob">
                        <p className="ml-2">☰</p>
                        <img className="w-8 mr-4" src={icon} alt="icon" />
                    </button>
                }
                <div className={` ${mobNav ? 'opacity-100 translate-x-0 scale-x-100' : 'opacity-0 -translate-x-full scale-x-0'} anim flex fixed left-0 pl-12 bg-white topppp w-full h-screen p-6 flex-col`}>  
                    <div className="flex justify-between w-full">
                        <img className="h-4 w-fit my-8" src={logo} alt="icon" />
                        <button onClick={()=> setMobNav(false)} className="w-12 text-red-500"> <IoCloseCircleOutline size='30px'/> </button>
                    </div>
                    <Link to='/' className={`text-lg py-3 target:text-red-500 hover:text-red-500 anim`}>Home</Link>
                    <Link to='/about-us' id='about-us' className="text-lg py-3 target:text-red-500 hover:text-red-500 anim">About Us</Link>
                    <div className="relative w-full py-3">
                        <Link to='/network-services' className="text-lg peer py-2 h-max active:text-red-500 hover:text-red-500 anim">Network Services</Link>
                        <div className="flex flex-col overflow-hidden text-sm topppp ml-4 w-full mt-4">
                            <Link to='/network-services#enterprise' className="py-4">Enterprise Networking</Link>
                            <Link to='/network-services#datacenter' className="py-4">Datacenter Networking</Link>
                            <Link to='/network-services#software-defined-networking' className="py-4">Software Defined Networking</Link>
                            <Link to='/network-services#security-threat-mgmt' className="py-4 ">Network Security & Threat management</Link>
                            <Link to='/network-services#support-services' className="py-4 ">Network Support Services</Link>
                        </div>
                    </div>
                    <Link to='/' className="text-lg py-3 active:text-red-500 hover:text-red-500 anim">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;