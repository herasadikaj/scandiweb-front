/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Search from './search';
import './list.css';

const ProductList = () => {

  const [products, setProducts] = useState(() => {
    const savedProducts = JSON.parse(localStorage.getItem('product-data'));
    return (
      savedProducts || [
  
        { id: nanoid(), sku: 'B001', name: 'Book One', price: 15.99, type: 'book', weight: 1.2 },
        { id: nanoid(), sku: 'B002', name: 'Book Two', price: 12.99, type: 'book', weight: 1.0 },
        { id: nanoid(), sku: 'B003', name: 'Book Three', price: 18.99, type: 'book', weight: 1.5 },
        { id: nanoid(), sku: 'B004', name: 'Book Four', price: 20.99, type: 'book', weight: 2.1 },
        
  
        { id: nanoid(), sku: 'D001', name: 'DVD One', price: 9.99, type: 'dvd', size: 700 },
        { id: nanoid(), sku: 'D002', name: 'DVD Two', price: 14.99, type: 'dvd', size: 800 },
        { id: nanoid(), sku: 'D003', name: 'DVD Three', price: 12.99, type: 'dvd', size: 750 },
        { id: nanoid(), sku: 'D004', name: 'DVD Four', price: 19.99, type: 'dvd', size: 900 },
        
        
        { id: nanoid(), sku: 'F001', name: 'Chair', price: 89.99, type: 'furniture', height: 120, width: 60, length: 70 },
        { id: nanoid(), sku: 'F002', name: 'Table', price: 150.00, type: 'furniture', height: 90, width: 120, length: 180 },
        { id: nanoid(), sku: 'F003', name: 'Couch', price: 499.99, type: 'furniture', height: 80, width: 200, length: 90 },
        { id: nanoid(), sku: 'F004', name: 'Bed', price: 299.99, type: 'furniture', height: 100, width: 180, length: 200 }
      ]
    );
  });

  const [searchText, setSearchText] = useState('');
  const [checkedProducts, setCheckedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('product-data', JSON.stringify(products));
  }, [products]);

  const handleSearchNote = (searchTerm) => {
    setSearchText(searchTerm.toLowerCase());
  };

  const handleCheckboxChange = (productId) => {
    setCheckedProducts((prevChecked) => {
      const newCheckedProducts = prevChecked.includes(productId)
        ? prevChecked.filter((id) => id !== productId)
        : [...prevChecked, productId];
      return newCheckedProducts;
    });
  };

  const handleDeleteSelected = () => {
    const updatedProducts = products.filter(
      (product) => !checkedProducts.includes(product.id)
    );
    setProducts(updatedProducts);
    setCheckedProducts([]);
  };

  const renderAttributes = (product) => {
    switch (product.type) {
      case 'book':
        return <p>Weight: {product.weight} kg</p>;
      case 'dvd':
        return <p>Size: {product.size} MB</p>;
      case 'furniture':
        return (
          <div>
            <p>Height: {product.height} cm</p>
            <p>Width: {product.width} cm</p>
            <p>Length: {product.length} cm</p>
          </div>
        );
      default:
        return null;
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );

  return (
    <div className="container">
      <Header
        onDelete={handleDeleteSelected}
        onAdd={() => navigate('/add-product')}
      />
      <Search searchText={searchText} onSearch={handleSearchNote} />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <input
              type="checkbox"
              checked={checkedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <h3>{product.name}</h3>
            <p>SKU: {product.sku}</p>
            <p>Price: ${product.price}</p>
            {renderAttributes(product)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
