import React from "react";

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
        About <span className="text-indigo-400">API Generator</span>
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
        API Generator is a tool designed to help developers and teams build 
        production-ready APIs in minutes instead of days. 
        By simply providing your requirements such as{" "}
        <span className="text-indigo-400 font-semibold">login ID, request syntax,</span> 
        and <span className="text-indigo-400 font-semibold">response format</span>, 
        our app handles the heavy lifting so you can focus on what truly matters — 
        creating amazing products.
      </p>

      {/* Mission Section */}
      <div className="bg-gray-800 bg-opacity-50 rounded-2xl shadow-lg p-8 max-w-3xl">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          We believe APIs should be <span className="font-semibold">simple, fast, and secure</span>.  
          That’s why API Generator is built with developers in mind — providing 
          automation, flexibility, and scalability right out of the box.
        </p>
      </div>
    </div>
  );
};

export default About;

