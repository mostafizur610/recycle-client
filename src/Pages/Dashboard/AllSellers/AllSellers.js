import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://exdesktop-accessories-server.vercel.app/users?type=seller')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`https://exdesktop-accessories-server.vercel.app/user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount === 1) {
                    toast.success('Deleted successfully');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
            .catch(error => {

            })

    }

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
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button className='btn btn-accent btn-outline'>
                                        verify
                                    </button></td>
                                    <td><button onClick={() => handleDelete(user._id)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;