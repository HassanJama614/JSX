import React from 'react';
import Card from 'react-bootstrap/Card';

function Image({ image, name }) {
  return <Card.Img variant="top" src={image} alt={name} className="product-image" />;
}

export default Image;