import React from 'react';
import { Plus, X } from 'lucide-react';

const FieldEditor = ({ 
  fields, 
  updateField, 
  removeField, 
  addField, 
  fieldTypes, 
  paramLocations, 
  title, 
  addLabel, 
  namePlaceholder 
}) => {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center flex-shrink-0">
        <h3 className="text-lg font-medium text-gray-100">{title}</h3>
        <button
          onClick={addField}
          className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          {addLabel}
        </button>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {fields.map((field, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
            <input
              type="text"
              placeholder={namePlaceholder}
              value={field.name}
              onChange={(e) => updateField(index, 'name', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
            />
            <select
              value={field.type}
              onChange={(e) => updateField(index, 'type', e.target.value)}
              className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
            >
              {fieldTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {paramLocations && (
              <select
                value={field.location}
                onChange={(e) => updateField(index, 'location', e.target.value)}
                className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
              >
                {paramLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            )}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => updateField(index, 'required', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-600 rounded focus:ring-blue-500 bg-gray-700"
              />
              <span className="text-sm text-gray-300">Required</span>
            </label>
            <button
              onClick={() => removeField(index)}
              className="p-2 text-red-400 hover:bg-red-900/30 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldEditor;
