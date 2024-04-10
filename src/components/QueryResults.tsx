/* Component for displaying query results */

// QueryResults.tsx

import React from 'react';

// Define interface for the shape of each row object
interface Row {
  [key: string]: string | number; // Adjust types as needed
}

interface QueryResultsProps {
  results: Row[]; // Use the defined interface for the results prop
}

const QueryResults: React.FC<QueryResultsProps> = ({ results }) => {
  return (
    <div>
      <h2>Query Results</h2>
      <table>
        <thead>
          <tr>
            {results.length > 0 &&
              Object.keys(results[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResults;
