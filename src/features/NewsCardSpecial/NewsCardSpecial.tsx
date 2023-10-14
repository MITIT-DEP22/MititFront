import React, {FC} from 'react';
import {News} from "../../entities/news/model/types";
import css from "./NewsCardSpecial.module.scss"
import {formatDate} from "../../entities/news/lib/formatDate";
import {ImageComponent} from "../ImageComponent";

interface NewsProps {
    news: News;
}

export const NewsCardSpecial: FC<NewsProps> = ({news}) => {
    return (
        <div className={css.container}>
            <ImageComponent className={css.img} imgId={news?.titleImage?.id}/>
            <div className={css.date}>{formatDate(news?.createdAt)}</div>
            <div className={css.title}>{news?.title}</div>
        </div>
    );
};
