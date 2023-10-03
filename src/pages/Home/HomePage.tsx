import React from 'react';
import {Slider} from "../../widgets/Slider";
import {AdditionalLinksBlock} from "../../widgets/AdditionalLinksBlock";

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
            <AdditionalLinksBlock/>
        </>
    );
};

export default HomePage;