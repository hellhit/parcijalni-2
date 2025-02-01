import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const [userResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`)
      ]);

      if (!userResponse.ok) {
        throw new Error('Korisnik nije pronađen. Provjerite korisničko ime i pokušajte ponovno.');
      }

      const userData = await userResponse.json();
      const reposData = await reposResponse.json();
      
      setUser(userData);
      setRepositories(reposData);
    } catch (error) {
      setError(error.message);
      setUser(null);
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUsername('');
    setUser(null);
    setRepositories([]);
    setError(null);
  };

  return (
    <div className="App">
      <h1>GitHub pretraživanje korisnika</h1>
      
      {!user && (
        <SearchForm 
          username={username}
          onChange={setUsername}
          onSubmit={fetchUserData}
        />
      )}

      {loading && <div className="loading">Učitavanje...</div>}
      
      {error && <div className="error">{error}</div>}
      
      {user && (
        <UserDetails 
          user={user}
          repositories={repositories}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App; 