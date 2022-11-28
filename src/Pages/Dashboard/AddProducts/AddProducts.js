import React from 'react';
import { Link } from 'react-router-dom';

const AddProducts = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-center my-4'>Add Products</h2>
            <form >
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <Link className='btn bg-accent text-white rounded-lg mt-4'>Add Product</Link>
            </form>
        </div>
    );
};

export default AddProducts;
