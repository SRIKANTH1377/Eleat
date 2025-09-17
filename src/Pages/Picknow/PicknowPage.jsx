import React, { useEffect, useState } from "react";
import axios from "axios";
import "./picknowpage.css";

const PickNowPage = () => {
  const [products, setProducts] = useState([]);
  const [bundle, setBundle] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8081/products2");
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToBundle = (product) => {
    setBundle((prev) => [...prev, product]);
    setIsDrawerOpen(true); // open drawer when item added
  };

  const handleRemoveFromBundle = (id) => {
    setBundle((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="pick-now-page">
      <h1 className="text-center mt-4">Build Your Own Bundle</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>₹{product.price}</strong></p>
            <button onClick={() => handleAddToBundle(product)}>Add to Bundle</button>
          </div>
        ))}
      </div>

      {/* Drawer / Bundle Container */}
      <div className={`bundle-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="bundle-header">
          <h2>Your Bundle</h2>
          <button onClick={() => setIsDrawerOpen(false)}>X</button>
        </div>
        <div className="bundle-items">
          {bundle.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            bundle.map((item) => (
              <div key={item.id} className="bundle-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromBundle(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PickNowPage;
