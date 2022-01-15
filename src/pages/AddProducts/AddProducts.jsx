import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

// -------- SHAHRIAR IS WORKING HERE-------- //

const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://serene-fortress-92200.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added successfully');
                    reset();
                }
            })
    };



    return (
        <div>
            <h2 className='text-3xl font-bold text-teal-600 text-center'>Add a new Product</h2>





            <form className='text-center mt-20 flex flex-col w-5/6 md:w-3/6 lg:w-2/5 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <label className=' text-left text-sm' >Product Name</label>
                <input required className='py-3 px-3 bg-teal-50 mb-5 rounded outline-none' {...register("productName")} />

                <label className=' text-left text-sm' >Product Category</label>
                <input required className='py-3 px-3 bg-teal-50 mb-5 rounded outline-none' {...register("productCategory")} />

                <label className=' text-left text-sm' >Product Price</label>
                <input required type='number' className='py-3 px-3 bg-teal-50 mb-5 rounded outline-none' {...register("productPrice")} />

                <label className=' text-left text-sm' >Product Quantity</label>
                <input required type='number' className='py-3 px-3 bg-teal-50 mb-5 rounded outline-none' {...register("productQuantity")} />

                <label className=' text-left text-sm' >Product Image URL</label>
                <input required className='py-3 px-3 bg-teal-50 mb-5 rounded outline-none' {...register("productImageURL")} />

                <input className='py-3 bg-teal-600 mt-5 rounded cursor-pointer text-white' type="submit" value="Add Now" />
            </form>
        </div>
    );
};

export default AddProducts;