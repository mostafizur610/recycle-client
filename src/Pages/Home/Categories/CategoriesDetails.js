import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesDetailsCard from './CategoriesDetailsCard';

const CategoriesDetails = () => {
    const categoryDetails = useLoaderData();
    return (
        <div className='m-12'>
            <h2 className='text-center text-3xl text-blue-900 mt-12'>{categoryDetails.name}</h2>
            <div>
                {categoryDetails && categoryDetails.products.length > 0 && categoryDetails.products.map((category, index) => (
                    <CategoriesDetailsCard key={index} category={category}></CategoriesDetailsCard>
                ))
                }
            </div>
        </div>
    );
};

export default CategoriesDetails;