import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faq = [
  {
    question: "How do I access notes?",
    answer: "Select your class and subject to access the notes quickly and easily.",
  },
  {
    question: "Is SmartStudy free?",
    answer: "Yes, most notes and guides are completely free to use.",
  },
  {
    question: "Can I download notes?",
    answer: "Yes, you can download notes for offline use anytime.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <motion.div
            key={item.question}
            className="border rounded-xl shadow-md p-5 bg-white cursor-pointer hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="mt-3 text-gray-700 text-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
