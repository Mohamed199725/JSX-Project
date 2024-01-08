// src/App.js/ the root component is here
import React from 'react';
import product from './product';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import { Card } from 'react-bootstrap';

const firstName = 'Mohamed'; // Replace with your first name

const App = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Card style={{ width: '350px', margin: 'auto',border: '1px solid #ddd' }}>
        <Card.Body>
          <div style={{ marginBottom: '10px' }}>
            <Image productImage={product.image} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Name productName={product.name} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Price productPrice={product.price} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Description productDescription={product.description} />
          </div>
        </Card.Body>
      </Card>
      <div style={{ marginTop: '20px' }}>
        <p  style={{ color: 'black', fontSize: '1.1em', fontWeight: 'arial', margin: '0' }}>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</p>
        {firstName && (         // this is the conditional part !
          <div style={{ marginTop: '10px' }}>
            <Image productImage="/streaming.jpg" imageSize="200px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;