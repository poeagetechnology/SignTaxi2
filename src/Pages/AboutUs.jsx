import React from 'react'

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            About <span className="text-red-500">Sign Taxi</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted travel partner for safe, affordable, and reliable rides.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Sign Taxi is a customer-focused taxi service providing fast,
              comfortable, and dependable transportation across cities.
              We are committed to delivering high-quality rides with trained
              drivers and well-maintained vehicles.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Since our establishment, we have served thousands of happy
              customers by ensuring punctuality, safety, and transparent pricing.
            </p>
            

            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
              Book Your Ride
            </button>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h3 className="text-xl font-semibold mb-6 text-center">
              Why Choose Sign Taxi?
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                ✅ Professional & Verified Drivers
              </li>

              <li className="flex items-center gap-3">
                ✅ 24/7 Customer Support
              </li>

              <li className="flex items-center gap-3">
                ✅ Affordable & Transparent Pricing
              </li>

              <li className="flex items-center gap-3">
                ✅ On-Time Pickup & Drop
              </li>

              <li className="flex items-center gap-3">
                ✅ GPS Enabled Vehicles
              </li>

            </ul>

          </div>

        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 text-center">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-500">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-500">500+</h3>
            <p className="text-gray-600">Drivers</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-500">50+</h3>
            <p className="text-gray-600">Cities</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-500">24/7</h3>
            <p className="text-gray-600">Service</p>
          </div>

        </div>

      </div>

    </section>
  );
}
