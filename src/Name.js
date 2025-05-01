import React from 'react';
import product from './product';
import Card from 'react-bootstrap/Card';

function Name() {
  return <Card.Title className="product-name">{product.name}</Card.Title>;
}

export default Name;