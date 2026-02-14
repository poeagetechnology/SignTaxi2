import React from "react";

export default function Cabs() {
  const cabData = [
    {
      name: "Mini",
      price: "₹12/km",
      seats: "4 Seater",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sedan",
      price: "₹15/km",
      seats: "4 Seater",
      image:
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6b6?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "SUV",
      price: "₹20/km",
      seats: "6 Seater",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Luxury",
      price: "₹30/km",
      seats: "4 Seater",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Tempo Traveller",
      price: "₹25/km",
      seats: "12 Seater",
      image:
        "https://images.unsplash.com/photo-1597002973909-25b6d2f7d1c5?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const handleWhatsApp = (cabName) => {
  const phoneNumber = "918300399599"; // 91 + number
  const message = `Welcome to Sign Taxi 🚖. I want to book a ${cabName}.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-orange-600">
            Choose Your Ride
          </h1>
          <p className="text-gray-600 mt-3">
            Safe, Affordable & Professional Rides with SignTaxi
          </p>
        </div>

        {/* Cab Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cabData.map((cab, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={cab.image}
                alt={cab.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {cab.name}
                </h2>
                <p className="text-gray-600 mt-2">{cab.seats}</p>
                <p className="text-orange-600 font-semibold mt-2">
                  {cab.price}
                </p>

                <button
                  onClick={() => handleWhatsApp(cab.name)}
                  className="w-full mt-5 bg-green-500 text-white py-2.5 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Book Now on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
