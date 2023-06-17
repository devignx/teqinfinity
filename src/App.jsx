import Home from './pages/Home';
import About from './pages/About'
import NetworkServices from './pages/services/NetworkServices'
import DatacenterServices from './pages/services/DatacenterServices'
import EndUserServices from './pages/services/EndUserServices'
import CloudServices from './pages/services/CloudServices'
import SoftwareDevelopment from './pages/services/SoftwareDevelopment'
import Contact from './pages/Contact';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about-us"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<NetworkServices/>} path="/network-services"/>
        <Route element={<CloudServices/>} path='/cloud-services'/>
        <Route element={<DatacenterServices/>} path='/datacenter-services'/>
        <Route element={<EndUserServices/>} path='/end-user-services'/>
        <Route element={<SoftwareDevelopment/>} path='/software-development'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
