import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdvertiseItems = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        fetch('https://exdesktop-accessories-server.vercel.app/product/advertised', {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdvertisedProducts(data)
            })
    }, []);

    return (
        <div>
            <div className='flex justify-center'>
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li className="step step-primary">Login</li>
                    <li className="step step-primary">Choose Products</li>
                    <li className="step">Give Location</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </ul>
            </div>

            <div className='p-12'>
                <h1 className='text-center text-4xl text-accent'>Most recent products Ad. For sale</h1>
                <div className='mt-12 flex flex-wrap gap-5 border-spacing-8 text-center text-white text-3xl'>
                    {advertisedProducts && advertisedProducts.map(advertisedProduct => (
                        advertisedProduct.products.map(product => (
                            <>
                                <div>
                                    <img className='h-32 w-48' src={product.p_img} alt="" />
                                    {/* <label onClick={() => clickHandle(category)} htmlFor="booking-modal" className="btn btn-primary">{product.p_name}</label> */}
                                    <Link to='/'><p className='text-blue-900 btn btn-outline'>Buy {product.p_name}</p></Link>
                                </div>
                            </>

                        ))
                    ))
                    }
                </div>

            </div>
        </div>
    )
};

export default AdvertiseItems;