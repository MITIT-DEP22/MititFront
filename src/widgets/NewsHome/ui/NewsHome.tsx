import React from 'react';
import css from "./NewsHome.module.scss"
import {NewsCardSpecial} from "features/NewsCardSpecial/NewsCardSpecial";
import {observer} from "mobx-react";
import newsStore from "entities/news/store/news-store";
import {NewsCard} from "features/NewsCard/NewsCard";

export const NewsHome = observer(() => {
    const {news, isLoading} = newsStore;

    if (isLoading) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className={css.container}>
                <NewsCardSpecial news={news[0]}/>
                <div className={css.subcontainer}>
                    {news.slice(1, 5).map(item => (
                        <NewsCard news={item}/>
                    ))}
                </div>
            </div>
        );
    }

})

