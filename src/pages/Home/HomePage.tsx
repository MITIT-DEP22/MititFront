import React from 'react';
import {Slider} from "widgets/Slider";
import {AdditionalLinks} from "widgets/AdditionalLinks";
import {NewsHome} from "widgets/NewsHome";
import {Specialities} from "widgets/Specialities";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";

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
            <Specialities/>
            <AdditionalLinks/>
        </>
    );
};

 export default  HomePage
