import React from 'react';
import './Banner.css';
import Button from '../atoms/Button';

const Banner = ({ image, title }) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner-overlay">
        <h1 className="banner-title">{title}</h1>
        <Button label="Ir a la serie" onClick={() => alert('Reproduciendo...')} />
      </div>
    </div>
  );
};

export default Banner;
