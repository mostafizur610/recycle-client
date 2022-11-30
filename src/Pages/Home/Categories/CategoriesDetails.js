import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesDetailsCard from './CategoriesDetailsCard';
import BookingModal from '../BookingModal/BookingModal';

const CategoriesDetails = () => {
    const categoryDetails = useLoaderData();
    const [data, setData] = useState({});

    return (
        <div className='m-12'>
            <h2 className='text-center text-3xl text-blue-900 mt-12'>{categoryDetails.name}</h2>
            <div>
                {categoryDetails && categoryDetails.products.length > 0 && categoryDetails.products.map((category, index) => (
                    <CategoriesDetailsCard key={index}
                        category={category}
                        setData={setData}
                    ></CategoriesDetailsCard>
                ))
                }
            </div>
            {
                data &&
                <BookingModal
                    data={data}
                    setData={setData}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoriesDetails;