/* Component for sidebar (database switcher) */

// Sidebar.tsx

import React from 'react';

interface SidebarProps {
  databases: string[];
  onSelectDatabase: (database: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ databases, onSelectDatabase }) => {
  return (
    <div>
      <h2>Databases</h2>
      <ul>
        {databases.map((database) => (
          <li key={database} onClick={() => onSelectDatabase(database)}>
            {database}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
