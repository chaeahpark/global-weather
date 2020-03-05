import React from 'react';
import '../styles/searchBar.css';

const SearchBar = ({ query, handleQueryChange }) => {
  return (
    <div className="ui input">
      <input
        className="searchInput"
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default SearchBar;
