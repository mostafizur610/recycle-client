import React from 'react';
import img from '../../../assets/slider/s2.jpg'

const MyOrders = () => {
    return (
        <div>
            <h1>My Orders is Coming soon</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                CPU
                            </td>
                            <td>6000</td>
                            <th>
                                <button className="btn btn-accent btn-xs">Payment</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                CPU
                            </td>
                            <td>6000</td>
                            <th>
                                <button className="btn btn-accent btn-xs">Payment</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-24">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                CPU
                            </td>
                            <td>6000</td>
                            <th>
                                <button className="btn btn-accent btn-xs">Payment</button>
                            </th>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>

                            <th>Item</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>

                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;