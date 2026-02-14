import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Asset/Sign Transprent.png";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cabsOpen, setCabsOpen] = useState(false);
  const [tripOpen, setTripOpen] = useState(false);

  return (
<header className="w-full bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200 sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center space-x-2 group cursor-pointer">
      <div className="w-44">
        <img src={Logo} alt="Sign Taxi" />
      </div>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex row align-items-center justify-content-between gap-9">

      <ul className="flex gap-10 justify-start items-center">

        {/* Home */}
        <Link to="/" className="relative font-semibold group">
          <li className="transition-all duration-300 group-hover:text-red-500">
            Home
          </li>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* About */}
        <Link to="/about" className="relative font-medium group">
          <li className="transition-all duration-300 group-hover:text-red-500">
            About Us
          </li>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Services */}
        <Link to="/services" className="relative font-medium group">
          <li className="transition-all duration-300 group-hover:text-red-500">
            Services
          </li>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* CABS DROPDOWN */}
        <li
          className="relative font-semibold group cursor-pointer"
          onMouseEnter={() => setCabsOpen(true)}
          onMouseLeave={() => setCabsOpen(false)}
        >

          <span className="transition-all duration-300 group-hover:text-red-500">
            Cabs
          </span>

          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>

          {cabsOpen && (
            <ul className="absolute top-full left-0 mt-3 w-40 bg-white border shadow-lg rounded-lg py-2 z-50">

              <Link to="/cabs/mini">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  Mini
                </li>
              </Link>

              <Link to="/cabs/sedan">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  Sedan
                </li>
              </Link>

              <Link to="/cabs/suv">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  SUV
                </li>
              </Link>

              <Link to="/cabs/traveller">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  Traveller
                </li>
              </Link>

            </ul>
          )}

        </li>

        {/* BOOK TRIP DROPDOWN */}
        <li
          className="relative font-semibold group cursor-pointer"
          onMouseEnter={() => setTripOpen(true)}
          onMouseLeave={() => setTripOpen(false)}
        >

          <span className="transition-all duration-300 group-hover:text-red-500">
            Book Trip
          </span>

          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>

          {tripOpen && (
            <ul className="absolute top-full left-0 mt-3 w-48 bg-white border shadow-lg rounded-lg py-2 z-50">

              <Link to="/trip/oneway">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  One Way
                </li>
              </Link>

              <Link to="/trip/round">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  Round Trip
                </li>
              </Link>

              <Link to="/trip/hourly">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  Hourly Rental
                </li>
              </Link>

              <Link to="/trip/airport">
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-500">
                  Airport Taxi
                </li>
              </Link>

            </ul>
          )}

        </li>

        {/* Partner */}
        <Link to="/" className="relative font-semibold group">
          <li className="transition-all duration-300 group-hover:text-red-500">
            Become a Partner
          </li>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

      </ul>

    </div>

    {/* Login */}
    <Link
      className="hidden md:block rounded-xl font-semibold px-4 py-2
      text-white bg-orange-600 shadow-md
      hover:bg-red-700 hover:shadow-red-400/50 hover:shadow-lg
      transition-all duration-300 hover:scale-105"
      to="/login"
    >
      Login
    </Link>

    {/* Mobile Button */}
    <button
      className="md:hidden text-2xl transition-transform duration-300 hover:scale-110"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* Mobile Menu (UNCHANGED) */}
  <div
    className={`md:hidden absolute top-full left-0 w-full
    bg-white border-t border-gray-200 shadow-lg
    transition-all duration-300 ease-out
    ${
      menuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
  >

    <ul className="flex flex-col gap-5 p-6">

      <Link to="/" onClick={() => setMenuOpen(false)}>
        <li className="font-semibold hover:text-red-500 transition">
          Home
        </li>
      </Link>

      <Link to="/about" onClick={() => setMenuOpen(false)}>
        <li className="font-medium hover:text-red-500 transition">
          About Us
        </li>
      </Link>

      <Link to="/services" onClick={() => setMenuOpen(false)}>
        <li className="font-medium hover:text-red-500 transition">
          Services
        </li>
      </Link>

      <Link to="/" onClick={() => setMenuOpen(false)}>
        <li className="font-semibold hover:text-red-500 transition">
          Cabs
        </li>
      </Link>

      <Link to="/" onClick={() => setMenuOpen(false)}>
        <li className="font-semibold hover:text-red-500 transition">
          Book Trip
        </li>
      </Link>

      <Link to="/" onClick={() => setMenuOpen(false)}>
        <li className="font-semibold hover:text-red-500 transition">
          Become a Partner
        </li>
      </Link>

      <Link
        to="/login"
        onClick={() => setMenuOpen(false)}
        className="mt-3 text-center font-semibold bg-red-600 text-white py-2 rounded-xl
        hover:bg-red-700 transition"
      >
        Login
      </Link>

    </ul>
    

  </div>

</header>
  );
}
