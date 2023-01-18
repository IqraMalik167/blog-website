import React from 'react';
import { Cards } from '../Components/Cards/Cards';
import { ListsPost } from '../Components/ListsPost/ListsPost';
import { Navbar } from '../Components/Navbar/Navbar';
import { SimpleSlider } from '../Components/Slider/Slider';

export const Home = () => {
    return (
        <div>
            <SimpleSlider />
            <ListsPost />
            <Cards />
        </div>
    );
};

