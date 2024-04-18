import React from "react";

const Navbar = () => {
  return (
    <header className="bg-slate-200">
      <div className="flex  justify-between p-3">
        <h1 className="font-bold">
            <a href="/">Rencia</a>
        </h1>
        <nav>
          <ul className="flex gap-5 mr-4 text-[#ee4c4c]">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="/about-us">About</a>
            </li>
            <li className="hover:underline">
              <a href="/property-listings">Properties</a>
            </li>
            <li className="hover:underline">
              <a href="/sign-in">Sign In</a>
            </li>
            <li className="bg-[#8253e2]">
              <a href="/sign-up">Sign Up</a>
            </li>
            <li className="hover:underline">
              <a href="/contact-us">Reach Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
