import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-blue-700 mb-4 text-center"
      >
        About <span className="text-blue-500">SmartStudy</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-center max-w-2xl mb-12 text-lg"
      >
        SmartStudy is your digital companion for academic excellence — helping
        students of all classes learn smarter, faster, and better. 🚀
      </motion.p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <GraduationCap size={48} className="text-blue-600 mb-4" />
          <h3 className="font-semibold text-xl text-blue-700 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To make education accessible, effective, and enjoyable for every
            student across the globe.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <BookOpen size={48} className="text-blue-600 mb-4" />
          <h3 className="font-semibold text-xl text-blue-700 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            We empower learners with interactive notes, quizzes, and guidance
            designed for clarity and confidence.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <Users size={48} className="text-blue-600 mb-4" />
          <h3 className="font-semibold text-xl text-blue-700 mb-2">Our Community</h3>
          <p className="text-gray-600">
            Thousands of students trust SmartStudy to prepare for exams and
            achieve top results.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <Target size={48} className="text-blue-600 mb-4" />
          <h3 className="font-semibold text-xl text-blue-700 mb-2">Our Goal</h3>
          <p className="text-gray-600">
            To blend technology and creativity for the smartest learning
            experience possible.
          </p>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-gray-600 text-center"
      >
        <p>
          Made with ❤️ by the <span className="text-blue-600 font-semibold">SmartStudy Team</span>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
