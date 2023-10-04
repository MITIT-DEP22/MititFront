import React from 'react';
import {Slider} from "../../widgets/Slider";
import {AdditionalLinksBlock} from "../../widgets/AdditionalLinksBlock";
import {NewsHome} from "../../widgets/NewsHome";
import {SpecialitiesBlock} from "../../widgets/SpecialitiesBlock";

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
            <SpecialitiesBlock/>
            <AdditionalLinksBlock/>
        </>
    );
};

export default HomePage;