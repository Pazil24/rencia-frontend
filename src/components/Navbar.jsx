import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="flex ">
        <h1 className="font-bold">
            <a href="/">Rencia</a>
        </h1>
        <nav>
          <ul className="text-[#ee4c4c]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/property-listings">Properties</a>
            </li>
            <li>
              <a href="/sign-in">Sign In</a>
            </li>
            <li>
              <a href="/sign-up">Sign Up</a>
            </li>
            <li>
              <a href="/contact-us">Reach Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
