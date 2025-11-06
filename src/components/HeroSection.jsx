import React from "react";
import { Brain, PenTool, NotebookPen, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
   <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-600 text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10">
  
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Learn Smart with <span className="text-yellow-300">SmartStudy</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto md:mx-0">
          Access comprehensive notes, guides, and quizzes for classes 9 to 12.  
          Simplify your study journey and achieve excellence with ease.
        </p>

        <a
          href="/notes"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Notes
        </a>
      </div>

      {/* Right Side Icon Illustration */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
          {/* Central Brain Icon */}
          <Brain
            size={120}
            className="text-yellow-300 drop-shadow-2xl animate-pulse"
          />

          {/* Surrounding Animated Icons */}
          <PenTool
            size={60}
            className="absolute top-0 left-1/2 -translate-x-1/2 text-white/90 animate-bounce"
          />
          <NotebookPen
            size={60}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/80 animate-bounce delay-100"
          />
          <Sparkles
            size={60}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow-200 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
