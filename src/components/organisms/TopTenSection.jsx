import React from 'react';
import './TopTenSection.css';
import Card from '../molecules/Card';

const TopTenSection = ({ items, title = "Top 10", subtitle = "Películas hoy" }) => {
  return (
    <section className="top-ten-section">
      <div className="top-ten-header">
        <h2 className="top-ten-title">{title}</h2>
        <h3 className="top-ten-subtitle">{subtitle}</h3>
      </div>
      <div className="top-ten-row">
        {items.map((item, index) => (
          <div className="top-ten-card" key={index}>
            <div className="top-number">
              <span>{index + 1}</span>
              {item.trending && (
                <span className={`trend-indicator ${item.trending}`}>
                  {item.trending === 'up' ? '↑' : '↓'}
                </span>
              )}
            </div>
            <Card image={item.image} title={item.title} isTopTen />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTenSection;