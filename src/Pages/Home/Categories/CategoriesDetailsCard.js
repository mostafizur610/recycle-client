import React from 'react';


const CategoriesDetailsCard = ({ category, setData }) => {
    // const [data, setData] = useState({});

    const clickHandle = (category) => {
        console.log(category);
        setData(category);
    }

    return (
        <div>
            {category && (
                <div className="card card-side bg-base-100 shadow-xl border my-2">
                    <figure><img className='w-72' src={category.p_img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category.p_name}</h2>
                        <p>Original Price: {category.original_price}</p>
                        <p>Resale Price: {category.resale_price}</p>
                        <p>About : {category.description}</p>
                        <p>Review: {category.condition_type}</p>
                        <p>Seller: {category.seller_name}</p>
                        <p>Contact: {category.phone_number}</p>
                        <p>Location: {category.location}</p>
                        <p>Post: {category.time_of_posted}</p>
                        <div className="card-actions justify-end">
                            <label onClick={() => setData(category)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CategoriesDetailsCard;