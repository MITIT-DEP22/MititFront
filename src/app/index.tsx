import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "../pages";
import Footer from "../widgets/Footer/Footer";
import Header from "../widgets/Header/Header";


const App = () => {
    console.log(process.env.REACT_APP_HOST)
    return (
        <>
            <Header/>
            <Routing/>
            <Footer/>
        </>
    )
}

export default withProviders(App);
