import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = (props) => {
  const { image, protein, id, grams, price } = props.data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { state: props.data });
  };

  return (
    <div className="card-outer">
      <img src={image} className="card-image" alt={protein} />
      <div className="card-inner">
        <h5 className="protein">{protein}</h5>
        <p className="grams">{grams}</p>
        <p className="price">{price}</p>
        <button onClick={handleClick}>Shop Now</button>
      </div>
    </div>
  );
};

export default Card;







