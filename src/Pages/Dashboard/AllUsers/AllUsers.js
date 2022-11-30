import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AllUsers = () => {
    // const { users } = useContext(AuthContext);
    const { users, setUsers } = useState('');

    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/users');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)
            })
    }, [])



    return (
        <div className='mt-12'>
            <h2 className='my-6 text-center'>All users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td><button className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>

                            </tr>)

                        }

                        {/* <tr className="active">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td><button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button></td>

                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td><button className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;