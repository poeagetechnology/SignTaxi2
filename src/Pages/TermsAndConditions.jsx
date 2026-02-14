import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_70%)]"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/60 p-8 sm:p-10 lg:p-14">
          
          {/* Title */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Terms & Conditions
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={item}
            className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed"
          >
            Welcome to <strong>SignTaxi</strong>. These terms explain how our taxi
            services work in and around Karur, Tamil Nadu. By booking or using
            our service, you agree to follow these terms.
          </motion.p>

          <div className="mt-10 space-y-8">
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                1. Our Service
              </h2>
              <p className="mt-3 text-slate-600">
                SignTaxi offers local and outstation taxi services. Availability
                may depend on driver location, traffic, weather, and time of
                booking.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                2. Your Responsibility
              </h2>
              <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                <li>Enter correct pickup and drop details</li>
                <li>Be ready at the pickup point on time</li>
                <li>Treat drivers with respect</li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                3. Pricing & Payments
              </h2>
              <p className="mt-3 text-slate-600">
                Trip charges depend on distance, time, and route conditions.
                Payments must be completed using the available payment options.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                4. Cancellations
              </h2>
              <p className="mt-3 text-slate-600">
                If you cancel a ride after a driver is assigned, a cancellation
                fee may apply depending on the timing.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                5. Behaviour & Safety
              </h2>
              <p className="mt-3 text-slate-600">
                Unsafe, abusive, or illegal behaviour will result in immediate
                cancellation of service and possible account suspension.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                6. Delays & Liability
              </h2>
              <p className="mt-3 text-slate-600">
                We are not responsible for delays caused by traffic, road
                conditions, weather, or events beyond our control.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                7. Legal Jurisdiction
              </h2>
              <p className="mt-3 text-slate-600">
                These terms follow Indian law and are subject to the jurisdiction
                of Tamil Nadu.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                8. Contact Us
              </h2>
              <ul className="mt-3 text-slate-600 space-y-1">
                <li>Email: support@signtaxi.com</li>
                <li>Service Area: Karur, Tamil Nadu</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
