import React from 'react';

const ItemCategories = ({ category }) => {
    const { img, name } = category;
    return (
        <div className="card w-60 shadow-xl">
            <figure><img className='h-32 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button className="btn btn-accent w-full text-white">{name}</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCategories;