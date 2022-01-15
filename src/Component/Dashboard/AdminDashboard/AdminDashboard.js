import React from 'react';
import './AdminDashboard.css'

const AdminDashboard = (props) => {
  const { productName, productCategory, productPrice, productQuantity, productImageURL } = props?.products;
  return (
    <div>
      <h1 style={{ fontWeight: 'bold' }}>Show All The Products!!</h1>
      <table>
        <thead>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Product Image</th>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>{productCategory}</td>
            <td>{productPrice}</td>
            <td>{productQuantity}</td>
            <td>{productImageURL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;