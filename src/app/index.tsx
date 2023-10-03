import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "pages";
import {LayoutHeader} from "../widgets/LayoutHeader";
import {LayoutFooter} from "../widgets/LayoutFooter";

const App = () => {

   
    return (
        <>
            <LayoutHeader/>
            <Routing/>
            <LayoutFooter/>
        </>
    )
}

export default withProviders(App);
