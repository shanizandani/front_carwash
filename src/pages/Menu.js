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
      const response = await fetch('http://127.0.0.1:8000/api/products/', {
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






// import React, { useState, useEffect } from 'react';
// import MenuItem from '../components/MenuItem';
// import '../styles/Menu.css';


// const Menu = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/products/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       if (response.status === 200) {
//         setProducts(data);
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <div className="menu">
//       <h1 className="menuTitle">Our Menu</h1>
//       <div className="menuList">
//         {products.map((product, index) => (
//           <MenuItem
//             key={index}
//             cover={product.cover} // Replace with the actual property name from your Product model
//             name={product.name}
//             price={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;


