import React, {FC, useEffect, useState} from 'react';
import {News} from "entities/news/model/types";
import css from "./NewsCardSpecial.module.scss"
import {formatDate} from "entities/news/lib/formatDate";
import {ImageComponent} from "../ImageComponent";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import Skeleton from "../../shared/ui/Skeleton/Skeleton";
import HTMLReactParser from "html-react-parser";

interface NewsProps {
    news: News;
}

export const NewsCardSpecial: FC<NewsProps> = ({news}) => {

    return (
        <>
            <div className={css.container}>
                <div className={css.date}>{formatDate(news?.createdAt)}</div>
                <div className={css.title}>{HTMLReactParser(news?.title)}</div>
                <ImageComponent className={css.img}
                                imgId={news?.titleImage?.id}/>
            </div>
        </>
    )

};

