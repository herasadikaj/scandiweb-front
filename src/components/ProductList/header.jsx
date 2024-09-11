/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './list.css';

const Header = ({ onSave, onDelete }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2>Product List</h2>
      <button className="btn btn-primary" onClick={() => navigate('add-product')}>Add</button>
      <button className="btn btn-secondary" onClick={onDelete}>Mass Delete</button>
    </header>
  );
};

export default Header;
