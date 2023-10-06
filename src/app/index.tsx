import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "../pages";
import {LayoutHeader} from "widgets/LayoutHeader";
import Footer from "../widgets/Footer";


const App = () => {


    return (
        <>
            <LayoutHeader/>
            <Routing/>
            <Footer/>
        </>
    )
}

export default withProviders(App);
