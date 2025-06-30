'use client'
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  return (
   <div className="bg-black rounded-2xl px-6 py-12 sm:px-10 md:p-20 font-serif">
    {/* Header section  */}
  <div className="space-y-10">
    {/* Button Section */}
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="outline outline-white/50 rounded-full px-4 py-3">
        <FaArrowDown className="text-white/50" />
      </span>
      <button className="text-white outline outline-white/50 rounded-full px-5 py-2 text-sm sm:text-base">
        Why Choose Me
      </button>
    </div>

    {/* Title + Text Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 p-4 sm:p-10">
      {/* Title */}
      <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight lg:w-1/2">
        My Extensive List <br className="hidden sm:block" />
        of Skills
      </h1>

      {/* Paragraph */}
      <div className="lg:w-1/2">
        <p className="text-white text-sm sm:text-base">
          Building the world’s best marketing websites. <br />
          Your trusted partner for strategy, design, and dev.
        </p>
        <div className="border-t border-white/20 mt-4"></div>
        <div className="flex gap-2 mt-4">
        <button className="outline outline-white p-2 rounded-full"> <FaArrowLeft className="size-4 text-white "/> </button>
        <button className="outline outline-white p-2 rounded-full ">< FaArrowRight className= "size-4 text-white" /> </button>
        </div>
      </div>
    </div>
  </div>
     {/* card section  */}
     

</div>
  )
}

export default About