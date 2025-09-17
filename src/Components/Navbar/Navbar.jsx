import React from 'react';
import './navbar.css';     

export default function CarouselButtons({ onPrev, onNext, className = '' }) {
  return (
    <div className={`carousel-buttons ${className}`}>
      <button type="button" className="carousel-btn prev" aria-label="Previous slide" onClick={onPrev}>
        ❮
      </button>

      <span className="carousel-message">
        <u>Free Chocolate Granola Pouch With Orders Over £60</u>
      </span>

      <button type="button" className="carousel-btn next" aria-label="Next slide" onClick={onNext}>
        ❯
      </button>
    </div>
  );
}
