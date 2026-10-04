import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans">
        <Navbar />
        
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;