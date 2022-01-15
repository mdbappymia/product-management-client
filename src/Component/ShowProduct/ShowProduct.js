import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const ShowProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://serene-fortress-92200.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  const handleDeleteProduct = (id) => {
    const isDelete = window.confirm("Are you sure delete this product?");
    if (isDelete) {
      fetch(`https://serene-fortress-92200.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            const remaining = products.filter((product) => product._id !== id);
            alert("Delete Successfully");
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div className="bg-yellow-50">
      <h1 className="pt-10 pb-10 text-center text-3xl font-bold text-gray-700">
        Product Inventory{" "}
      </h1>

      {products.length ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="hover">
                <th className="px-3">Product</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            {products.map((product) => (
              <SingleProduct
                key={product._id}
                handleDeleteProduct={handleDeleteProduct}
                product={product}
              />
            ))}
          </table>
        </div>
      ) : (
        <div>
          <h2 className="py-10 bg-red-200 mx-auto text-xl ">
            No orders found for this user
          </h2>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
