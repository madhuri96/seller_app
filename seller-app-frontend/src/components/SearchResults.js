import React, { useState } from 'react';

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Perform search based on the searchTerm
      const response = await fetch(`/api/search?term=${searchTerm}`);
      const data = await response.json();

      // Update the searchResults state with the search results
      setSearchResults(data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div>
      <h1>Search Results</h1>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search for products'
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display search results */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
