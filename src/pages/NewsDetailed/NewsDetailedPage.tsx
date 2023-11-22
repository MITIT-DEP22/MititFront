import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {observer} from "mobx-react";
import newsDetailedStore from "../../entities/news/store/news-detailed-store";
import {PageHead} from "../../widgets/PageHead";
import NewsDetailedBlock from "../../widgets/NewsDetailedBlock/NewsDetailedBlock";
import LoadingSpinner from "../../shared/ui/LoadingSpinner/LoadingSpinner";

const NewsDetailedPage = observer(() => {
    const {id} = useParams()
    const {news, isLoading} = newsDetailedStore
    useEffect(() => {
        id && newsDetailedStore.getNewsById(id)
    }, []);

    return (
        <>
            <PageHead title={""} imgId={news.titleImage?.id}/>
            {isLoading ? <LoadingSpinner/>
                :
                <NewsDetailedBlock news={news}/>
            }
        </>
    );
});

export default NewsDetailedPage;