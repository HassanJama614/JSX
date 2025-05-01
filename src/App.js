import React from 'react';
import ProductImage from './Image';
import ProductName from './Name';
import ProductPrice from './Price';
import ProductDescription from './Description';
import product from './product';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { ThemeProvider } from 'react-bootstrap'; 

const firstName = "Hassan"; 

function App() {
  return (
    <div className="app-container">
      <Card className="product-card">
        <ProductImage image={product.image} name={product.name} />
        <Card.Body>
          <ProductName name={product.name} />
          <ProductPrice price={product.price} />
          <ProductDescription description={product.description} />
        </Card.Body>
      </Card>

      <div className="greeting-section">
        {firstName ? (
          <>
            <p className="greeting-message">Hello, {firstName}!</p>
            <img
              src={product.image} 
              alt={firstName}
              className="user-image"
            />
          </>
        ) : (
          <p className="greeting-message">Hello, there!</p>
        )}
      </div>
    </div>
  );
}

function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default RootApp;