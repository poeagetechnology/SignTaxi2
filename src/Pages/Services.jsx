import React from "react";

export default function Services() {
  const services = [
    {
      title: "Airport Transfers",
      description:
        "On-time airport pickup and drop with professional drivers and luggage assistance.",
      icon: "✈️",
    },
    {
      title: "Outstation Trips",
      description:
        "Comfortable long-distance rides with transparent pricing and safe travel.",
      icon: "🛣️",
    },
    {
      title: "Corporate Travel",
      description:
        "Reliable transportation solutions for companies and business professionals.",
      icon: "🏢",
    },
    {
      title: "Local City Rides",
      description:
        "Affordable and quick rides within the city for daily commute.",
      icon: "🚖",
    },
    {
      title: "Wedding & Events",
      description:
        "Premium vehicles for weddings, events, and special occasions.",
      icon: "💍",
    },
    {
      title: "24/7 Emergency Rides",
      description:
        "Round-the-clock taxi support whenever you need urgent travel.",
      icon: "⏰",
    },
  ];

  const handleWhatsApp = (serviceTitle) => {
    const phoneNumber = "918300399599";
    const message = `Welcome to Sign Taxi 🚖. I want to book ${serviceTitle}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-orange-600">
            Our Services
          </h1>
          <p className="text-gray-600 mt-3">
            Safe, Affordable & Professional Taxi Services by SignTaxi
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-3 text-sm">
                {service.description}
              </p>

              <button
                onClick={() => handleWhatsApp(service.title)}
                className="mt-6 bg-green-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/918300399599?text=Welcome%20to%20Sign%20Taxi%20🚖.%20I%20want%20to%20book%20a%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
