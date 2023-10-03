import React from 'react';
import {Slider} from "../../widgets/Slider";

const HomePage = () => {
    const scroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div style={{height: "300vh"}}>
            <Slider scrollDown={scroll}/>
        </div>
    );
};

export default HomePage;