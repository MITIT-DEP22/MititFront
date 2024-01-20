import React, {FC} from 'react';
import css from "./oListsContainer.module.scss";
import HTMLReactParser from "html-react-parser";
import {List} from "entities/text-block";

interface ListsProps {
    list: List;
    id?:number;
}

const OListsContainer: FC<ListsProps> = ({list,id}) => {
    return (
        <div className={css.listsContainer}>
            <div key={`u-list_${id}`}>
                <div className={css.listTitle}>{list.title && HTMLReactParser(list?.title)}</div>
                <ol  type={"1"} className={css.list}>
                    {list.items.map((i,index2) => (
                        <li key={`u-list_item_${index2}_${id}`} className={css.listItem}>{HTMLReactParser(i)}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};


export default OListsContainer;