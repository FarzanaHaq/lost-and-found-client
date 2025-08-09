import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, Tag } from "lucide-react";

const Latest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recent")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);
  return (
    <div>
      <div className="mt-20 ">
        <h1 className="text-center text-2xl font-bold text-[#1EA69A]">
          Latest Lost & Find Items
        </h1>
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 mb-20">
          {data.slice(0, 6).map((item) => (
             <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg  overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={item.photo}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${
            item.type === "Found"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Tag size={16} className="text-[#1EA69A]" />
          <span>{item.category}</span>
        </div>

        <h3 className="text-lg font-bold text-[#1EA69A] mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 h-10">{item.description}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-[#1EA69A]" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-[#1EA69A]" />
            <span>{item.location}</span>
          </div>
        </div>

        {/* Contact Button */}
    <Link to={`/details/${item._id}`}>
                    <button className="btn bg-[#1EA69A] text-white w-full mt-3">
                      View details
                    </button>
                  </Link>
      </div>
    </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
