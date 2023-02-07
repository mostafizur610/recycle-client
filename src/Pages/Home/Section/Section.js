import React from 'react';

const Section = () => {
    return (
        <div className='flex justify-center'>
            <div className="hero h-96 w-full" style={{ backgroundImage: `url("https://i.ibb.co/TBN6SxZ/image.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Best service to buy your used Desktop components.</h1>
                        <p className="mb-5">We provide the most streamlined and hassle-free way to sell computer parts.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;