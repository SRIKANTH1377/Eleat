import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import "./products1.css";

const Products1 = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8081/products");
      setProducts(res.data);
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



