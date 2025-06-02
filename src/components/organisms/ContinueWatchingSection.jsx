import React from 'react';
import './ContinueWatchingSection.css';

const ContinueWatchingSection = ({ items }) => {
  return (
    <section className="continue-watching-section">
      <h2>Continuar viendo</h2>
      <div className="continue-row">
        {items.map((item, index) => (
          <div className="continue-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatchingSection;
