import React, {FC} from 'react';
import {News} from "../../entities/news";
import css from "./NewsDetailedBlock.module.scss"
import Slider from "./ui/Slider/Slider";
import BlockContainer from "../../shared/ui/BlockContainer/BlockContainer";
import SectionTitle from "../../shared/ui/SectionTitle/SectionTitle";
import HTMLReactParser from "html-react-parser";
import {observer} from "mobx-react";
import {formatDate} from "../../entities/news/lib/formatDate";
import {useNavigate} from "react-router-dom"

interface NewsProps {
    news: News;
}

const NewsDetailedBlock: FC<NewsProps> = observer(({news}) => {
    const navigate = useNavigate()
    return (
        news && <>
            <BlockContainer className={css.container}>
                <button className={css.backBtn} onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i> Назад</button>
                <SectionTitle title={news.title}/>
                {news.images?.length > 0 ?
                    <div className={css.contentContainer}>
                        <div>
                            <Slider images={news.images}/>
                        </div>
                        <div>
                            <div className={css.date}>
                                {formatDate(news?.createdAt)}
                            </div>
                            {news.contents?.map((item, index) => (
                                <div className={css.contents} key={`news-page-content_${news.id}_${index}`}>
                                    {HTMLReactParser(item)}
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className={css.textContainer}>
                        <div className={css.date}>
                            {formatDate(news?.createdAt)}
                        </div>
                        {news.contents?.map(item => (
                            HTMLReactParser(item)
                        ))}
                    </div>
                }


            </BlockContainer>
        </>
    );
});

export default NewsDetailedBlock;