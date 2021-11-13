import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();
    console.log(id)
    const [products, setproducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('https://frozen-crag-22043.herokuapp.com/products/')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    const Item = products?.filter(td => td.id == id);
    console.log(Item);

    const onSubmit = data => {
        data.status = "pending";
        fetch('https://frozen-crag-22043.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order has been completed !')
                    reset();
                }
            })
    };


    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h2>Your Order Details</h2>

                    <div className="container service">
                        <Card className="mb-2 card shadow-lg" style={{ width: '18rem' }}>
                            <Card.Img style={{ height: '180px' }} variant="top" src={Item[0]?.img} />
                            <Card.Body>
                                <Card.Title>{Item[0]?.name}</Card.Title>
                                <Card.Title>Price : $  {Item[0]?.price}</Card.Title>
                                <Card.Text>Description: {Item[0]?.fullDesc}</Card.Text>
                            </Card.Body>
                        </Card>


                    </div>

                </div>
                <div className="col-md-6">
                    <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />
                        <input type="date" placeholder="date" defaultValue="date" {...register("date")} />



                        <input type="submit" />
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Purchase;