import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <input 
      type="search" 
      placeholder="Search monsters"
      onChange={onSearchChange} 
    />
  );
};
export default SearchBox;