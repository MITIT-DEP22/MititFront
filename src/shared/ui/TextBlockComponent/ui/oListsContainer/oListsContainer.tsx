import React, {FC} from 'react';
import css from "./oListsContainer.module.scss";
import HTMLReactParser from "html-react-parser";
import {List} from "entities/text-block";

interface ListsProps {
    lists: List[];
    id?:number;
}

const OListsContainer: FC<ListsProps> = ({lists,id}) => {
    return (
        <div className={css.listsContainer}>
            {lists?.map((list,index) => (
                <div key={`u-list_${index}_${id}`}>
                    <div className={css.listTitle}>{list.title && HTMLReactParser(list?.title)}</div>
                    <ol  type={"1"} className={css.list}>
                        {list.items.map((i,index2) => (
                            <li key={`u-list_${index}_item_${index2}_${id}`} className={css.listItem}>{HTMLReactParser(i)}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default OListsContainer;