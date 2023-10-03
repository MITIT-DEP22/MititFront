import React from 'react';
import css from "./Logo.module.scss"
import logo from "../../../../assets/logo/logo.png"

export const Logo = () => {
    return (
        <div className={""}>
            <img src={logo} alt=""/>
        </div>
    );
};