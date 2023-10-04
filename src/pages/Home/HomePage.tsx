import React from 'react';
import {Slider} from "../../widgets/Slider";
import {AdditionalLinksBlock} from "../../widgets/AdditionalLinksBlock";
import {NewsHome} from "../../widgets/NewsHome";

const HomePage = () => {
    const scroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };


    return (
        <>
            <Slider scrollDown={scroll}/>
            <NewsHome/>
            <AdditionalLinksBlock/>
        </>
    );
};

export default HomePage;