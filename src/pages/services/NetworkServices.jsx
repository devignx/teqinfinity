import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

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
            <div className="w-11/12 md:w-4/6 my-36 mx-auto">
                <h1 className="text-5xl hd text-center">Networking Services</h1>
                <h3 className="text-xl my-3 mt-12 font-semibold">
                Enterprise Networking
                </h3>
                <p>
                An Enterprise Network is used by midsize to large organizations to connect their people, devices, and things to applications in the datacenter and cloud.
                </p>
                <ul className="lil list-disc mt-8 leading-10 text-xl">
                    <li>LAN</li>
                    <li>WAN</li>
                    <li>SD-WAN</li>
                    <li>Wireless</li>
                </ul>
                <h3 className="text-xl my-3 mt-12 font-semibold">
                Datacenter Networking & SDN Solution
                </h3>
                <p>
                Data Center networking is a high speed network for connecting data center components 
                (compute, networking, and storage)  so that users can quickly access applications and process data
                </p>
                <ul className="lil list-disc mt-8 leading-10 text-xl">
                    <li>VXLAN EVPN-based Datacenter Fabric (Cisco Nexus, Arista, Juniper)</li>
                    <li>Cisco ACI Datacenter Fabric</li>
                    <li>Cumulus based VXLAN EVPN Fabric (Whitebox solution)</li>
                    <li>SDN - Cisco ACI, NFV - NSX-V and NSX-T</li>
                </ul>
            </div>
            <Footer/>
        </motion.main>
    )
}

export default NetworkServices;