import React from "react";
import { motion } from "framer-motion";
import '../../../src/index.css'

const Safety = () => {
  return (
    <div>
      <section className=" py-6 px-2 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1EA69A] mb-6 sora-font">
            🔒 Safety Tips When Meeting Someone
          </h2>
          <p className="text-gray-600 mb-10">
            Keep yourself and your belongings safe when connecting with others
            to return or claim items.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#1EA69A] bg-primary"
            >
              <h3 className="font-semibold text-lg mb-2">
                📍 Meet in Public Places
              </h3>
              <p className="text-gray-600">
                Choose locations like cafes, police stations, or community
                centers. Avoid secluded areas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4  border-[#1EA69A] bg-primary"
            >
              <h3 className="font-semibold text-lg mb-2">
                🆔 Request Proof of Ownership
              </h3>
              <p className="text-gray-600">
                Ask for identifying details (photos, serial number, description)
                before handing over items.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4  border-[#1EA69A] bg-primary"
            >
              <h3 className="font-semibold text-lg mb-2">👫 Don’t Go Alone</h3>
              <p className="text-gray-600">
                Bring a friend or family member with you if possible, especially
                for high-value items.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 border-l-4  border-[#1EA69A] bg-primary"
            >
              <h3 className="font-semibold text-lg mb-2">
                🚫 Never Share Personal Info
              </h3>
              <p className="text-gray-600">
                Avoid sharing your home address, financial details, or anything
                sensitive online or in person.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
