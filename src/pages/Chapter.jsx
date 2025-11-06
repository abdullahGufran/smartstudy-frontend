import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Chapter = () => {
  const { chapterId } = useParams();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        console.log("Fetching notes for chapterId:", chapterId);
        const res = await axios.get(`https://smartstudy-backend.vercel.app/api/notes/${chapterId}`);
        setNotes(res.data);
      } catch (error) {
        console.error("Error in fetching notes:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [chapterId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-700">
        Loading notes...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Chapter Notes
        </h2>

        {notes.length === 0 ? (
          <p className="text-center text-gray-600">No notes found for this chapter.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <a
                key={note._id}
                href={note.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group block p-6 rounded-2xl shadow-md border transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  ${
                    note.type === "Notes"
                      ? "bg-blue-100 border-blue-300 hover:bg-blue-200"
                      : note.type === "Exercise"
                      ? "bg-green-100 border-green-300 hover:bg-green-200"
                      : note.type === "Quiz"
                      ? "bg-yellow-100 border-yellow-300 hover:bg-yellow-200"
                      : "bg-purple-100 border-purple-300 hover:bg-purple-200"
                  }
                `}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {note.type}
                </h3>
                <p className="text-gray-600">{note.title}</p>
                <span className="block mt-3 text-indigo-600 font-medium group-hover:underline">
                  Open Document →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter;
