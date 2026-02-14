import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
    <footer className="bg-white text-gray-300 border-t border-gray-950">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/918300399599?text=Welcome%20to%20Sign%20Taxi%20🚖.%20I%20want%20to%20book%20a%20cab."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
>
  💬 Chat on WhatsApp
</a>

        {/* Trips */}
        <div>
          <h4 className="footer-title">Trips</h4>
          <ul className="footer-list">
            <li>Oneway Trip</li>
            <li>Round Trip</li>
            <li>Hourly Rental</li>
            <li>Bulk Booking</li>
            <li>Airport Taxi</li>
            <li>Corporate</li>
            <li>Brand Collaboration</li>
            <li>Trusted Brands</li>
          </ul>
        </div>

        {/* Cab Types */}
        <div>
          <h4 className="footer-title">Cab Types</h4>
          <ul className="footer-list">
            <li>Sedan</li>
            <li>Mini</li>
            <li>SUV</li>
            <li>Pink Taxi</li>
            <li>Traveller</li>
            <li>Urbania</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h4 className="footer-title">Become a Partner</h4>
          <ul className="footer-list">
            <li>
           <Link to="/becomeadriver">
              Become a Driver
              </Link>
              </li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Cabs Cities */}
        <div>
          <h4 className="footer-title">Cabs</h4>
          <ul className="footer-list">
            <li>Coimbatore</li>
            <li>Chennai</li>
            <li>Trichy</li>
            <li>Madurai</li>
            <li>Erode</li>
            <li>Salem</li>
            <li>Tirupur</li>
            <li>Pollachi</li>
            <li>Villupuram</li>
            <li>Karur</li>
            <li>Tirunelveli</li>
            <li>Namakkal</li>
            <li>Vellore</li>
            <li>Hosur</li>
            <li>Mettupalayam</li>
            <li>Thanjavur</li>
            <li>Dindigul</li>
          </ul>
        </div>

        {/* Bike Taxi */}
        <div>
          <h4 className="footer-title">Bike Taxi</h4>
          <ul className="footer-list">
            <li>Coimbatore</li>
            <li>Tirupur</li>
            <li>Trichy</li>
            <li>Salem</li>
            <li>Madurai</li>
            <li>Erode</li>
            <li>Tirunelveli</li>
            <li>Villupuram</li>
            <li>Vellore</li>
            <li>Thanjavur</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>

          {/* App Buttons */}
          <div className="mt-5 space-y-2">

            <button className="app-btn">
              <FaGooglePlay className="mr-2" />
              Google Play
            </button>

            <button className="app-btn">
              <FaApple className="mr-2" />
              App Store
            </button>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} SignTaxi. All Rights Reserved.
          </p>

          <div className="flex space-x-6 mt-2 md:mt-0">

            <Link to="/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>

            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
}
