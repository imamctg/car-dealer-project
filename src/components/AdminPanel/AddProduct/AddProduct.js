import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-crag-22043.herokuapp.com/products/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
                console.log(res);
            })
    }
    return (
        <div className="add-service">
            <h2>Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("id", { required: true, maxLength: 20 })} placeholder="id" />
                <textarea {...register("description")} placeholder="Description" />


                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;