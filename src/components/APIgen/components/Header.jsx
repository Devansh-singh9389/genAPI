import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 flex-shrink-0">
      <h1 className="text-2xl font-bold text-white">API Generator</h1>
      <p className="text-blue-100 mt-1 text-sm">Create APIs automatically from your dataset</p>
    </div>
  );
};

export default Header;
