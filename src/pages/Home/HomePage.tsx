import React from 'react';
import {Slider} from "../../widgets/Slider";
import {AdditionalLinksBlock} from "../../widgets/AdditionalLinksBlock";
import {NewsHome} from "../../widgets/NewsHome";
import {SpecialitiesBlock} from "../../widgets/SpecialitiesBlock";
import SectionTitle from "../../shared/ui/SectionTitle/SectionTitle";

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
            <SectionTitle margin={"25px 0 0 0"} title={"Хроніка"}/>
            <NewsHome/>
            <SectionTitle title={"Спеціальності підготовки"}/>
            <SpecialitiesBlock/>
            <AdditionalLinksBlock/>
        </>
    );
};

export default HomePage;