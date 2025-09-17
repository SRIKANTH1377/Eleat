import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import "./productCarousel.css";

const ProductCarousel = ({ products = [] }) => {
  const itemsPerPage = 4;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="product-carousel">
      <div className="product-slider">
        {currentItems.map((item) => (
          <div className="card-wrap" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="nav-bar">
          <button onClick={() => setPage(Math.max(page - 1, 0))} disabled={page === 0}>‹</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={page === i ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setPage(Math.min(page + 1, totalPages - 1))} disabled={page === totalPages - 1}>›</button>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
