import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Categories/Categories';
import Section from '../Section/Section';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mt-6'>
            <Slider></Slider>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
            <Section></Section>
        </div>
    );
};

export default Home;