import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "pages";
import {LayoutHeader} from "../widgets/LayoutHeader";
import {LayoutFooter} from "../widgets/LayoutFooter";
import {Slider} from "../widgets/Slider";

const App = () => (
    <>
        {/*<LayoutHeader/>*/}
        <Slider/>
        <Routing/>
        <LayoutFooter/>
    </>
)

export default withProviders(App);
