import React, { useEffect, useState } from 'react';


const ShowProduct = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://serene-fortress-92200.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    const reserveImg = "https://i.ibb.co/KNBqVtG/almonds.png";

    return (
        <div className="bg-yellow-50">
            <h1 className="pt-10 pb-10 text-center text-3xl font-bold text-gray-700">Product Inventory </h1>


            {
                products.length ? <div className="overflow-x-auto">
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


                        {
                            products.map(product => <tbody
                                key={product._id}
                            >
                                <tr className="hover">
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-14 h-14 mask mask-squircle">
                                                    <img src={product.productImageURLs || reserveImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {product.productName}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    { }
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$ {product.productPrice}</td>
                                    <td>{product.productCategory}</td>
                                    <td>
                                        {product.productQuantity}
                                    </td>
                                    <td>

                                        {
                                            product.productQuantity < 0 ? <div className="badge badge-error"><i className="far fa-clock mr-2"></i>Out of stock</div> : <div className="badge badge-success"><i className="fas fa-shipping-fast mr-2"></i> In stock</div>
                                        }

                                    </td>
                                    <td>

                                        {
                                            product.status === "pending" ? <button className=" bg-purple-600 transition duration-150 mr-3 hover:bg-purple-800 text-white px-4 py-2 rounded-md"><i className="fas fa-shipping-fast mr-2"></i> Edit</button> : <button className=" bg-green-500 transition duration-150 mr-3 text-white px-4 py-2 rounded-md"><i className="fas fa-check-circle mr-2"></i> Edit</button>
                                        }


                                        <button className=" bg-red-600 transition duration-150 hover:bg-red-800 text-white px-4 py-2 rounded-md"><i className="fas fa-trash mr-2"></i> Delete</button>
                                    </td>
                                </tr>

                            </tbody>)
                        }





                    </table>
                </div> : <div>
                    <h2 className="py-10 bg-red-200 mx-auto text-xl ">No orders found for this user</h2>
                </div>
            }




        </div>


    );
};

export default ShowProduct;