import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyProducts = () => {
    return (
        <div className='mt-12'>
            <h2 className='my-6 text-center'>My Products</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    Delete
                                </th>
                                <th>Name</th>
                                <th>Sold Status</th>
                                <th>Price</th>
                                <th>Advertise</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>
                                    <button className='btn btn-outline btn-primary'><FaTrash></FaTrash></button>
                                </th>
                                <td>
                                    Mithun
                                </td>
                                <td>
                                    available/not
                                </td>
                                <td>200</td>
                                <th>
                                    <button className="btn btn-info text-white btn-xs">Advertise</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;