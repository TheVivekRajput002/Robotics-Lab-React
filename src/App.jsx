import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Members from './Pages/Members';
import Projects from './Pages/Projects';
import Comingsoon from './Pages/Comingsoon';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/updates" element={<Comingsoon />} />
          <Route path="/equipments" element={<Comingsoon />} />
          <Route path="/contact_us" element={<Comingsoon />} />
        </Routes>
      </Router>
      < Footer />

    </>
  )
}

export default App



