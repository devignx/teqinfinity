import Home from './pages/Home';
import About from './pages/About'
import Solutions from './pages/Solutions'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about-us"/>
        <Route element={<Solutions/>} path="/solutions"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
