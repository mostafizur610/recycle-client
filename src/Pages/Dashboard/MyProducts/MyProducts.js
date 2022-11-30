import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const seller = JSON.parse(localStorage.getItem('user'));
    const [categoriesProducts, setCategoriesProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const onAdvertised = (cateId, productId) => {
        fetch(`https://exdesktop-accessories-server.vercel.app/category/${cateId}/product/${productId}/advertise`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${seller.token}`
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {

            })
    }

    const handleDelete = (cateId, productId) => {
        fetch(`https://exdesktop-accessories-server.vercel.app/category/${cateId}/product/${productId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'

            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Deleted successfully');
                fetchData()

            })
            .catch(error => {

            })
    }

    const fetchData = () => {
        fetch('https://exdesktop-accessories-server.vercel.app/product', {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${seller.token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoriesProducts(data)
            })
    }

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
                            {categoriesProducts && categoriesProducts.map(categoriesProduct => (
                                categoriesProduct.products.map(product => (
                                    <tr>
                                        <th>
                                            <button onClick={() => handleDelete(categoriesProduct._id, product._id)} className='btn btn-outline btn-primary'><FaTrash></FaTrash></button>
                                        </th>
                                        <td>
                                            {product.p_name}
                                        </td>
                                        <td>
                                            {product.isAvailable ? <span>Available</span> : <span>Not Available</span>}
                                        </td>
                                        <td>{product.resale_price}</td>
                                        <th>
                                            <button onClick={() => onAdvertised(categoriesProduct._id, product._id)} className="btn btn-info text-white btn-xs">Advertise</button>
                                        </th>
                                    </tr>
                                ))
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;