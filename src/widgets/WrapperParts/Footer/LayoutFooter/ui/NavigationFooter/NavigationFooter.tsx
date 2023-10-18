import React, {FC} from 'react';
import css from "./NavigationFooter.module.scss"
import {Link} from "react-router-dom";

interface NavigationElement {
    title: string;
    value: any[];
}

const NavigationFooter: FC<NavigationElement> = ({title, value}) => {
    return (
        <div className={css.navigationContainer}>
            <span className={css.navigationTitle}>{title}</span>
            {value.map((el,index) => (
                <Link  key={`${el.title}_${index}`} to={'/'} className={css.navigationElement}>{el.title}</Link>
            ))}
        </div>
    );
};

export default NavigationFooter;