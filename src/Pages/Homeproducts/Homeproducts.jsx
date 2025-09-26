import React, { useState } from "react";
import "./homeproducts.css";
import scanner from "./scanner.jpg"; 

const Homeproducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  const products = [
    {
      id: 1,
      image:
        "https://eleatcereal.com/cdn/shop/files/3_fcf709da-016d-4cf1-9f0c-8aac0df2faa2.png?v=1745846816",
      protein: "Protein Oats",
      grams: "20g protein per meal",
      price: "$6.99",
      description:
        "Delicious oats packed with high-quality protein for a nutritious breakfast.",
      ingredients: ["Oats", "Whey Protein", "Chia Seeds", "Almonds"],
      benefits: ["Boosts energy", "Supports muscle growth", "High in fiber"],
    },
    {
      id: 2,
      image:
        "https://eleatcereal.com/cdn/shop/files/2_9e39b86a-3fc2-40e0-8d92-cd35d355edd0.png?v=1745846817",
      protein: "Protein Cereal",
      grams: "16g protein per meal",
      price: "$5.49",
      description:
        "Crunchy cereal with added protein, perfect for a quick and healthy breakfast.",
      ingredients: ["Cornflakes", "Soy Protein", "Oats", "Honey"],
      benefits: ["Quick energy", "Protein-rich", "Deliciously crunchy"],
    },
    {
      id: 3,
      image:
        "https://eleatcereal.com/cdn/shop/files/1_ea3dc20d-e550-4a1d-a7dc-de7ee026a6bb.png?v=1745846816",
      protein: "Protein Granola",
      grams: "15g protein per meal",
      price: "$7.99",
      description:
        "Granola clusters with protein for a crunchy, nutritious snack or breakfast option.",
      ingredients: ["Oats", "Almonds", "Peanuts", "Honey", "Whey Protein"],
      benefits: ["Energy-boosting", "High in protein", "Satisfying crunch"],
    },
    {
      id: 4,
      image:
        "https://weetabix.co.uk/wp-content/uploads/2020/11/7-Protein-Chrunch-Chocolate-2017.png",
      protein: "Chocolate Protein Cereal",
      grams: "18g protein per meal",
      price: "$6.49",
      description:
        "Rich chocolate-flavored cereal with protein to keep you energized.",
      ingredients: ["Cocoa", "Cornflakes", "Whey Protein", "Oats"],
      benefits: ["Tasty chocolate flavor", "Protein-rich", "Mood booster"],
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/originals/fd/a8/40/fda8409e9f15e998f8e40baf7d9f21a2.jpg",
      protein: "Berry Protein Oats",
      grams: "19g protein per meal",
      price: "$7.29",
      description:
        "Oats infused with berry flavor and loaded with protein for a refreshing meal.",
      ingredients: ["Oats", "Strawberries", "Blueberries", "Soy Protein"],
      benefits: ["Antioxidant-rich", "Fresh flavor", "Muscle recovery"],
    },
    {
      id: 6,
      image:
        "https://m.media-amazon.com/images/I/8167Ldc3KtL._SL1500_.jpg",
      protein: "Vanilla Protein Granola",
      grams: "17g protein per meal",
      price: "$6.79",
      description:
        "Sweet vanilla-flavored granola clusters for a protein-packed snack.",
      ingredients: ["Oats", "Honey", "Vanilla Extract", "Whey Protein"],
      benefits: ["Rich flavor", "Boosts energy", "Supports immunity"],
    },
    {
      id: 7,
      image:
        "https://cdn.shopify.com/s/files/1/0138/5545/7337/products/1v2_530x@2x.jpg?v=1617650724",
      protein: "Peanut Butter Protein Cereal",
      grams: "21g protein per meal",
      price: "$8.49",
      description:
        "Crunchy peanut butter cereal with high protein to fuel your day.",
      ingredients: ["Cornflakes", "Peanuts", "Peanut Butter", "Soy Protein"],
      benefits: ["Healthy fats", "Protein-packed", "Satisfying flavor"],
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/originals/6e/c3/2f/6ec32f2db94823ee7cd77efb9823c58e.jpg",
      protein: "Coconut Protein Oats",
      grams: "18g protein per meal",
      price: "$7.59",
      description:
        "Creamy coconut-flavored oats with added protein for a tropical twist.",
      ingredients: ["Oats", "Coconut Flakes", "Whey Protein", "Chia Seeds"],
      benefits: ["Rich in fiber", "Tropical taste", "Boosts metabolism"],
    },
    {
      id: 9,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2017/01/honey-almond-granola-7.jpg",
      protein: "Honey Almond Granola",
      grams: "20g protein per meal",
      price: "$6.99",
      description:
        "Crunchy granola with honey and almonds, boosted with protein.",
      ingredients: ["Oats", "Honey", "Almonds", "Soy Protein"],
      benefits: ["Rich in vitamins", "Good for heart health", "Sweet and crunchy"],
    },
    {
      id: 10,
      image:
        "https://i5.walmartimages.com/asr/d16e24bf-9b91-4cc0-8b3e-634515fdc5aa.b2066365c7adaec838766f1bd2c2f45c.png",
      protein: "Mixed Protein Pack",
      grams: "22g protein per meal",
      price: "$9.49",
      description:
        "A variety pack combining different protein cereals, oats, and granola.",
      ingredients: ["Oats", "Cornflakes", "Honey", "Peanuts", "Soy Protein"],
      benefits: ["All-in-one nutrition", "Great for variety", "High in protein"],
    },
  ];

  const handleShopNow = (product) => {
    setSelectedProduct(product);
    setShowScanner(false);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setShowScanner(false);
  };

  const handleBuyNow = () => {
    setShowScanner(true); 
  };

  const handlePay = () => {
    alert(`Payment successful for ${selectedProduct.protein}! 🎉`);
    setSelectedProduct(null);
    setShowScanner(false);
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.protein} />
            <h2>
              {product.protein.length > 15
                ? product.protein.slice(0, 15) + "..."
                : product.protein}
            </h2>
            <h6>{product.grams}</h6>
            <h2>
              {product.description.length > 40
                ? product.description.slice(0, 40) + "..."
                : product.description}
            </h2>
            <h6>
              {product.ingredients.length > 3
                ? product.ingredients.slice(0, 3) + "..."
                : product.ingredients.slice(0)}
            </h6>
            <h6>
              {product.benefits.length > 3
                ? product.benefits.slice(0, 3) + "..."
                : product.benefits.slice(0)}
            </h6>
            <p className="price">{product.price}</p>
            <button onClick={() => handleShopNow(product)}>Shop Now</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            {!showScanner ? (
              <>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.protein}
                />
                <h2>{selectedProduct.protein}</h2>
                <h6>{selectedProduct.grams}</h6>
                <p>{selectedProduct.description}</p>
                <p>
                  <strong>Ingredients:</strong>{" "}
                  {selectedProduct.ingredients.join(", ")}
                </p>
                <p>
                  <strong>Benefits:</strong>{" "}
                  {selectedProduct.benefits.join(", ")}
                </p>
                <p className="price">{selectedProduct.price}</p>

                <div className="modal-buttons">
                  <button onClick={handleBuyNow} className="buy-btn">
                    Buy Now
                  </button>
                  <button onClick={handleCancel} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="scanner">
                <h3>Scan &amp; Pay Using PhonePe</h3>
                <img src={scanner} alt="PhonePe QR Code" className="qr-code" />

                <button onClick={handlePay} className="pay-btn">
                  Pay {selectedProduct.price}
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homeproducts;

