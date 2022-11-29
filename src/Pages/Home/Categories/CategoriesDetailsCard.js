import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesDetailsCard = () => {
    // const { p_name } = details;
    return (
        <div>
            {/* <p>{products.length}</p> */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">yututyuttyu</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesDetailsCard;