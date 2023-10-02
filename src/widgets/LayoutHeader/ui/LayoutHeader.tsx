import React from 'react';
import css from "./LayoutHeader.module.scss"

export const LayoutHeader = () => {
    return (
        <div className={css.someClass}>
            <p className={css.foo}>Header</p>
        </div>
    );
};
