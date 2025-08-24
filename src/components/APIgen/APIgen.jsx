import React, { useState } from 'react';
import { Upload, Download, Play, Settings, Database, Code, FileText, Plus, X } from 'lucide-react';

const APIgen = () => {
  const [activeTab, setActiveTab] = useState('dataset');
  const [dataset, setDataset] = useState(null);
  const [responseFields, setResponseFields] = useState([{ name: '', type: 'string', required: true }]);
  const [requestFields, setRequestFields] = useState([{ name: '', type: 'string', required: true, location: 'body' }]);
  const [apiConfig, setApiConfig] = useState({
    name: '',
    endpoint: '',
    method: 'GET',
    description: ''
  });
  const [generatedAPI, setGeneratedAPI] = useState(null);

  const tabs = [
    { id: 'dataset', label: 'Dataset', icon: Database },
    { id: 'response', label: 'Response Syntax', icon: Code },
    { id: 'request', label: 'Request Syntax', icon: FileText },
    { id: 'config', label: 'Configuration', icon: Settings }
  ];

  const fieldTypes = ['string', 'number', 'boolean', 'array', 'object', 'date'];
  const httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  const paramLocations = ['body', 'query', 'path', 'header'];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDataset({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified)
      });
    }
  };

  const addResponseField = () => {
    setResponseFields([...responseFields, { name: '', type: 'string', required: true }]);
  };

  const removeResponseField = (index) => {
    setResponseFields(responseFields.filter((_, i) => i !== index));
  };

  const updateResponseField = (index, field, value) => {
    const updated = responseFields.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setResponseFields(updated);
  };

  const addRequestField = () => {
    setRequestFields([...requestFields, { name: '', type: 'string', required: true, location: 'body' }]);
  };

  const removeRequestField = (index) => {
    setRequestFields(requestFields.filter((_, i) => i !== index));
  };

  const updateRequestField = (index, field, value) => {
    const updated = requestFields.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setRequestFields(updated);
  };

  const generateAPI = () => {
    const api = {
      config: apiConfig,
      dataset: dataset,
      responseSchema: responseFields,
      requestSchema: requestFields,
      generatedAt: new Date().toISOString()
    };
    setGeneratedAPI(api);
  };

  const renderDatasetTab = () => (
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

  const renderResponseTab = () => (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center flex-shrink-0">
        <h3 className="text-lg font-medium text-gray-100">Response Structure</h3>
        <button
          onClick={addResponseField}
          className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Field
        </button>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {responseFields.map((field, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
            <input
              type="text"
              placeholder="Field name"
              value={field.name}
              onChange={(e) => updateResponseField(index, 'name', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
            />
            <select
              value={field.type}
              onChange={(e) => updateResponseField(index, 'type', e.target.value)}
              className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
            >
              {fieldTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => updateResponseField(index, 'required', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-600 rounded focus:ring-blue-500 bg-gray-700"
              />
              <span className="text-sm text-gray-300">Required</span>
            </label>
            <button
              onClick={() => removeResponseField(index)}
              className="p-2 text-red-400 hover:bg-red-900/30 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRequestTab = () => (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center flex-shrink-0">
        <h3 className="text-lg font-medium text-gray-100">Request Parameters</h3>
        <button
          onClick={addRequestField}
          className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Parameter
        </button>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {requestFields.map((field, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
            <input
              type="text"
              placeholder="Parameter name"
              value={field.name}
              onChange={(e) => updateRequestField(index, 'name', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
            />
            <select
              value={field.type}
              onChange={(e) => updateRequestField(index, 'type', e.target.value)}
              className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
            >
              {fieldTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              value={field.location}
              onChange={(e) => updateRequestField(index, 'location', e.target.value)}
              className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
            >
              {paramLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => updateRequestField(index, 'required', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-600 rounded focus:ring-blue-500 bg-gray-700"
              />
              <span className="text-sm text-gray-300">Required</span>
            </label>
            <button
              onClick={() => removeRequestField(index)}
              className="p-2 text-red-400 hover:bg-red-900/30 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderConfigTab = () => (
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

  return (
    <div className="h-screen bg-gray-900 p-6 overflow-hidden flex">
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">API Generator</h1>
            <p className="text-blue-100 mt-1 text-sm">Create APIs automatically from your dataset</p>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-600 flex-shrink-0">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-400 text-blue-400'
                        : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content - Scrollable */}
          <div className="flex-1 p-6 bg-gray-800 overflow-y-auto">
            {activeTab === 'dataset' && renderDatasetTab()}
            {activeTab === 'response' && renderResponseTab()}
            {activeTab === 'request' && renderRequestTab()}
            {activeTab === 'config' && renderConfigTab()}
          </div>

          {/* Action Buttons */}
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
                    onClick={() => {
                      const blob = new Blob([JSON.stringify(generatedAPI, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${apiConfig.name || 'api'}-config.json`;
                      a.click();
                    }}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Config
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Generated API Preview - Modal Style */}
          {generatedAPI && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default APIgen;