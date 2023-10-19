import React, {FC} from 'react';
import css from "./NewsCard.module.scss"
import {formatDate} from "entities/news/lib/formatDate";
import {News} from "entities/news/model/types";
import {ImageComponent} from "../ImageComponent";

interface NewsProps {
    news: News;
    width?:string;
}

export const NewsCard: FC<NewsProps> = ({news, width}) => {
    return (
            <div style={{width:width}} className={css.card}>
                <div className={css.cardDate}>
                    {formatDate(news?.createdAt)}
                </div>
                <div className={css.cardTitle}>
                    {news?.title}
                </div>
                <div style={{display:"none"}}>
                    {news.id}
                </div>
                <ImageComponent className={css.cardImg} imgId={news.titleImage?.id}/>
            </div>
    );
};
