import React from 'react';
import './index.scss';
import {withProviders} from "./providers";
import {Routing} from "pages";

const App = () => (
    <>
        <h1>Some header</h1>
        <Routing/>
    </>
)

export default withProviders(App);
