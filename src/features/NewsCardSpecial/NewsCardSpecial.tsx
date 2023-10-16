import React, {FC, useEffect, useState} from 'react';
import {News} from "entities/news/model/types";
import css from "./NewsCardSpecial.module.scss"
import {formatDate} from "entities/news/lib/formatDate";
import {ImageComponent} from "../ImageComponent";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";

interface NewsProps {
    news: News;
}

export const NewsCardSpecial: FC<NewsProps> = ({news}) => {

    const [isLoading, setIsLoading] = useState(true);
    const updateIsLoading = () => {
        setIsLoading(false);
    };
    useEffect(() => {
        console.log(news.titleImage.id)
    }, []);

    return (
        <div className={css.container}>
            <ImageComponent updateParentState={updateIsLoading} className={css.img}
                            imgId={news?.titleImage?.id}/>
            <div className={css.date}>{formatDate(news?.createdAt)}</div>
            <div className={css.title}>{news?.title}</div>
        </div>
    )

};

