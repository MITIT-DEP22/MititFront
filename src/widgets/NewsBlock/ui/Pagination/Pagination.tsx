import React from 'react';
import css from "./Pagination.module.scss"
import newsStore from "entities/news/store/news-store";
import {observer} from "mobx-react";
import {observe} from "mobx";

const Pagination = () => {

    const {countPages, page} = newsStore

    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (countPages <= 5) {
            for (let i = 0; i < countPages; i++) {
                pageNumbers.push(i+1);
            }
        } else {
            if (page <= 2) {
                pageNumbers.push(1, 2, 3, '...', countPages);
            } else if (page >= countPages - 1) {
                pageNumbers.push(1, '...', countPages - 2, countPages - 1, countPages);
            } else {
                pageNumbers.push(1, '...', page - 1, page, page + 1, '...', countPages);
            }
        }

        return pageNumbers.map((pageNumber, index) => (
            pageNumber === '...' ?
                <span className={css.separator}>{pageNumber}</span>
                :
                <button
                    key={index}
                    className={`${css.paginationBtn} ${Number(pageNumber)-1 === page && css.paginationBtn_active}`}
                    onClick={() => newsStore.changePage(Number(pageNumber) -1)}>
                    {pageNumber}
                </button>
        ));
    };

    return (
        <div className={css.container}>
            {renderPageNumbers()}
        </div>
    );
};

export default Pagination;




