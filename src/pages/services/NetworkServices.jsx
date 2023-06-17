import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import bg6 from '../../assets/bg-6.avif'

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
            <div className="w-11/12 md:w-4/6 my-16 md:my-36 mx-auto">
                <h1 className="text-3xl md:text-5xl hd text-center">Networking Services</h1>
                <img className="w-screen rounded-xl mt-8 object-cover h-[50vh]" src={bg6} />
                <h3 className="text-xl my-3 mt-12 font-semibold">
                Enterprise Networking
                </h3>
                <p>
                An Enterprise Network is used by midsize to large organizations to connect their people, devices, and things to applications in the datacenter and cloud.
                </p>
                <ul className="lil list-disc mt-8 leading-10 ml-8">
                    <li>LAN</li>
                    <li>WAN</li>
                    <li>SD-WAN</li>
                    <li>Wireless</li>
                </ul>

                <h3 className="text-xl my-3 mt-12 font-semibold"> Datacenter Networking & SDN Solution </h3>
                <p>
                    Data Center networking is a high speed network for connecting data center components 
                    (compute, networking, and storage)  so that users can quickly access applications and process data
                </p>
                <ul className="lil list-disc mt-8 leading-10 ml-8">
                    <li>VXLAN EVPN-based Datacenter Fabric (Cisco Nexus, Arista, Juniper)</li>
                    <li>Cisco ACI Datacenter Fabric</li>
                    <li>Cumulus based VXLAN EVPN Fabric (Whitebox solution)</li>
                    <li>SDN - Cisco ACI, NFV - NSX-V and NSX-T</li>
                </ul>

                <h3 className="text-xl my-3 mt-12 font-semibold"> Network Security & Threat Management</h3>
                <p>
                Network security is essential for defending sensitive data against hacker threats and unauthorised access. In order to safeguard the network from client devices to the cloud, modern networking systems contain security techniques including segmentation, firewalls, and encryption.
                </p>
                <ul className="lil list-disc mt-8 leading-10 ml-8">
                    <li>Next-Gen Firewall</li>
                    <li>Load Balancer</li>
                    <li>Proxy</li>
                    <li>Web Application Firewall (WAF)</li>
                </ul>
                
                <h3 className="text-xl my-3 mt-12 font-semibold"> Software Defined Networking </h3>
                <ul className="lil list-disc mt-8 leading-10 ml-8">
                    <li>SDN - Cisco ACI, VXLAN EVPN (Cisco Nexus & Arista)</li>
                    <li>NFV - NSX-V and NSX-T</li>
                    <li>SDWAN</li>
                </ul>

                <h3 className="text-xl my-3 mt-12 font-semibold"> Network Support Services </h3>
                <p>
                Network support entails analyzing, troubleshooting, and maintaining a computer network. Network support specialists must assist organizations in running secure and efficient networks.
                </p>
                <p>
                Network support services help an organization maintain its existing network. Here are some of the services under network support.
                </p>
                <ul className="lil list-disc mt-8 leading-10 ml-8">
                    <li>Remote network monitoring</li>
                    <li>Network connectivity solutions</li>
                    <li>Scheduled system and security updates</li>
                    <li>OS upgrades</li>
                    <li>Network troubleshooting</li>
                    <li>Application patches</li>
                </ul>
            </div>
            <Footer/>
        </motion.main>
    )
}

export default NetworkServices;