import React from "react";

export default function Home() {
  return (
    <main className="w-full font-sans bg-gray-50">

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Smart & Reliable <span className="text-yellow-200">Sign Taxi</span> Services
            </h1>
            <p className="mt-6 text-lg text-orange-100 max-w-lg">
              Book city rides, airport transfers, and corporate trips with professional drivers.
              Fast pickups, affordable pricing, and 24/7 availability.
            </p>

            <div className="mt-8 flex items-center space-x-4">
              <button className="px-6 py-3 rounded-xl bg-white text-orange-600 font-semibold hover:bg-gray-100 transition shadow-lg">
                Book Now
              </button>
              <button className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-orange-600 transition">
                Become a Driver
              </button>
            </div>
          </div>

          {/* Right Booking Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-orange-600">Quick Booking</h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Enter Pickup Location"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <input
                type="text"
                placeholder="Enter Drop Location"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none">
                <option>Select Cab Type</option>
                <option>Mini</option>
                <option>Sedan</option>
                <option>SUV</option>
              </select>

              <button className="w-full mt-2 px-6 py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition shadow-md">
                Find Cabs
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          Why Choose Sign Taxi?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
            <h4 className="text-lg font-semibold mb-3 text-orange-600">Safe & Secure</h4>
            <p className="text-gray-600 text-sm">
              Verified drivers, live ride tracking, and 24/7 customer support for complete safety.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
            <h4 className="text-lg font-semibold mb-3 text-orange-600">On-Time Pickup</h4>
            <p className="text-gray-600 text-sm">
              Always reach your destination on time with optimized route planning.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
            <h4 className="text-lg font-semibold mb-3 text-orange-600">Affordable Pricing</h4>
            <p className="text-gray-600 text-sm">
              Transparent fares with no hidden charges and multiple payment options.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
