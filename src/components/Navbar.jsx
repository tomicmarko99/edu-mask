import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full flex items-center justify-center px-5 py-2 absolute">
      <div className="max-w-[1280px] w-full flex justify-between items-center">
        <div className="text-2xl text-[#444444] font-bold">edu-mask</div>
        <div className="text-xl hidden md:flex gap-5 text-[#333333]">
          <Link to="/">Home</Link>
          <Link to="/links">Links</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Docs</Link>
          <Link to="/">FAQs</Link>
        </div>
        <div className="md:hidden text-2xl text-[#333333]">
          {nav ? (
            <AiOutlineClose onClick={handleNav} />
          ) : (
            <AiOutlineMenu onClick={handleNav} />
          )}
        </div>
        <div
          className={`mobileMenu z-10 md:hidden fixed top-0 ${
            nav ? "right-0" : "-right-[150%] bg-[#333333]"
          } w-[60vw] h-screen shadow-2xl bg-white flex flex-col list-none transition-all duration-[.3s] ease-linear`}
        >
          <div className="text-xl text-[#333333] font-[500] flex flex-col p-4">
            <div>
              <AiOutlineClose onClick={handleNav} />
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
              <Link to="/links" onClick={handleNav}>
                Links
              </Link>
              <Link to="/" onClick={handleNav}>
                Jobs
              </Link>
              <Link to="/" onClick={handleNav}>
                Docs
              </Link>
              <Link to="/" onClick={handleNav}>
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
