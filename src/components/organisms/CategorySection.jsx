import React from 'react';
import './CategorySection.css';
import Card from '../molecules/Card';

const CategorySection = ({ title, items }) => {
  return (
    <section className="category-section">
      <h2>{title}</h2>
      <div className="card-row">
        {items.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
