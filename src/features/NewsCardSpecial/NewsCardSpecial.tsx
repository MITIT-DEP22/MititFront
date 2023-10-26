import React, {FC} from 'react';
import {News} from "entities/news/model/types";
import css from "./NewsCardSpecial.module.scss"
import {formatDate} from "../../entities/news/lib/formatDate";
import {ImageComponent} from "../ImageComponent";
import HTMLReactParser from "html-react-parser";
import {Link} from "react-router-dom";
import {RouterNames} from "../../shared/enums/RouterNames";

interface NewsProps {
    news: News;
}

export const NewsCardSpecial: FC<NewsProps> = ({news}) => {

    return (
        <>
            <Link to={`${RouterNames.NEWS.to}/${news.id}`} className={css.container}>
                <div className={css.date}>{formatDate(news?.createdAt)}</div>
                <div className={css.title}>{HTMLReactParser(news?.title)}</div>
                <ImageComponent className={css.img}
                                imgId={news?.titleImage?.id}/>
            </Link>
        </>
    )

};

