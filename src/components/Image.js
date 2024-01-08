// src/components/Image.js
import React from 'react';

const Image = ({ productImage, imageSize }) => {
    return <img src={productImage} alt="Gaming Streamer" style={{ maxWidth: imageSize || '100%', width: '100%' }} />;
};

export default Image;