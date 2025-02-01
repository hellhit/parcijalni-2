import React from 'react';

const RepositoryList = ({ repositories }) => {
  if (!repositories?.length) return null;

  return (
    <div className="repository-list">
      <h3>Repozitoriji ({repositories.length})</h3>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <a 
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList; 