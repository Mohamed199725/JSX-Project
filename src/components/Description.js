// src/components/Description.js
import React from 'react';

const Description = ({ productDescription }) => {
    return <p style={{ color: 'green', fontSize: '1.3em', margin: '0' }}>{productDescription}</p>;
};

export default Description;