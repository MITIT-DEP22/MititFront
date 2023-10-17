import React from 'react';
import HotLines from "./HotLines/HotLines";
import Addresses from "./Addresses/Addresses";
import css from "./ContactsBlock.module.scss"
export const ContactsBlock = () => {
    return (
        <div className={css.container}>
            <HotLines/>
            <Addresses/>

        </div>
    );
};
