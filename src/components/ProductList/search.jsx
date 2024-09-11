/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './list.css'
const Search = ({ searchText, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchText}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
