import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import "./products1.css";
import data from "../../db.js";


const Products1 = () => {
  const [products, setProducts] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products1:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products1-container">
      {products.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Products1;
