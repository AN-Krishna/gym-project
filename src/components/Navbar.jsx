import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <nav className="bg-neutral-500 fixed top-0 w-full shadow-md z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16 ">
          <div className="flex items-center">
            <a href='#Home-page' className="text-white text-2xl font-bold">GYM</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/" className="text-white hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
            <a href="#about-us" className="text-white hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-white hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Program
              </a>
              <a href="#training" className="text-white hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Training
              </a>
              <a href="#membership" className="text-white hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
            </div>
          </div>
          <div className='hidden md:block'>
            <Link to='/auth' className='  hover:bg-neutral-700 px-3 py-2  rounded-md text-white text-2xl font-semibold'>Join Us</Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
         
         
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about-us" className="text-white text-center hover:bg-neutral-300 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-white text-center hover:bg-neutral-300 block px-3 py-2 rounded-md text-base font-medium">
              Program
            </a>
            <a href="#" className="text-white text-center hover:bg-neutral-300 block px-3 py-2 rounded-md text-base font-medium">
              Training
            </a>
            <a href="#" className="text-white text-center hover:bg-neutral-300 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </a>
            <a href='#' className='text-white text-center hover:bg-neutral-300 block px-3 py-2 rounded-md text-base font-medium'>Join Us</a>
          </div>
        </div>
      )}
     
    </nav>
  );
};

export default Navbar;
