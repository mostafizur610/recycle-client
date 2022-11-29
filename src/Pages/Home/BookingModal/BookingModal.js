import React from 'react';

const BookingModal = () => {
    return (
        <>
            {/* The button to open modal */}


            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>



                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" className="input w-full input-bordered " />
                        <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>




                </div>
            </div>
        </>
    );
};

export default BookingModal;