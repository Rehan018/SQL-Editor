// App.tsx

import React, { useState } from 'react';
import Editor from './components/Editor';
import QueryResults from './components/QueryResults';
import Sidebar from './components/Sidebar';
import { get, post } from './utils/api';
import { API_BASE_URL, GOOGLE_BIGQUERY, SNOWFLAKE } from './utils/constants';

const App: React.FC = () => {
  const [selectedDatabase, setSelectedDatabase] = useState<string>(GOOGLE_BIGQUERY);
  const [queryResults, setQueryResults] = useState<any[]>([]);

  const handleDatabaseChange = (database: string) => {
    setSelectedDatabase(database);
  };

  const handleQuerySubmit = async (query: string) => {
    try {
      // Depending on the selected database, make the appropriate API call
      const endpoint = selectedDatabase === GOOGLE_BIGQUERY ? `${API_BASE_URL}/bigquery` : `${API_BASE_URL}/snowflake`;
      const response = await post(endpoint, { query });
      setQueryResults(response);
    } catch (error) {
      console.error('Error executing query:', error);
      setQueryResults([]);
    }
  };

  return (
    <div>
      <Sidebar
        databases={[GOOGLE_BIGQUERY, SNOWFLAKE]}
        onSelectDatabase={handleDatabaseChange}
      />
      <Editor onQuerySubmit={handleQuerySubmit} />
      <QueryResults results={queryResults} />
    </div>
  );
};

export default App;
