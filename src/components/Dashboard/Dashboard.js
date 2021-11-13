import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AdminPanel/AddProduct/AddProduct';
import AllOrders from '../AdminPanel/AllOrders/AllOrders';
import ManageProducts from '../AdminPanel/ManageProducts/ManageProducts';
import MyOrders from '../AdminPanel/MyOrders/MyOrders';
import AddReview from './AddReview/AddReview';
import './Dashboard.css';
import MakeAdmin from './MakeAdmin';
import Payment from './Payment/Payment';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth()
    return (
        <div>
            <div className="dashboard-container  ">
                <div className="row mxx-auto">
                    <div className="col-md-3 ">
                        <div className="dashboard bg-color">
                            <h5>Dashboard</h5>

                            {admin ?
                                <div className="admin-dashboard">
                                    <li className="dashboard-menu mt-5 fw-bold">Admin Activity</li>


                                    <Link to={`${url}/allOrders`}>
                                        <li className="dashboard-menu fw-bold">Manage All Order</li>
                                    </Link>

                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-menu fw-bold">Add A Product</li>
                                    </Link>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu fw-bold">Make Admin</li>
                                    </Link>
                                    <Link to={`${url}/allProducts`}>
                                        <li className="dashboard-menu fw-bold">Manage Products</li>
                                    </Link>
                                    <button className="logout-button mt-3" onClick={logout}>Logout</button>
                                </div> :
                                <div>
                                    <Link to={`${url}/payment`}>
                                        <li className="dashboard-menu mt-5 fw-bold">Payment</li>
                                    </Link>

                                    <Link to={`${url}/myOrders`}>
                                        <li className="dashboard-menu mt-2 fw-bold">My Orders</li>
                                    </Link>

                                    <Link to={`${url}/review`}>
                                        <li className="dashboard-menu mt-2 fw-bold">Review</li>
                                    </Link>
                                    <button className="logout-button mt-3" onClick={logout}>Logout</button>
                                </div>

                            }



                        </div>
                    </div>
                    <div className="col-md-9 ">
                        <Switch>
                            <Route exact path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route exact path={`${path}/allOrders`}>
                                <AllOrders></AllOrders>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route exact path={`${path}/allProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;