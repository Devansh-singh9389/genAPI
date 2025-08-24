import React from 'react';
import FieldEditor from './FieldEditor';

const RequestTab = ({ requestFields, updateRequestField, removeRequestField, addRequestField, fieldTypes, paramLocations }) => {
  return (
    <FieldEditor
      fields={requestFields}
      updateField={updateRequestField}
      removeField={removeRequestField}
      addField={addRequestField}
      fieldTypes={fieldTypes}
      paramLocations={paramLocations}
      title="Request Parameters"
      addLabel="Add Parameter"
      namePlaceholder="Parameter name"
    />
  );
};

export default RequestTab;
