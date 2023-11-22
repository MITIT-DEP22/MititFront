import React from 'react';
import css from "./Pagination.module.scss"
import newsStore from "../../../../entities/news/store/news-page-store";
import {observer} from "mobx-react";
import ReactPaginate from "react-paginate";

const Pagination = observer(() => {

    const {countPages} = newsStore
    return (
        <ReactPaginate className={css.container}
                       breakLabel="..."
                       nextLabel=">"
                       onPageChange={(selectedItem) => {
                           newsStore.changePage(selectedItem.selected);
                       }}
                       breakClassName={css.separator}
                       pageClassName={css.link}
                       nextLinkClassName={css.link}
                       previousClassName={css.link}
                       marginPagesDisplayed={1}
                       activeClassName={css.paginationBtn_active}
                       pageRangeDisplayed={4}
                       pageCount={countPages}
                       previousLabel="<"
                       renderOnZeroPageCount={null}
        />
    )

});

export default Pagination;
