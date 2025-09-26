import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCarousel from "./Productcarousel";
import { useNavigate } from "react-router-dom"; 
import "./products2.css";
import data from "../../db.js"

const Products2 = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try { 
      setProducts(data.products2 || []);
    } catch (err) {
      console.error("Error fetching products2:", err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products2-container">
      <div className="product-categories">
        <button type="button" aria-label="Filter Oats">
          <h1>Oats</h1>
          <h6>400g pouches</h6>
        </button>
        <button type="button" aria-label="Filter Cereal">
          <h1>Cereal</h1>
          <h6>260g pouches</h6>
        </button>
        <button type="button" aria-label="Filter Granola">
          <h1>Granola</h1>
          <h6>300g pouches</h6>
        </button>
      </div>
      <ProductCarousel products={products} />

      <div className="pickup">
        <img
          src="https://cdn.shopify.com/s/files/1/0612/0852/7092/files/ChocCaramel-Line_c8b283d9-1297-4ebc-afa1-f15a9042929f.png?v=1710947141"
          alt="Decorative chocolate caramel line"
        />
        <div className="pickup-overlay">
          <h2>Why not build your own bundle?</h2>
          <button type="button" onClick={() => navigate("/pick-now")}>
            Pick now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products2;
