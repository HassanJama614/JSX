import React from 'react';
import product from './product';
import Card from 'react-bootstrap/Card';

function Price() {
  return <Card.Subtitle className="mb-2 text-muted product-price">Price: ${product.price.toFixed(2)}</Card.Subtitle>;
}

export default Price;