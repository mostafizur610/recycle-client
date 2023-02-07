import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/c.jpg"

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
            <div className="hero min-h-screen bg-base">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-3xl shadow-xl' src={img} alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">If you're not buying recycled products, you're not really recycling!</h1>
                        <p className="py-6">It makes a big difference to recycle. It makes a big difference to use recycled products. It makes a big difference to reuse things, to not use the paper cup and each time you do, that's a victory..</p>
                        <button className="btn btn-primary">Let's Change the World</button>
                    </div>
                </div>
            </div>

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