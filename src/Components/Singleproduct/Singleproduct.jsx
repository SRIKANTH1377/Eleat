import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./singleProduct.css";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state;

  const [cart, setCart] = useState([]); 

  if (!product) {
    return <p className="not-found">Product not found</p>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      setCart([...cart, product]);
      alert(`${product.protein} added to cart!`);
    }
  };

  const handleRemoveFromCart = () => {
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
      alert(`${product.protein} removed from cart!`);
    }
  };

  return (
    <div className="single-product-container">
      <div className="single-product-image-container">
        <img
          src={product.image}
          alt={product.protein}
          className="single-product-image"
        />
      </div>

      <div className="single-product-info">
        <h1 className="product-title">{product.protein}</h1>
        <p className="product-grams">{product.grams}</p>
        {product.price && <p className="product-price">{product.price}</p>}
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}

        {product.ingredients && (
          <div className="product-ingredients">
            <h3>Ingredients:</h3>
            <ul>
              {product.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {product.benefits && (
          <div className="product-benefits">
            <h3>Benefits:</h3>
            <ul>
              {product.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="cart-buttons">
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            Add to Cart
          </button>

          <button
            className="remove-from-cart-btn"
            onClick={handleRemoveFromCart}
            disabled={!isInCart}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
