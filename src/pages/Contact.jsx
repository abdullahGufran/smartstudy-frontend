import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        Have a question, feedback, or collaboration idea? We’d love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left: Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" /> 
              <span>abdullahgufran25@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" /> 
              <span>+92 328 7512751</span>
            </div>
            <div className="flex items-center gap-3">
              
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-800">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <Facebook size={22} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <Twitter size={22} />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Send a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send
          </button>

          {status && <p className="mt-4 text-green-600">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
