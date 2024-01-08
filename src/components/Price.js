// src/components/Price.js
import React from 'react';

const Price = ({ productPrice }) => {
    return <p style={{ color: 'orange', fontSize: '1.3em', fontWeight: 'bold', margin: '0' }}>{productPrice}</p>;
};

export default Price;