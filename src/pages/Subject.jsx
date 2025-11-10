import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Subject = () => {
  const { subjectId } = useParams(); // e.g., subject ID
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await axios.get(`https://smartstudy-backend.vercel.app/api/chapters/${subjectId}`);
        console.log(res.data);
        setChapters(res.data.map((chapter) => ({
          id: chapter._id,
          title: chapter.title,
        })));
      } catch (error) {
        console.error("Error fetching chapters:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, [subjectId]);

  if (loading) {
    return <div>Loading chapters...</div>;
  }

  return (<div className="subject-container max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 border-b pb-2">
      📘 Chapters
    </h2>

    <ul className="space-y-3">
      {chapters.map((chapter, index) => (
        <li
          key={index}
          className="bg-gray-50 border border-gray-200 rounded-lg transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md hover:bg-blue-50"
        >
          <Link
            to={`/chapternotes/${chapter.id}`}
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
          >
            
            {index + 1}. {chapter.title}
          </Link>
        </li> 
      ))}
    </ul>
  </div>

  );
};

export default Subject;
