import React, {useEffect, useState} from 'react';
import {LayoutHeader} from "./ui/LayoutHeader";
import LayoutHeaderMobile from "./ui/LayoutHeaderMobile/LayoutHeaderMobile";
import UpperTitle from "./ui/UpperTitle/UpperTitle";

const upperTitle = "АКТУАЛЬНО: Набір на курси лідерства"

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        setWindowWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <UpperTitle value={upperTitle}/>
            {windowWidth < 900 ?
                <LayoutHeaderMobile/> : <LayoutHeader/>}
        </>
    )
};

export default Header;