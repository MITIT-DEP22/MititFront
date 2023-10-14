import React, {FC} from 'react';
import css from "./NewsCard.module.scss"
import {formatDate} from "entities/news/lib/formatDate";
import {News} from "entities/news/model/types";
import {ImageComponent} from "../ImageComponent";

interface NewsProps {
    news: News;
}

export const NewsCard: FC<NewsProps> = ({news}) => {
    return (
            <div className={css.card}>
                <div className={css.cardDate}>
                    {formatDate(news?.createdAt)}
                </div>
                <div className={css.cardTitle}>
                    {news?.title}
                </div>
                <ImageComponent className={css.cardImg} imgId={news.titleImage?.id}/>
            </div>
    );
};
