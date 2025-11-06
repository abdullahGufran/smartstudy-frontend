import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ClassCard = ({ cls, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
    >
      <h3 className="text-2xl font-bold mb-4">{cls}</h3>
      <p className="text-center mb-4">
        Explore high-quality notes, study guides, and resources for {cls}.
      </p>
      <Link
        to={`/notes/${cls.toLowerCase().replace(" ", "-")}`}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300"
      >
        View Notes
      </Link>
    </motion.div>
  );
};

export default ClassCard;
