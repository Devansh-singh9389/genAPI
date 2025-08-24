import React from 'react';
import { Play, Download } from 'lucide-react';

const Actions = ({ generateAPI, generatedAPI, apiConfig }) => {
  const handleDownload = () => {
    if (generatedAPI) {
      const blob = new Blob([JSON.stringify(generatedAPI, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${apiConfig.name || 'api'}-config.json`;
      a.click();
    }
  };

  return (
    <div className="bg-gray-750 px-8 py-4 border-t border-gray-600 flex-shrink-0">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-300">
          Ready to generate your API? Make sure all tabs are configured properly.
        </div>
        <div className="flex space-x-4">
          <button
            onClick={generateAPI}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <Play className="w-4 h-4 mr-2" />
            Generate API
          </button>
          {generatedAPI && (
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Config
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
