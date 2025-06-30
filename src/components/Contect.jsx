"use client";
import { FaInstagram, FaFacebook, FaTwitter, FaPhone } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";




const Contect = () => {
 return (
 <section className="bg-gradient-to-br from-white via-lime-300 to-cyan-100 text-black py-20 px-5 md:px-16 rounded-t-[20px] font-serif">

  {/* Wrapper for left & right */}
  <div className="flex flex-col lg:flex-row gap-10 lg:pl-30 lg:pr-30">

    {/* Left Title Section */}
    <div className="space-y-5 w-full">

      {/* Button Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div className="flex justify-end gap-4 mb-8 md:mb-0">
          <span className="icon-circle-light">
            <FaArrowDown />
          </span>
          <button className="btn-outline-black">Why Choose Me</button>
        </div>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[78px] font-bold leading-tight font-serif text-center md:text-left">
          Interested in{' '}
          <br className="hidden sm:block" />
          <span className="bg-black text-white px-2 rounded">work</span>{' '}
          <span className="inline-block mt-2 sm:mt-0">together?</span>
        </h1>

        <p className="mt-10 text-sm sm:text-base text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed text-center md:text-left">
          We start every new client interaction with an in-depth discovery <br /> call where we get to know each other
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            className="mt-6 inline-flex items-center gap-2 border border-black text-black px-6 py-2
              rounded-full hover:bg-black hover:text-white transition"
          >
            <span className="btn-icon-circle">
              <FaPhone className="text-sm" />
            </span>
            <span className="text-sm sm:text-base">Schedule a Call</span>
          </button>
        </div>
      </div>
    </div>

    {/* Right Form Section */}
    <div className="w-full max-w-md mx-auto bg-black rounded-[2rem]">
      <div className="px-6 py-10 sm:px-10">
        <form className="text-white space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full bg-transparent outline-none placeholder:text-white"
          />
          <div className="w-full border-[0.5px] border-b-[#C5FF41]"></div>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent outline-none placeholder:text-white/45"
          />
          <div className="w-full border-[0.5px] border-b-white/50"></div>

          <input
            type="text"
            placeholder="Describe your project"
            className="w-full bg-transparent outline-none placeholder:text-white/45"
          />
          <div className="w-full border-[0.5px] border-b-white/50"></div>
        </form>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start mt-10">
          <button
            className="inline-flex items-center gap-2 border border-white text-white px-4 py-2
              rounded-full hover:bg-white hover:text-black transition"
          >
            <span className="btn-icon-circle">
              <IoSendOutline className="text-sm" />
            </span>
            <span className="text-sm sm:text-base">Send</span>
          </button>

          <span className="text-white">or</span>

          <button
            className="inline-flex items-center gap-2 border border-white text-white px-6 py-2
              rounded-full hover:bg-white hover:text-black transition"
          >
            <span className="btn-icon-circle">
              <MdOutlineEmail className="text-sm" />
            </span>
            <span className="text-sm sm:text-base">Contact Me</span>
          </button>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start mt-10 text-white">
          <div className="flex space-x-3">
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaFacebook className="text-xl" />
            <div className="h-[1px] w-8 bg-white mt-2" />
          </div>
          <p className="ml-4 mt-2 text-sm">@williamrey</p>
        </div>
      </div>
    </div>
  </div>
</section>

 );
}

export default Contect