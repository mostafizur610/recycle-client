import React from 'react';
import { Link } from 'react-router-dom';

const ItemCategories = ({ category }) => {
    const { img, name, _id } = category;
    console.log(_id);
    return (
        <div className="card w-60 shadow-xl">
            <figure><img className='h-32 w-full' src={img} alt="" /></figure>
            <div className="card-body">
                {/* {`/categories/${_id}`} */}
                <Link to={`/category/${_id}`}>   <div className="card-actions justify-end">
                    <button className="btn btn-accent w-full text-white"> {name}</button>
                </div></Link>
            </div>
        </div >
    );
};

export default ItemCategories;