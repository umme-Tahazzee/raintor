import React from 'react';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Work = () => {
  return (
    <section className="bg-black text-white py-20 px-5 md:px-16 rounded-t-[20px] font-serif">
      {/* Top Section: Icon & Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        {/* Button Section */}
        <div className="flex flex-row items-center gap-3">
          <span className="icon-circle outline-white/50">
            <FaArrowDown className="text-white/50" />
          </span>
          <button className="btn-outline-white text-white tracking-widest">
            Work Process
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-left md:text-right">
          My Work Process
        </h1>
      </div>

      {/* Work Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif">
        {/* Discovery */}
        <div className="bg-[#0C0C0C] rounded-2xl p-6 flex flex-col justify-between">
          <div className='mb-6'>
            <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'>
              <button className="bg-[#C5FFF8] text-black px-6 py-2 rounded-full font-bold text-lg">
                Discovery
              </button>
              <button className="flex items-center gap-2 text-white cursor-pointer">
                <FaArrowRight className='size-4' />
                <span className="underline text-sm">Read More</span>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            We start every new client interaction with an in-depth discovery call where we get to know each other,
            discuss your current and future objectives, and recommend the best course of action.
          </p>
        </div>

        {/* Strategy */}
        <div className="bg-lime-400 rounded-2xl p-6 transform rotate-0 md:rotate-2">
           <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'>
              <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-lg">
              Strategy
              </button>
              <button className="flex items-center gap-2 text-black cursor-pointer">
                <FaArrowRight className='size-4' />
                <span className="underline text-sm">Read More</span>
              </button>
            </div>
          <p className="text-sm text-black font-medium leading-relaxed mb-4 mt-6">
            Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation
            to in-depth code reviews we're here to set the stage for success.
          </p>
         
        </div>

        {/* Design */}
        <div className="bg-[#0C0C0C] rounded-2xl p-6 flex flex-col justify-between">
          <div className='mb-6'>
            <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'>
              <button className="bg-[#C5FFF8] text-black px-6 py-2 rounded-full font-bold text-lg">
                Design
              </button>
              <button className="flex items-center gap-2 text-white cursor-pointer">
                <FaArrowRight className='size-4' />
                <span className="underline text-sm">Read More</span>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page
            will be designed, reviewed, and given your stamp of approval.
          </p>
        </div>

        {/* Build */}
        <div className="bg-[#0C0C0C] rounded-2xl p-6 flex flex-col justify-between">
          <div className='mb-6'>
            <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'>
              <button className="bg-[#C5FFF8] text-black px-6 py-2 rounded-full font-bold text-lg">
                Build
              </button>
              <button className="flex items-center gap-2 text-white cursor-pointer">
                <FaArrowRight className='size-4' />
                <span className="underline text-sm">Read More</span>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Whether we've just finished designing your new site or you're handing off finished designs for us to develop
            in Webflow, we're here to apply our trusted development process to your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
