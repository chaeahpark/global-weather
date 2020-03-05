import React from 'react';

const SearchBar = ({ query, handleQueryChange }) => {
  return (
    <div className="ui input">
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default SearchBar;
