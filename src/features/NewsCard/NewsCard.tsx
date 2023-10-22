import React, {FC} from 'react';
import css from "./NewsCard.module.scss"
import {formatDate} from "entities/news/lib/formatDate";
import {News} from "entities/news/model/types";
import {ImageComponent} from "../ImageComponent";
import HTMLReactParser from "html-react-parser";
import {Link} from "react-router-dom";
import {RouterNames} from "../../shared/enums/RouterNames";

interface NewsProps {
    news: News;
    width?:string;
}

export const NewsCard: FC<NewsProps> = ({news, width}) => {
    return (
            <Link to={`${RouterNames.NEWS.to}/${news.id}`} style={{width:width}} className={css.card}>
                <div className={css.cardDate}>
                    {formatDate(news?.createdAt)}
                </div>
                <div className={css.cardTitle}>
                    {HTMLReactParser(news?.title)}
                </div>
                <div style={{display:"none"}}>
                    {news.id}
                </div>
                <ImageComponent className={css.cardImg} imgId={news.titleImage?.id}/>
            </Link>
    );
};
