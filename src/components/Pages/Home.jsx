import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        ⚡ Welcome to API Generator
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        Build powerful and production-ready APIs in seconds.  
        Just provide your requirements like <span className="text-indigo-400 font-semibold">login ID, request syntax,</span>  
        and <span className="text-indigo-400 font-semibold">response format</span>,  
        and let our app handle the rest.
      </p>
      
      {/* Button */}
      <div className="flex gap-4">
        <a
          href="/start"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold shadow-md"
        >
          Get Started
        </a>
        <a
          href="/about"
          className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-gray-800 transition text-gray-300 font-semibold"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
