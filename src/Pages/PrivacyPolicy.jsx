import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {

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

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_70%)]"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative
          max-w-5xl mx-auto
          px-4 sm:px-6 lg:px-10
          py-16 sm:py-20 lg:py-24
        "
      >

        {/* Card */}
        <div className="
          bg-white/80 backdrop-blur-xl
          rounded-2xl
          shadow-xl shadow-slate-200/60
          border border-slate-200/60
          p-8 sm:p-10 lg:p-14
        ">

          {/* Title */}
          <motion.h1
            variants={item}
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold text-slate-900 tracking-tight
            "
          >
            Privacy Policy
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={item}
            className="
              mt-4 sm:mt-6
              max-w-3xl
              text-sm sm:text-base md:text-lg
              text-slate-600 leading-relaxed
            "
          >
            This Privacy Policy explains how <strong>SignTaxi</strong> collects,
            uses, and safeguards your personal information when you access our
            digital platforms and transportation services.
          </motion.p>

          {/* Section Wrapper */}
          <div className="mt-10 space-y-8">

            {/* 1 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                1. Information We Collect
              </h2>

              <h3 className="mt-4 font-medium text-slate-800">
                Personal Information
              </h3>

              <ul className="mt-2 list-disc pl-5 text-slate-600 space-y-1">
                <li>Name</li>
                <li>Mobile Number</li>
                <li>Email ID</li>
                <li>Payment Details</li>
              </ul>
            </motion.div>

            {/* 2 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                2. Purpose of Data Collection
              </h2>

              <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                <li>Provide transportation services</li>
                <li>Process bookings and payments</li>
                <li>Improve route optimization</li>
                <li>Customer support services</li>
                <li>Service notifications</li>
              </ul>
            </motion.div>

            {/* 3 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                3. Information Sharing
              </h2>

              <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                <li>Authorized drivers</li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>
            </motion.div>

            {/* 4 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                4. Data Security
              </h2>

              <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                <li>Secure encrypted servers</li>
                <li>Controlled internal access</li>
                <li>Periodic security audits</li>
              </ul>
            </motion.div>

            {/* 5 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                5. User Rights
              </h2>

              <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                <li>Access personal data</li>
                <li>Request corrections</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
              </ul>
            </motion.div>

            {/* 6 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                6. Data Retention
              </h2>

              <p className="mt-3 text-slate-600">
                Personal data is retained only for lawful and operational
                purposes in accordance with Indian regulations.
              </p>
            </motion.div>

            {/* 7 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                7. Policy Updates
              </h2>

              <p className="mt-3 text-slate-600">
                This Privacy Policy may be updated periodically. Continued use
                of our services indicates acceptance of revised terms.
              </p>
            </motion.div>

            {/* 8 */}
            <motion.div variants={item}>
              <h2 className="font-semibold text-xl sm:text-2xl text-slate-900">
                8. Contact Information
              </h2>

              <ul className="mt-3 text-slate-600 space-y-1">
                <li>Email: privacy@signtaxi.com</li>
                <li>Phone: +91-XXXXXXXXXX</li>
                <li>Office: Karur, Tamil Nadu</li>
              </ul>
            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
