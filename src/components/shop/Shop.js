import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 21)));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop">
      <div className="products-container">
        <h2> all products </h2>
        <div className="display-products">
          {products.map((product) => (
            <Product
              handleAddToCart={handleAddToCart}
              key={product.id}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h2> Cart Add : {cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;
