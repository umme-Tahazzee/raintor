import React from 'react'
import bg from '../../public/assests/bg.png'
import { FaArrowRight } from "react-icons/fa6";



const Header = () => {
return (
  <div className="min-h-screen bg-[url('../../public/assests/bg.png')] bg-cover bg-center">
    
    <div className='p-10 flex justify-between items-center'>
      <h1 className='font-bold uppercase text-2xl'>Develop.me</h1>

      {/* nav links and button in the same row */}
      <div className="flex items-center space-x-6 font-semibold text-[20px]">
        <a href="#" className="hover:text-gray-900">Home</a>
        <a href="#" className="hover:text-gray-900">About</a>
        <a href="#" className="hover:text-gray-900">Portfolio</a>
        <a href="#" className="hover:text-gray-900">Blog</a>

        <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-500 rounded-full">
          <span className='-ml-4 border border-gray-500 rounded-full p-1'>
            <FaArrowRight />
          </span>
          Start Project
        </button>
      </div>
    </div>

  </div>
);
}

export default Header