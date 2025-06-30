'use client'
import React, { useState } from 'react'
import bg from '../../public/assests/bg.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter, FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';


const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 return (
  <div className="lg:h-[728px]   page-bg
  ">
  <div className=" font-serif  text-black sm:px-6 md:px-20 space-y-5">

   {/* Navbar Container */}
   <div className="px-4 py-6  flex justify-between items-center">
    <h1 className="font-bold uppercase text-xl sm:text-2xl lg:text-3xl">Develop.me</h1>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-10 font-semibold
        text-base sm:text-lg lg:text-xl">
     <a href="#" className="hover:text-gray-300">Home</a>
     <a href="#" className="hover:text-gray-300">About</a>
     <a href="#" className="hover:text-gray-300">Portfolio</a>
     <a href="#" className="hover:text-gray-300">Blog</a>

     <button className="flex items-center gap-2 border border-black
           text-black px-4 sm:px-5 py-2 rounded-full
            hover:bg-gray-200 transition-all text-sm sm:text-base">
      <span className="btn-icon-circle">
       <FaArrowRight />
      </span>
      Start Project
     </button>
    </div>

    {/* Mobile Menu Toggle */}
    <div className="md:hidden text-black text-2xl">
     <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <FaTimes /> : <FaBars />}
     </button>
    </div>
   </div>

   {/* Mobile Dropdown */}
   {isOpen && (
    <div className="md:hidden px-4 sm:px-6 pb-6 space-y-3 font-semibold
         text-black text-base sm:text-lg bg-transparent bg-opacity-60 backdrop-blur-md">
     <a href="#" className="block hover:text-gray-300">Home</a>
     <a href="#" className="block hover:text-gray-300">About</a>
     <a href="#" className="block hover:text-gray-300">Portfolio</a>
     <a href="#" className="block hover:text-gray-300">Blog</a>
    </div>
   )}

   {/* Hero Container  */}
  <div className="relative p-4 md:p-10 overflow-hidden ">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[78px] font-bold leading-tight">
          Trusted <span className="bg-black text-white px-2 rounded">Partner</span> for
          <br className="hidden sm:block" />
          <span className="inline-block mt-2 sm:mt-0">
            Your Website <span className="bg-black text-white px-2 rounded">Develop</span>.
          </span>
        </h1>


      <div className="mt-6  flex  items-start gap-15  ">
          {/* Left Socials */}
      <div className="hidden md:flex mt-8 w-1/4 ">  
        <div><p className="mt-8 rotate-[-90deg] text-sm">@williamrey</p></div>
        <div className='sm:flex flex-col space-y-3  '>
        <FaTwitter className="text-xl" />
        <FaInstagram className="text-xl" /> 
        <FaFacebook className="text-xl" />
        <div className="w-[1px] h-8 bg-black mt-2" />       
       </div>
       </div>
           {/* text section  */}
        <div className='items-center'>
         <p className="mt-6 text-sm sm:text-base max-w-xl">
          Building the world’s best marketing websites for over a decade.
          <br />
          Your trusted partner for strategy, design, and dev.
        </p>
        <button 
        className="mt-6 inline-flex items-center gap-2 border border-black text-black px-6 py-2
         rounded-full hover:bg-black hover:text-white transition">
          <span className="btn-icon-circle">
           <FaPhone className="text-sm" />
          </span>
          <span className="text-sm sm:text-base">Schedule a Call</span>
        </button>
        </div>
      

       
        </div>
      </motion.div>
    </div>
   

 

  </div>
  </div>
 );
}

export default Header