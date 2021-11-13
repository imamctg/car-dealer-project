import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';



const AllOrders = () => {

    const [status, setStatus] = useState('')

    const [orders, setOrders] = useState([]);


    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    console.log(status);

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
                    alert('Deleted')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }
    const handleUpdate = id => {
        console.log(id)
        const url = `https://frozen-crag-22043.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                }
            })

    }


    return (

        <div className="container">
            <h1>All Orders {orders?.length}</h1>
            <div >

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>

                            <th>Email</th>

                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>

                                <td>{order?.email}</td>

                                <td>{order?.date}</td>
                                <input onBlur={handleStatus} placeholder={order?.status} type="text" />
                                <button onClick={() => handleDelete(order?._id)}>Delete</button>
                                <button onClick={() => handleUpdate(order?._id)}>Update</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>


    );
};

export default AllOrders;