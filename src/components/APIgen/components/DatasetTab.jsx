import React from 'react';
import { Upload, FileText } from 'lucide-react';

const DatasetTab = ({ dataset, handleFileUpload }) => {
  return (
    <div className="space-y-4 h-full">
      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-blue-400 transition-colors bg-gray-700/30">
        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-100">Upload Dataset</p>
          <p className="text-gray-400 text-sm">Drag and drop your dataset file here, or click to browse</p>
          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            id="dataset-upload"
            accept=".csv,.json,.xlsx"
          />
          <label
            htmlFor="dataset-upload"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
          >
            <Upload className="w-4 h-4 mr-2" />
            Choose File
          </label>
        </div>
      </div>
      
      {dataset && (
        <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-green-400" />
            <div>
              <p className="font-medium text-green-200">{dataset.name}</p>
              <p className="text-sm text-green-300">
                Size: {(dataset.size / 1024).toFixed(2)} KB |
                Type: {dataset.type} |
                Modified: {dataset.lastModified.toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatasetTab;
