import React, {FC} from 'react';
import css from "./NavigationAlterFooter.module.scss"
import {Link} from "react-router-dom";

interface NavigationElement {
    title: string;
    value: any[];
}

const NavigationAlterFooter: FC<NavigationElement> = ({title, value}) => {
    return (
        <div className={css.navigationContainer}>
            <span className={css.navigationTitle}>{title}</span>
            {value.map(el => (
                <Link to={'/chiefs'} className={css.navigationElement}>{el.title}</Link>
            ))}
        </div>
    );
};

export default NavigationAlterFooter;