import React from 'react';
import BlockContainer from "shared/ui/BlockContainer/BlockContainer";
import SectionTitle from "shared/ui/SectionTitle/SectionTitle";
import {observer} from "mobx-react";
import newsStore from "../../../entities/news/store/news-page-store";
import LoadingSpinner from "shared/ui/LoadingSpinner/LoadingSpinner";
import {NewsCard} from "features/NewsCard/NewsCard";
import css from "./NewsBlock.module.scss"
import Pagination from "./Pagination/Pagination";

export const NewsBlock = observer(() => {
    const {news, isLoading} = newsStore
    
    return (
        <BlockContainer className={css.blockContainer}>
            <SectionTitle title={"Новини"}/>
            {
                isLoading ? <LoadingSpinner/> :
                    <div className={css.container}>
                        {news.map(item => (
                            <NewsCard key={`news_card_${item.id}`} width={"400px"} news={item}/>
                        ))}
                    </div>
            }
            <Pagination/>
            <a href="http://192.168.0.157:8082/api/v1/files/1">file</a>
        </BlockContainer>
    );
});
