import React, {FC} from 'react';
import {News} from "../../model/types";
import css from "./NewsCardSpecial.module.scss"
import {formatDate} from "../../lib/formatDate";

interface NewsProps {
    news: News;
}

export const NewsCardSpecial: FC<NewsProps> = ({news}) => {
    return (
        <div  className={css.container}>
            <img className={css.img} src={news?.img} alt=""/>
            <div className={css.date}>{formatDate(news?.date)}</div>
            <div className={css.title}>{news?.title}</div>
        </div>
    );
};
