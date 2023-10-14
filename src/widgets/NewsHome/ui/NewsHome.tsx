import React from 'react';
import css from "./NewsHome.module.scss"
import {NewsCardSpecial} from "features/NewsCardSpecial/NewsCardSpecial";
import {observer} from "mobx-react";
import newsStore from "entities/news/store/news-store";
import {NewsCard} from "features/NewsCard/NewsCard";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";

export const NewsHome = observer(() => {
    const {news, isLoading} = newsStore;
    if (isLoading) {
        return <LoadingSpinner padding={"5vh 5vw"}/>;
    } else {
        return (
            <div className={css.container}>
                <div className={css.subcontainer1}>
                    <NewsCardSpecial news={news[0]}/>
                </div>
                <div className={css.subcontainer2}>
                    {news.slice(1, 5).map(item => (
                        <NewsCard news={item}/>
                    ))}
                </div>
            </div>
        );
    }
})

