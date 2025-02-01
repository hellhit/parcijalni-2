import React from 'react';
import RepositoryList from './RepositoryList';

const UserDetails = ({ user, repositories, onReset }) => {
  if (!user) return null;

  return (
    <div className="user-details">
      <img 
        src={user.avatar_url} 
        alt={user.name || user.login} 
        className="avatar" 
      />
      <h2>{user.name || user.login}</h2>
      {user.location && <p className="location">📍 {user.location}</p>}
      {user.bio && <p className="bio">{user.bio}</p>}
      
      <RepositoryList repositories={repositories} />
      
      <button 
        onClick={onReset}
        className="btn btn-secondary"
      >
        Poništi
      </button>
    </div>
  );
};

export default UserDetails; 