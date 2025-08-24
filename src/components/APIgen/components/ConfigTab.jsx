import React from 'react';

const ConfigTab = ({ apiConfig, setApiConfig, httpMethods }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">API Name</label>
          <input
            type="text"
            value={apiConfig.name}
            onChange={(e) => setApiConfig({...apiConfig, name: e.target.value})}
            placeholder="My Data API"
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Endpoint</label>
          <input
            type="text"
            value={apiConfig.endpoint}
            onChange={(e) => setApiConfig({...apiConfig, endpoint: e.target.value})}
            placeholder="/api/v1/data"
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">HTTP Method</label>
          <select
            value={apiConfig.method}
            onChange={(e) => setApiConfig({...apiConfig, method: e.target.value})}
            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
          >
            {httpMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
        <textarea
          value={apiConfig.description}
          onChange={(e) => setApiConfig({...apiConfig, description: e.target.value})}
          placeholder="Describe what this API does..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default ConfigTab;
