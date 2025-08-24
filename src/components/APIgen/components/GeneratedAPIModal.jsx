import React from 'react';
import { X } from 'lucide-react';

const GeneratedAPIModal = ({ generatedAPI, setGeneratedAPI }) => {
  if (!generatedAPI) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
      <div className="bg-gray-800 rounded-lg border border-gray-600 max-w-4xl w-full max-h-96 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h3 className="text-lg font-bold text-white">Generated API Configuration</h3>
          <button
            onClick={() => setGeneratedAPI(null)}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <pre className="text-sm text-green-400 bg-black rounded p-4">
            {JSON.stringify(generatedAPI, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GeneratedAPIModal;
