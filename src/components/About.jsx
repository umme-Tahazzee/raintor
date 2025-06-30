"use client";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";


const AtomIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" mb-4"
  >
    <circle cx="50" cy="50" r="5" fill="#C0FF00" />
    <ellipse
      cx="50"
      cy="50"
      rx="30"
      ry="10"
      stroke="white"
      strokeWidth="2"
      transform="rotate(0 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="30"
      ry="10"
      stroke="white"
      strokeWidth="2"
      transform="rotate(60 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="30"
      ry="10"
      stroke="white"
      strokeWidth="2"
      transform="rotate(120 50 50)"
    />
  </svg>
);


const About = () => {
  return (
    <div className="bg-black rounded-2xl px-6 py-12 sm:px-10 md:p-20 font-serif relative overflow-hidden">
      {/* Header section */}
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

        {/* Title , Text Section */}
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
              <button className="outline outline-white p-2 rounded-full">
                <FaArrowLeft className="size-4 text-white " />
              </button>
              <button className="outline outline-white p-2 rounded-full ">
                <FaArrowRight className="size-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

    {/* Card section */}
<div className="flex flex-col md:flex-row gap-6 mt-10 justify-center items-center">
  {/* Card 1 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-[#1a1a1a] rounded-2xl px-6 py-8 w-[280px] sm:w-[300px] text-white hover:shadow-lg hover:shadow-white/10 transition"
  >
    <AtomIcon />
    <h3 className="text-lg font-bold mt-2 mb-2 tracking-tight">HTML & CSS</h3>
    <p className="text-sm text-white/70 leading-relaxed">
      Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
    </p>
  </motion.div>

  {/* Card 2 – Javascript */}
  <motion.div
    whileHover={{ rotate: -3, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="bg-[#1a1a1a] rounded-2xl px-6 py-8 w-[280px] sm:w-[300px] text-white rotate-[-6deg] hover:rotate-0 hover:shadow-lg hover:shadow-white/10 transition"
  >
    <AtomIcon />
    <h3 className="text-lg font-bold mt-2 mb-2 tracking-tight">Javascript</h3>
    <p className="text-sm text-white/70 leading-relaxed">
      Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
    </p>
  </motion.div>

  {/* Card 3 – Webflow */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
    className="bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a]/80 to-black rounded-2xl px-6 py-8 w-[280px] sm:w-[300px] text-white hover:shadow-lg hover:shadow-white/10 transition"
  >
    <AtomIcon />
    <h3 className="text-lg font-bold mt-2 mb-2 tracking-tight">Webflow</h3>
    <p className="text-sm text-white/70 leading-relaxed">
      Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
    </p>
  </motion.div>
</div>

    </div>
  );
};

export default About;
