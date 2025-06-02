import React from 'react';
import './Card.css';

const Card = ({ image, title, isTopTen = false }) => {
  return (
    <div className={`card ${isTopTen ? 'top-ten-card' : ''}`}>
      {isTopTen && <div className="top-number">1</div>}
      <img src={image} alt={title} />
      {!isTopTen && <h4>{title}</h4>}
    </div>
  );
};

export default Card;