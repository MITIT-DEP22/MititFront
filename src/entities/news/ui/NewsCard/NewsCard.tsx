import React, {FC} from 'react';
import css from "../NewsCard/NewsCard.module.scss"
import {formatDate} from "../../lib/formatDate";
import {News} from "../../model/types";

interface NewsProps {
    news: News;
}

export const NewsCard: FC<NewsProps> = ({news}) => {
    return (
        <div className={css.card}>
            <div className={css.cardDate}>
                {formatDate(news?.date)}
            </div>
            <div className={css.cardTitle}>
                {news?.title}
            </div>

            <img className={css.cardImg} src={news?.img}/>
        </div>
    );
};
