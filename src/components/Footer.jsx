export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-20 font-sans rounded-2xl">
      <div className="grid grid-cols-12 gap-10">
        {/* Left Section */}
        <div className="col-span-12 lg:col-span-3 flex flex-col justify-between">
          <div className="text-lime-400 text-2xl font-bold mb-10">DEVLOP.ME</div>
          <div className="hidden lg:block text-white font-bold">BESNIK</div>
        </div>

        {/* Right Section */}
        <div className="col-span-12 lg:col-span-9 space-y-16">
          {/* Heading */}
          <h1 className="text-5xl font-bold">As you can</h1>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
            {/* Say Hello */}
            <div>
              <p className="text-gray-400 font-medium mb-3">Say hello</p>
              <p className="mb-1">HELLO@DEVLOP.ME.COM</p>
              <p>MAHBUBUL@ME.COM</p>

              <p className="text-gray-400 font-medium mt-6 mb-2">Call</p>
              <p className="mb-1">+784549 4981 00</p>
              <p>+8845 0100 211</p>
            </div>

            {/* Menu */}
            <div>
              <p className="text-gray-400 font-medium mb-3">Menu</p>
              <p className="mb-1">HOME</p>
              <p className="mb-1">ABOUT</p>
              <p className="mb-1">PORTFOLIO</p>
              <p>BLOG</p>
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-400 font-medium mb-3">Social</p>
              <p className="mb-1">TWITTER</p>
              <p className="mb-1">INSTAGRAM</p>
              <p className="mb-1">FACEBOOK</p>
              <p className="mb-1">BEHANCE</p>
              <p>DRIBBBLE</p>
            </div>
          </div>

          {/* Footer Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm
           text-gray-400 pt-6 ">
            <div className="lg:hidden text-white font-bold mb-2">BESNIK</div>
            <p>© devlop.me 2022</p>
            <p>PRIVACY – TERMS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
