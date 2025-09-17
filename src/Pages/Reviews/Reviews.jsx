import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Error loading reviews:', err));
  }, []);

  const renderStars = (count) =>
    '★★★★★'.slice(0, count) + '☆☆☆☆☆'.slice(0, 5 - count);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Trusted by 100,000+ customers to fuel their mornings</h2>

      <div className="review-grid">
        {reviews.map((r) => (
          <article className="review-card" key={r.id}>
            {r.avatar ? (
              <img src={r.avatar} alt={r.name} className="review-avatar" />
            ) : (
              <span className="review-avatar placeholder">
                {r.name?.charAt(0)}
              </span>
            )}

            <h4 className="review-name">{r.name}</h4>
            <p className="review-text">“{r.review}”</p>
            <p className="review-stars">{renderStars(r.rating)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
