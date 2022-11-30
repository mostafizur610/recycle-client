import React from 'react';
import toast from 'react-hot-toast';


const BookingModal = ({ data, setData }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            userName: user?.name,
            productName: data?.p_name,
            userEmail: user?.email,
            phone,
            location
        }
        console.log(booking);
        setData(null);
        toast.success('Submitted Successfully')

    }


    return (
        <>
            {/* The button to open modal */}
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <p className='text-center'>{user?.name}</p>
                            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            {/* defaultValue={user?.email} */}
                            <input type="text" placeholder='Item Name' value={data?.p_name} disabled className="input w-full input-bordered " />
                            <input type="text" placeholder='Price' defaultValue={data?.resale_price} disabled className="input w-full input-bordered " />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
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