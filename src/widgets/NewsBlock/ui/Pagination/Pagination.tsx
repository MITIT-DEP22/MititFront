import React from 'react';
import css from "./Pagination.module.scss"
import newsStore from "entities/news/store/news-store";
import {observer} from "mobx-react";
import {observe} from "mobx";

const Pagination = observer(() => {

    const {countPages, page} = newsStore

    // const renderPageNumbers = () => {
    //     const pageNumbers = [];
    //
    //     if (countPages <= 5) {
    //         for (let i = 0; i < countPages; i++) {
    //             pageNumbers.push(i+1);
    //         }
    //     } else {
    //         if (page <= 2) {
    //             pageNumbers.push(1, 2, 3, '...', countPages);
    //         } else if (page >= countPages - 1) {
    //             pageNumbers.push(1, '...', countPages - 2, countPages - 1, countPages);
    //         } else {
    //             pageNumbers.push(1, '...', page - 1, page, page + 1, '...', countPages);
    //         }
    //     }
    //
    //     return pageNumbers.map((pageNumber, index) => (
    //         pageNumber === '...' ?
    //             <span className={css.separator}>{pageNumber}</span>
    //             :
    //             <button
    //                 key={index}
    //                 className={`${css.paginationBtn} ${Number(pageNumber)-1 === page && css.paginationBtn_active}`}
    //                 onClick={() => newsStore.changePage(Number(pageNumber) -1)}>
    //                 {pageNumber}
    //             </button>
    //     ));
    // };
    //
    // return (
    //     <div className={css.container}>
    //         {renderPageNumbers()}
    //     </div>
    // );

    const pagesToShow = 1; // Number of pages to show between '...' on each side of the active page

    const handlePageChange = (page: number) => {
        if (page >= 0 && page <= countPages) {
            newsStore.changePage(page);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(0, page - pagesToShow);
        let endPage = Math.min(countPages, page + pagesToShow);

        if (page - pagesToShow > 1) {
            pageNumbers.push(0);
            if (page - pagesToShow > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (page + pagesToShow < countPages) {
            if (page + pagesToShow < countPages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(countPages);
        }

        return pageNumbers.map((item, index) => (
            <button
                key={index}
                className={Number(item) === page ? css.paginationBtn_active : ""}
                onClick={() => handlePageChange(Number(item))}
            >
                {typeof (item) === "number" ? Number(item) + 1 : item}
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




