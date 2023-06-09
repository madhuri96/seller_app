import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to='/dashboard/add-store-info'>Add Store Info</Link>
        </li>
        <li>
          <Link to='/dashboard/add-category'>Add Category</Link>
        </li>
        <li>
          <Link to='/dashboard/add-subcategory'>Add Subcategory</Link>
        </li>
        <li>
          <Link to='/dashboard/add-inventory'>Add Inventory</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
