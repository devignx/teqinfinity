import Home from './pages/Home';
import About from './pages/About'
import NetworkServices from './pages/NetworkServices'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about-us"/>
        <Route element={<NetworkServices/>} path="/network-services"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
