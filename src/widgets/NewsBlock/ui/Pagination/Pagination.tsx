import React from 'react';
import css from "./Pagination.module.scss"
import newsStore from "entities/news/store/news-store";

const Pagination = () => {

    const {countPages, page} = newsStore

    const pagesStart = () => {
        let temp = []
        for (let i = 0; i < countPages; i++) {
            if (i > 4) {
                break;
            }

            temp.push(<button onClick={() => {
                newsStore.changePage(i)
            }} className={`${css.paginationBtn} ${i === page && css.paginationBtn_active }`}>{i + 1}</button>)
        }
        return temp
    }


    return (
        <div className={css.container}>
            <>
                {pagesStart()}
                    <div className={css.separator}>...</div>
                    <button onClick={() => {
                        newsStore.changePage(countPages - 1)
                    }} className={css.paginationBtn}>{countPages}</button>
            </>
        </div>
    );
};

export default Pagination;