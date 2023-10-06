import React from 'react';
import HotLines from "./HotLines/HotLines";
import Addresses from "./Addresses/Addresses";
import css from "./Contacts.module.scss"
export const Contacts = () => {
    return (
        <div className={css.container}>
            <HotLines/>
            <Addresses/>
        </div>
    );
};
