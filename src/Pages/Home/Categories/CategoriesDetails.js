import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoriesDetailsCard from './CategoriesDetailsCard';

const CategoriesDetails = () => {
    const categoryDetails = useLoaderData();
    console.log(categoryDetails);

    return (
        <div>
            <h2>cat Details</h2>
            <CategoriesDetailsCard></CategoriesDetailsCard>
            <BookingModal></BookingModal>
        </div>
    );
};

export default CategoriesDetails;