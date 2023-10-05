import React, {FC} from 'react';
import css from "./NavigationFooter.module.scss"

interface NavigationElement {
    title: string;
    value: any[];
}

const NavigationFooter: FC<NavigationElement> = ({title, value}) => {
    return (
        <div className={css.navigationContainer}>
            <span className={css.navigationTitle}>{title}</span>
            {value.map(el => (
                <span className={css.navigationElement}>{el.title}</span>
            ))}
        </div>
    );
};

export default NavigationFooter;