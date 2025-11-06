import React from "react";
import { motion } from "framer-motion";
import { FileText, Clock, BookOpen, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <FileText size={40} />,
    title: "Comprehensive Notes",
    description: "Covers all topics with clear explanations for quick learning.",
  },
  {
    icon: <Clock size={40} />,
    title: "Time-Saving",
    description: "Structured notes help you revise faster before exams.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Easy to Understand",
    description: "Written in simple language, suitable for all students.",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Verified by Experts",
    description: "Reviewed and approved by experienced teachers and toppers.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Features of Our Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
