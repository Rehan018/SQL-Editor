/* Component for the SQL editor */


// Editor.tsx

import React, { useState } from 'react';

interface EditorProps {
  onQuerySubmit: (query: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    onQuerySubmit(query);
  };

  return (
    <div>
      <textarea value={query} onChange={handleQueryChange} rows={10} cols={80} />
      <button onClick={handleSubmit}>Run Query</button>
    </div>
  );
};

export default Editor;
