import React from 'react';
import product from './product';
import Card from 'react-bootstrap/Card';

function Description() {
  return <Card.Text className="product-description">{product.description}</Card.Text>;
}

export default Description;