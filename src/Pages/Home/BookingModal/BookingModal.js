import React from 'react';




const BookingModal = ({ data }) => {
    const user = JSON.parse(localStorage.getItem('user'));


    return (
        <>
            {/* The button to open modal */}
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                        <form className='grid grid-cols-1 gap-3 mt-10'>
                            <p className='text-center'>{user?.name}</p>
                            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            {/* defaultValue={user?.email} */}
                            <input type="text" placeholder='Item Name' value={data?.p_name} disabled className="input w-full input-bordered " />
                            <input type="text" placeholder='Price' defaultValue={data?.resale_price} disabled className="input w-full input-bordered " />
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