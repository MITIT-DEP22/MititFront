import React from 'react';
import css from "./Pagination.module.scss"
import newsStore from "../../../../entities/news/store/news-page-store";
import {observer} from "mobx-react";

const Pagination = observer(() => {

    const {countPages, page} = newsStore

    const handlePageChange = (page: number) => {
        if (page >= 0 && page <= countPages) {
            newsStore.changePage(page);
        }
    };

    const renderPageNumbers = () => {
        const pagesToShow = 5;
        const pageNumbers = [];

        const addPageNumber = (pageNumber:any) => {
            if (pageNumber >= 0 && pageNumber < countPages) {
                pageNumbers.push(pageNumber);
            }
        };

        addPageNumber(0);

        if (page > 3) {
            pageNumbers.push("...");
        }

        for (let i = Math.max(1, page - 2); i <= Math.min(countPages - 1, page + 2); i++) {
            addPageNumber(i);
        }

        if (page < countPages - pagesToShow) {
            pageNumbers.push("...");
        }

        if (page !== countPages - 1) {
            addPageNumber(countPages - 1);
        }

        return pageNumbers.map((item, index) => (
            <button
                key={index}
                className={Number(item) === page ? css.paginationBtn_active : ""}
                onClick={() => handlePageChange(Number(item))}
            >
                {typeof item === "number" ? item + 1 : item}
            </button>
        ));
    };

    return (
        <div className={css.container}>
            <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
            >
                {'<'}
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === countPages}
            >
                {'>'}
            </button>
        </div>
    );

});

export default Pagination;
