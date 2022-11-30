import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const seller = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        seller_name: seller.name,
        category_id: "",
        p_name: "",
        p_img: "",
        phone_number: "",
        description: "",
        location: "",
        year_of_use: "",
        condition_type: "",
        original_price: "",
        resale_price: "",
    });

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://exdesktop-accessories-server.vercel.app/category/${product.category_id}/product`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${seller.token}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast.success('User Created Successfully')
                    navigate('/dashboard/myProducts');
                }
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <div className='mt-12'>
            <h2 className='text-center my-4'>Add Products</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    <input disabled type="text" placeholder="Seller Name" name="seller_name" className="input input-bordered input-sm w-full max-w-xs" value={product.seller_name} />
                    <select name="category_id" onChange={handleChange} className="select select-bordered">
                        <option disabled selected>Select category</option>
                        <option value="63878fa0131d0506585fbb21">Asus</option>
                        <option value="63878fa0131d0506585fbb22">Samsung</option>
                        <option value="63878fa0131d0506585fbb23">Gigabite</option>
                        <option value="63878fa0131d0506585fbb24">Intel</option>
                    </select>
                    <input type="text" placeholder="Product Name" name="p_name" className="input input-bordered input-sm w-full max-w-xs" value={product.p_name} onChange={handleChange} />
                    <input type="text" placeholder="Image" name="p_img" className="input input-bordered input-sm w-full max-w-xs" value={product.p_img} onChange={handleChange} />
                    <input type="text" placeholder="Phone Number" name="phone_number" className="input input-bordered input-sm w-full max-w-xs" value={product.phone_number} onChange={handleChange} />
                    <input type="text" placeholder="Description" name="description" className="input input-bordered input-sm w-full max-w-xs" value={product.description} onChange={handleChange} />
                    <input type="text" placeholder="Location" name="location" className="input input-bordered input-sm w-full max-w-xs" value={product.location} onChange={handleChange} />
                    <input type="text" placeholder="Year Of Purchase" name="year_of_use" className="input input-bordered input-sm w-full max-w-xs" value={product.year_of_use} onChange={handleChange} />
                    <input type="text" placeholder="Condition Type" name="condition_type" className="input input-bordered input-sm w-full max-w-xs" value={product.condition_type} onChange={handleChange} />
                    <input type="text" placeholder="Original Price" name="original_price" className="input input-bordered input-sm w-full max-w-xs" value={product.original_price} onChange={handleChange} />
                    <input type="text" placeholder="Resale Price" name="resale_price" className="input input-bordered input-sm w-full max-w-xs" value={product.resale_price} onChange={handleChange} />
                </div>
                <input value="Add Product" className='btn bg-accent text-white rounded-lg mt-4' type='submit' />
            </form>
        </div>
    );
};

export default AddProducts;
