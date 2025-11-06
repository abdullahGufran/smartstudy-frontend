import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Class from "./pages/Class";

import ScrollToTop from "./ScrollToTop";

// ✅ Import pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Subject from './pages/Subject';
import Chapter from './pages/Chapter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>      
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* ✅ Define all routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes/:className" element={<Class />} />        
        <Route path="chapters/:subjectId" element={<Subject />} />
        <Route path="/chapternotes/:chapterId" element={<Chapter />} />
      </Routes>
      <Footer />
      
    </Router>
  )
}

export default App
