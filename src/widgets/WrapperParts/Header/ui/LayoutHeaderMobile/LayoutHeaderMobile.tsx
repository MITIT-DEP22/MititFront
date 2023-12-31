import React, {useEffect, useState} from 'react';
import css from "./LayoutHeaderMobile.module.scss"
import TitleLogo from "shared/ui/TitleLogo/TitleLogo";
import Sidebar from "./ui/Sidebar/Sidebar";
import {instituteName} from "shared/enums/Data";
import {Link} from "react-router-dom";
import {RouterNames} from "../../../../../shared/enums/RouterNames";

const LayoutHeaderMobile = () => {


    const [topPosition, setTopPosition] = useState(30)
    const [sidebar, setSidebar] = useState(false)

    const closeSidebar = () => {
        setSidebar(false)
        // @ts-ignore
        document.getElementById("root").style.overflow = "visible"
    }

    const openSidebar = () => {
        setSidebar(true)
        // @ts-ignore
        document.getElementById("root").style.overflow = "hidden"

    }

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (window.scrollY < 30) {
                setTopPosition(30)
            } else {
                currentScrollY > prevScrollY ? setTopPosition(-100) : setTopPosition(30)
            }
            prevScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div style={{top: `${topPosition}px`}} className={css.mobileHeader}>
                <Link to={RouterNames.HOME.to} className={css.logoContainer}>
                    <TitleLogo logoSize={"10vh"}/>
                </Link>
                <button className={css.openSidebar} onClick={openSidebar}>
                    <i className="bi bi-list"></i>
                </button>
            </div>
            <Sidebar isOpen={sidebar} close={closeSidebar}/>
        </>
    );
};

export default LayoutHeaderMobile;