import React, {FC} from 'react';
import css from "./uListsContainer.module.scss";
import {List} from "entities/text-block";
import HTMLReactParser from "html-react-parser";

interface ListsProps {
    lists: List[];
    id?:number;
}

const UListsContainer: FC<ListsProps> = ({lists,id}) => {
    return (
        <div className={css.listsContainer}>
            {lists?.map((list,index) => (
                <div key={`u-list_${index}_${id}`}>
                    <p className={css.listTitle}>{list.title && HTMLReactParser(list?.title)}</p>
                    <ul className={css.list}>
                        {list.items.map((i, index2) => (
                            <li key={`u-list_${index}_item_${index2}_${id}`} className={css.listItem}>{HTMLReactParser(i)}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default UListsContainer;