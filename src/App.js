import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import GymProject from './pages/GymProject';
import PizzaProject from './pages/PizzaProject';
import FypProject from './pages/FypProject';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/GymProject' element={<GymProject />} />
          <Route path='/PizzaProject' element={<PizzaProject />} />
          <Route path='/FypProject' element={<FypProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
