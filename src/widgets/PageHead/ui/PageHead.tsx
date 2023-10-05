import React, {FC} from 'react';
import css from "./PageHead.module.scss"

interface PageHeadProps {
    title: string;
    img: string;
}

export const PageHead: FC<PageHeadProps> = ({title, img}) => {
    return (
        <div style={{background: `url(${img}) no-repeat center`, backgroundSize: "cover"}} className={css.container}>
            <p className={css.title}>{title}</p>
            <div className={css.filter}/>
        </div>
    );
};