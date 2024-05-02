import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import About from './pages/Home/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Tools from './pages/Tools/Tools';
import Contact from './pages/Contact/Contact';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './pages/Projects/Projects';
import MobileNav from './components/MobileNav';
import MobileAbout from './pages/Home/MobileAbout';
import MobileTools from './pages/Tools/MobileTools';
import MobileProject from './pages/Projects/MobileProject';
import MobileContact from './pages/Contact/MobileContact';
import Error404 from './pages/Error404';


function App() {
  const location = useLocation(); 

  return (
    <>
      {/* lARGE SCREEN  */}
      <div className='h-screen bg-stone-200 px-8 py-8 dark:bg-neutral-800 lg:block hidden'>
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
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </>
          </div>
        </div>
       
        <Footer />

        <ToastContainer />
  
      </div>
      {/* MOBILE SCREEN */}
      <div className='lg:hidden block min-h-screen bg-stone-200 px-8 py-8 dark:bg-neutral-800'>
        <MobileNav />
        <Routes>
          <Route path="/" element={<MobileAbout />} />
          <Route path='/tools' element={<MobileTools />} />
          <Route path='/projects' element={<MobileProject />} />
          <Route path='/contact' element={<MobileContact />}/>
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer />
        <ToastContainer />
        {/* <div className="flex items-end justify-end pt-4">
          <Socials />
        </div> */}
      </div>
    </>
  );
}

export default App;
