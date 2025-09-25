// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../../Components/Card/Card";
// import "./products1.css";

// const Products1 = () => {
//   const [products, setProducts] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8081/products");
//       setProducts(res.data);
//     } catch (error) {
//       console.error("Error fetching products1:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="products1-container">
//       {products.map((item) => (
//         <Card key={item.id} data={item} />
//       ))}
//     </div>
//   );
// };

// export default Products1;



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
      // Fetch products array from db.json
      // const res = await axios.get(`${process.env.PUBLIC_URL}/db.json`);
      // const dbData = await fetch("./db.json");
      // const res = await dbData.json();   
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
