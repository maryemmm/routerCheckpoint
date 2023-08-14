import React from 'react';
import './App.css';
const Filter = ({ title, rate, handleTitleChange, handleRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rate}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;
