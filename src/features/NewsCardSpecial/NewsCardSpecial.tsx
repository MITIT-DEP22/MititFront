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

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onLoadImage = () => {
        setIsLoading(false)
    }

    return (
        <>
            {isLoading && <LoadingSpinner/>}
            <div style={isLoading ? {display:'none'} : {display:"block"}} className={css.container} >
                <ImageComponent onLoaded={onLoadImage} className={css.img}
                                imgId={news?.titleImage?.id}/>
                <div className={css.date}>{formatDate(news?.createdAt)}</div>
                <div className={css.title}>{news?.title}</div>
            </div>
        </>
    )

};

