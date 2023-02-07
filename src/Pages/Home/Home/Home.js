import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Categories/Categories';
import Section from '../Section/Section';
import Stat from '../Section/Stat';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home');
    return (
        <div className='mt-6'>
            <Slider></Slider>
            <Categories></Categories>
            <AdvertiseItems></AdvertiseItems>
            <Section></Section>
            <Stat></Stat>
        </div>
    );
};

export default Home;