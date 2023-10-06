import React from 'react';
import {useLocation} from "react-router-dom";
import {RouterNames} from "shared/enums/RouterNames";
import {LayoutFooterAlter} from "./LayoutFooterAlter";
import {LayoutFooter} from "./LayoutFooter";


const Footer = () => {
    const {pathname} = useLocation();
    if (pathname === RouterNames.HOME) {
        return <LayoutFooterAlter/>
    } else {
        return <LayoutFooter/>
    }

};

export default Footer;