import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
  const { sellerId } = useParams();

  return (
    <div>
      <h1>Inventory</h1>
      <p>Seller ID: {sellerId}</p>
      {/* Display inventory data */}
    </div>
  );
};

export default Inventory;
