import React from 'react';
import { NavLink } from 'react-router-dom'; 
import DarkModeToggle from './Darkmode';

function Navbar() {
  return (
    <div className='flex justify-between text-purple-900 dark:text-violet-600'>
      <ul className='flex space-x-20 text-xl font-normal'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/tools'>Skills</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
      </ul>
      <div className='flex items-center'> 
        <NavLink to='/contact'>
          <div className='border border-purple-900 dark:border-violet-600 rounded-3xl py-1 px-2 mr-8'>Get in Touch</div> 
        </NavLink>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
