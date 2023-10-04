import React, {FC} from 'react';
import css from "./PageHead.module.scss"

interface PageHeadProps {
    title: string;
    img: string;
}

export const PageHead: FC<PageHeadProps> = ({title, img}) => {
    return (
        <div className={css.container}>
            <p className={css.title}>{title}</p>
            <img className={css.img} src={img} alt=""/>
        </div>
    );
};