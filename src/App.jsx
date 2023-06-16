import Home from './pages/Home';
import About from './pages/About'
import NetworkServices from './pages/services/NetworkServices'
import DatacenterServices from './pages/services/DatacenterServices'
import EndUserServices from './pages/services/EndUserServices'
import CloudServices from './pages/services/CloudServices'
import SoftwareDevelopment from './pages/services/SoftwareDevelopment'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about-us"/>
        <Route element={<NetworkServices/>} path="/network-services"/>
        <Route path='/network-services' element={<NetworkServices/>}/>
        <Route path='/cloud-services' element={<CloudServices/>}/>
        <Route path='/datacenter-services' element={<DatacenterServices/>}/>
        <Route path='/end-user-services' element={<EndUserServices/>}/>
        <Route path='/software-development' element={<SoftwareDevelopment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
