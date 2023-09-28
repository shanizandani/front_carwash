import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';


const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('https://project-carwash.onrender.com/api/products/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {products.map((product) => (
          <MenuItem key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;




