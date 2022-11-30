import React, { useEffect, useState } from 'react';

const BookingModal = ({ category }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [data, setData] = useState({});
    // console.log(category);
    // const [data, setData] = useState({});
    // if (category) {
    //     setData(category);
    // }
    // setData(category);

    useEffect(() => {
        setData(category);
        console.log(category);
    }, [category]);

    return (
        <>
            {/* The button to open modal */}
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                        <form className='grid grid-cols-1 gap-3 mt-10'>
                            <input name="name" defaultValue={user.name} type="text" disabled placeholder="Name" className="input w-full input-bordered" />

                            <input name="email" type="email" defaultValue={user.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            {/* defaultValue={user?.email} */}

                            <input type="text" placeholder='Item Name' value={data.p_name} disabled className="input w-full input-bordered " />

                            <input type="text" placeholder='Price' defaultValue={data.resale_price} disabled className="input w-full input-bordered " />

                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />

                            <input name="phone" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
            </>
        </>
    );
};

export default BookingModal;