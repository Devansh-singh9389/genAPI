import React from 'react';
import FieldEditor from './FieldEditor';

const ResponseTab = ({ responseFields, updateResponseField, removeResponseField, addResponseField, fieldTypes }) => {
  return (
    <FieldEditor
      fields={responseFields}
      updateField={updateResponseField}
      removeField={removeResponseField}
      addField={addResponseField}
      fieldTypes={fieldTypes}
      title="Response Structure"
      addLabel="Add Field"
      namePlaceholder="Field name"
    />
  );
};

export default ResponseTab;
