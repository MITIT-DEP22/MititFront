import React from 'react';
import {Slider} from "widgets/HomeBlock/ui/Slider";
import {HomeBlock} from "../../widgets/HomeBlock";

 const HomePage = () => {
    const scroll = () => {
        window.scrollTo({
            top: window.innerHeight - 62,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Slider scrollDown={scroll}/>
            <HomeBlock/>
        </>
    );
};

 export default  HomePage
