import React from 'react';
import css from "./Pagination.module.scss"
import newsStore from "../../../../entities/news/store/news-page-store";
import {observer} from "mobx-react";
import ReactPaginate from "react-paginate";

const Pagination = observer(() => {

    const {countPages, changePage} = newsStore
    return (
        <ReactPaginate className={css.container}
                       breakLabel="..."
                       nextLabel=">"
                       onPageChange={(selectedItem) => {
                           changePage(selectedItem.selected);
                       }}
                       activeClassName={css.paginationBtn_active}
                       pageRangeDisplayed={5}
                       pageCount={countPages}
                       previousLabel="<"
                       renderOnZeroPageCount={null}
        />
    )

});

export default Pagination;
