import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import About from './pages/Home/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Tools from './pages/Tools/Tools';
import Contact from './pages/Contact/Contact';


function App() {
  const location = useLocation(); 

  return (
    <>
      {/* lARGE SCREEN  */}
      <div className='h-screen bg-stone-200 px-8 py-8 dark:bg-neutral-800'>
        <Navbar />

        <div className="flex items-end justify-end pt-4">
          <Socials />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex w-[80%] h-[100%] items-center justify-center">
              <>
                <Routes location={location} key={location.key}>
                  <Route path="/" element={<About />} />
                  <Route path="/tools" element={<Tools />} />
                  {/* <Route path="projects" element={<Projects />} /> */}
                  <Route path="contact" element={<Contact />} />
                </Routes>
              </>
          </div>
        </div>
       
        <Footer />
  
      </div>
    </>
  );
}

export default App;
