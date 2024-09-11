/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './add.css';

const Header = ({ onSave }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2>Product Add</h2>
      <button className="btn btn-primary" onClick={onSave}>Save</button>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
    </header>
  );
};

export default Header;
