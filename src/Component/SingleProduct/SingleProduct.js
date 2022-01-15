import React from "react";

const SingleProduct = ({ product, handleDeleteProduct }) => {
  const reserveImg = "https://i.ibb.co/KNBqVtG/almonds.png";
  return (
    <tbody>
      <tr className="hover">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-14 h-14 mask mask-squircle">
                <img
                  src={product.productImageURLs || reserveImg}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.productName}</div>
              <div className="text-sm opacity-50">{}</div>
            </div>
          </div>
        </td>
        <td>$ {product.productPrice}</td>
        <td>{product.productCategory}</td>
        <td>{product.productQuantity}</td>
        <td>
          {product.productQuantity <= 0 ? (
            <div className="badge badge-error">
              <i className="far fa-clock mr-2"></i>Out of stock
            </div>
          ) : (
            <div className="badge badge-success">
              <i className="fas fa-shipping-fast mr-2"></i> In stock
            </div>
          )}
        </td>
        <td>
          {product.status === "pending" ? (
            <button className=" bg-purple-600 transition duration-150 mr-3 hover:bg-purple-800 text-white px-4 py-2 rounded-md">
              <i className="fas fa-shipping-fast mr-2"></i> Edit
            </button>
          ) : (
            <button className=" bg-green-500 transition duration-150 mr-3 text-white px-4 py-2 rounded-md">
              <i className="fas fa-check-circle mr-2"></i> Edit
            </button>
          )}

          <button
            onClick={() => handleDeleteProduct(product._id)}
            className=" bg-red-600 transition duration-150 hover:bg-red-800 text-white px-4 py-2 rounded-md"
          >
            <i className="fas fa-trash mr-2"></i> Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleProduct;
