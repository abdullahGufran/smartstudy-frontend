import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [classes, setClasses] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://smartstudy-backend.vercel.app/api/classes")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SmartStudy
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          {/* Notes Dropdown */}
          <li
            ref={dropdownRef}
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-blue-600 select-none">
              Notes <ChevronDown size={18} />
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-0 bg-white border rounded-lg shadow-md mt-2 w-40 transition-all duration-200 ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <ul>
                {classes.length > 0 ? (
                  classes.map((cls, index) => (
                    <li key={index}>
                      <Link
                        to={`/notes/${cls.replace("class ", "")}`}
                        className="block px-4 py-2 hover:bg-blue-100"
                      >
                        Class {cls}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-400">No classes</li>
                )}
              </ul>
            </div>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            {/* Mobile Notes Dropdown */}
            <div>
              <div
                className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Notes <ChevronDown size={18} />
              </div>

              {dropdownOpen && (
                <ul className="mt-2 ml-3 space-y-1">
                  {classes.map((cls, index) => (
                    <li key={index}>
                      <Link
                        to={`/notes/${cls.replace("class ", "").toLowerCase()}`}
                        className="block px-3 py-1 hover:bg-blue-100 rounded"
                      >
                        Class {cls}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
