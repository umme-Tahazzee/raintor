'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const constrainRef = useRef(null);

 return (
    <section className="page-bg lg:h-[728px] px-6 sm:px-10 md:px-16
     lg:px-20 py-12 md:py-20 relative overflow-hidden text-black font-serif">
      {/* Button Section */}
      <div className="flex justify-end gap-4 mb-8">
        <span className="icon-circle-light">
          <FaArrowDown />
        </span>
        <button className="btn-outline-black">Why Choose Me</button>
      </div>

      <div className="max-w-[1440px] mx-auto">
        {/* Heading Section */}
        <div className="relative px-4 md:px-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[78px] font-bold leading-tight">
              I’ve been{' '}
              <span className="bg-black text-white px-2 rounded">Developing</span>
              <br className="hidden sm:block" />
              <span className="inline-block mt-2 sm:mt-0">
                Websites since <span className="bg-black text-white px-2 rounded">2013</span>.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-10 text-sm sm:text-base text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed text-center md:text-left">
              We start every new client interaction with an in-depth discovery call where
              we get to know each other and recommend the best course of action.
            </p>

            {/* Previously Worked On Section */}
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
              {/* Left Label */}
              <div className="font-bold text-xl leading-snug text-gray-800 text-center md:text-left">
                <p>PREVIOUSLY</p>
                <p>WORKED ON</p>
              </div>

              {/* Logo Pills */}
              <div className="relative w-full md:w-[600px] h-[240px]">
                <div className="absolute top-0 left-10 rotate-[-20deg] bg-black text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
                  awwwards.
                </div>
                <div className="absolute top-[50px] left-0 rotate-[0deg] border border-black px-5 py-2 rounded-full text-sm font-medium shadow-md">
                  CSS WINNER
                </div>
                <div className="absolute top-[70px] left-48 rotate-[-5deg] border border-black px-5 py-2 rounded-full text-sm font-medium shadow-md">
                  /thoughtworks
                </div>
                <div className="absolute top-[30px] left-[300px] rotate-[0deg] border border-black px-5 py-2 rounded-full text-sm font-medium shadow-md">
                  facebook
                </div>
                <div className="absolute top-[120px] left-[360px] rotate-[15deg] border border-black px-5 py-2 rounded-full text-sm font-medium shadow-md">
                  CSSDesignAwards
                </div>
                <div className="absolute top-[140px] left-[220px] rotate-[10deg] border border-black px-5 py-2 rounded-full text-sm font-medium shadow-md">
                  AUTODESK
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
