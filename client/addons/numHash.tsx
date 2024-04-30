import React, { useState } from 'react';
 
const MyComponent = () => {
  const [number, setNumber] = useState(12345);

  const toHash = (num) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let hash = "";
    while (num > 0) {
      const remainder = num % 62; // Use base 62 for shorter representation
      hash = alphabet[remainder] + hash;
      num = Math.floor(num / 62);
    }
    return hash.slice(0, 15); // Get first 10-15 characters
  };

  const hash = toHash(number);

  return ({hash});
};

export default MyComponent;
