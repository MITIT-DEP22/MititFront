import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "../pages";
import {LayoutHeader} from "widgets/LayoutHeader";
import {LayoutFooter} from "widgets/LayoutFooter";
import {LayoutFooterAlter} from "widgets/LayoutFooterAlter";


const App = () => {


    return (
        <>
            <LayoutHeader/>
            <Routing/>
            <LayoutFooter/>
            <LayoutFooterAlter/>
        </>
    )
}

export default withProviders(App);
