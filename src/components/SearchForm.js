import React from 'react';

const SearchForm = ({ onSubmit, onChange, username }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <label htmlFor="github-username">GitHub username:</label>
        <input
          id="github-username"
          type="text"
          value={username}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. facebook"
          className="form-control"
        />
      </div>
      <button 
        type="submit"
        className="btn btn-primary"
      >
        TRAŽI!
      </button>
    </form>
  );
};

export default SearchForm; 