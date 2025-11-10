import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Class = () => {
  const { className } = useParams(); // e.g. "9", "10", "11", "12"
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        console.log("Fetching subjects for class:", className);
        
        const res = await axios.get(`https://smartstudy-backend.vercel.app/api/subjects/${className}`);
        console.log("Fetched subjects:", res.data);

        setSubjects(res.data);
      } catch (error) {
        console.error("Error in fetchingSubject:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [className]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-600 text-xl">
        Loading subjects...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        {`Class ${className}`} — Subjects
      </h1>

      {subjects.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No subjects available for this class yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {subjects.map((subject) => (
            <Link
              key={subject._id}
              to={`/chapters/${subject._id}`}
              
              className="bg-white shadow-md hover:shadow-lg transition p-6 rounded-xl text-center border border-gray-100 hover:border-blue-400"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {subject.name}
              </h2>
              <p className="text-gray-500 mt-2">Click to view chapters</p>
            </Link>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Class;
