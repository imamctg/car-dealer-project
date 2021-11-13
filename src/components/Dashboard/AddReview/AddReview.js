import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';




const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const [ratting, setRatting] = useState(1)
    console.log(ratting);
    const thirdExample = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 4,
        color: "blue",
        activeColor: "red",
        onChange: newValue => {
            setRatting(newValue);
        }
    }



    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-crag-22043.herokuapp.com/reviews', data)
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
            <h2>Please Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Car Name" />
                <textarea {...register("review")} placeholder="Reviews regarding car" />
                <input {...register("img")} placeholder="image" />
                <input   {...register("ratting", { required: true, maxLength: 20 })} placeholder="Please drop your rating (0-5)in number" />
                <ReactStars  {...thirdExample} />
                <input type="submit" />
            </form>
        </div>

    );
};

export default AddReview;