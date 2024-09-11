/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import './add.css';

const ProductAdd = () => {
  const [formData, setFormData] = useState({
    sku: '',
    name: '',
    price: '',
    productType: '',
    weight: '',
    size: '',
    height: '',
    width: '',
    length: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const newProduct = {
      id: nanoid(),
      sku: formData.sku,
      name: formData.name,
      price: formData.price,
      type: formData.productType,
      weight: formData.weight || undefined, 
      size: formData.size || undefined,
      height: formData.height || undefined,
      width: formData.width || undefined,
      length: formData.length || undefined
    };
  
   
    const savedProducts = JSON.parse(localStorage.getItem('product-data')) || [];
    savedProducts.push(newProduct);
    localStorage.setItem('product-data', JSON.stringify(savedProducts));
    
    navigate('/');
  };
  
  const renderAttributes = () => {
    switch (formData.productType) {
      case 'book':
        return (
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
        );
      case 'dvd':
        return (
          <div>
            <label htmlFor="size">Size (MB):</label>
            <input
              type="number"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </div>
        );
      case 'furniture':
        return (
          <div>
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
            <label htmlFor="width">Width (cm):</label>
            <input
              type="number"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleChange}
              required
            />
            <label htmlFor="length">Length (cm):</label>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="add-product-container">
      <Header onSave={handleSave} />
      <div className="card">
        <form className="product-form">
          <div className="form-group">
            <label htmlFor="sku">SKU:</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($):</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productType">Product Type:</label>
            <select
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="book">Book</option>
              <option value="dvd">DVD</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>

          {renderAttributes()}
        </form>
      </div>
    </div>
  );
};

export default ProductAdd;
