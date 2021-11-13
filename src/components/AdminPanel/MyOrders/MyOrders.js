import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    console.log(orders);

    const matched = orders.filter(order => order.email === user.email)
    console.log(matched);

    useEffect(() => {
        fetch("https://frozen-crag-22043.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const handleDelete = id => {
        const url = `https://frozen-crag-22043.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are You Confirm to Delete?')
                    const remaining = orders.filter(booking => booking._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div>
            <h1>My Orders {matched?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {matched?.map((pd, index) => (
                    <tbody key={pd?._id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.status}</td>

                            <button onClick={() => handleDelete(pd?._id)}>Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;