import React, { useEffect, useState } from 'react';
import ItemCategories from './ItemCategories';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data)
            })
    }, [])


    return (
        <div>
            <h2 className='text-center text-3xl text text-white bg-blue-700 p-4 mx-16 rounded-lg'>The Brand we provided</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 ml-24 my-12'>
                {
                    categories.map(category => <ItemCategories
                        key={category._id}
                        category={category}
                    ></ItemCategories>)
                }
            </div>
        </div>
    );
};

export default Categories;