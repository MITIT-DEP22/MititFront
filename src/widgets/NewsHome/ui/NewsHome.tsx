import React, {useEffect, useState} from 'react';
import {News, NewsApi, NewsCard} from "../../../entities/news";
import css from "./NewsHome.module.scss"
import {NewsCardSpecial} from "../../../entities/news/ui/NewsCardSpecial/NewsCardSpecial";
import SectionTitle from "../../../shared/ui/SectionTitle/SectionTitle";

export const NewsHome = () => {

    const [news, setNews] = useState<News[]>([])

    useEffect(() => {
        NewsApi.getNews().then((res: any) => {
            setNews(res.data)
        }).catch((e: any) => {
            console.log(e)
        })
    }, [])

    return (
        <>
            <SectionTitle margin={"25px 0 0 0"} title={"Хроніка"}/>
            <div className={css.container}>
                <NewsCardSpecial news={news[0]}/>
                <div className={css.subcontainer}>
                    {news.slice(0, 4).map(item => (
                        <NewsCard news={item}/>
                    ))}
                </div>
            </div>
        </>
    );
};
