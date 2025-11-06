import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://smartstudy-backend.vercel.app/api/classes")
      .then((res) => setClasses(res.data))
      .catch((err) => console.error("Error fetching classes:", err));
  }, []);

  return (
    <footer className="bg-blue-600 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">SmartStudy</h2>
          <p className="text-gray-200">
            Your all-in-one platform for notes, study guides, and exam preparation.
          </p>

          {/* Social Media Links */}
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul>
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li className="mt-2 font-semibold">Notes</li>
            {classes.length > 0 ? (
              classes.map((cls, index) => (
                <li key={index}>
                  <Link
                    to={`/notes/${cls}`}
                    className="hover:underline"
                  >
                    class {cls}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-300">No classes</li>
            )}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Info</h2>
          <p>Email: <a href="mailto:abdullahgufran25@gmail.com" className="underline">abdullahgufran25@gmail.com</a></p>
          <p>Phone: +92 328 7512751</p>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} SmartStudy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
