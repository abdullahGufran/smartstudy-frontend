import React from "react";
import ClassCard from "./ClassCard";
import { useEffect, useState } from "react";
import axios from "axios";


const FeaturedClasses = () => {
    
      const [classes, setClasses] = useState([]);
        useEffect(() => {
    axios
      .get("http://localhost:5000/api/classes")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-black">
          Featured Classes
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Access high-quality notes and study materials for every class.
        </p>
        <div className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {classes.map((cls, index) => (
          <ClassCard key={cls} cls={cls} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedClasses;
