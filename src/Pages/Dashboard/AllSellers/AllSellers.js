import React from 'react';

const AllSellers = () => {
    return (
        <div className='mt-12'>
            <h2 className='my-6 text-center'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>m@gmail.com</td>
                            <td><button className='btn btn-accent btn-outline'>
                                verify
                            </button></td>
                            <td><button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;