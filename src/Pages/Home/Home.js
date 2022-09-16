import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Members from './Members';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Members></Members>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;