import React, { useState } from 'react';
import { Database, Code, FileText, Settings } from 'lucide-react';

import Header from './components/Header';
import Tabs from './components/Tabs';
import DatasetTab from './components/DatasetTab';
import ResponseTab from './components/ResponseTab';
import RequestTab from './components/RequestTab';
import ConfigTab from './components/ConfigTab';
import Actions from './components/Actions';
import GeneratedAPIModal from './components/GeneratedAPIModal';

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

  return (
    <div className="h-screen bg-gray-900 p-6 overflow-hidden flex">
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 flex flex-col h-full overflow-hidden">
          <Header />
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1 p-6 bg-gray-800 overflow-y-auto">
            {activeTab === 'dataset' && <DatasetTab dataset={dataset} handleFileUpload={handleFileUpload} />}
            {activeTab === 'response' && <ResponseTab responseFields={responseFields} updateResponseField={updateResponseField} removeResponseField={removeResponseField} addResponseField={addResponseField} fieldTypes={fieldTypes} />}
            {activeTab === 'request' && <RequestTab requestFields={requestFields} updateRequestField={updateRequestField} removeRequestField={removeRequestField} addRequestField={addRequestField} fieldTypes={fieldTypes} paramLocations={paramLocations} />}
            {activeTab === 'config' && <ConfigTab apiConfig={apiConfig} setApiConfig={setApiConfig} httpMethods={httpMethods} />}
          </div>

          <Actions generateAPI={generateAPI} generatedAPI={generatedAPI} apiConfig={apiConfig} />

          <GeneratedAPIModal generatedAPI={generatedAPI} setGeneratedAPI={setGeneratedAPI} />
        </div>
      </div>
    </div>
  );
};

export default APIgen;
