import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ItemCategories from './ItemCategories';

const Categories = () => {
    const { loading } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    if (loading) {
        return <div className='text-center mt-24'><button className="btn btn-ghost loading">loading</button></div>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 ml-24 my-12'>
            {
                categories.map(category => <ItemCategories
                    key={category._id}
                    category={category}
                ></ItemCategories>)
            }
        </div>
    );
};

export default Categories;