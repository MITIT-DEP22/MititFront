import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "../pages";
import Footer from "widgets/Footer/Footer";
import Header from "widgets/Header/Header";

const App = () => {
    return (
        <>
            <Header/>
            <Routing/>
            <Footer/>
        </>
    )
}

export default withProviders(App);
