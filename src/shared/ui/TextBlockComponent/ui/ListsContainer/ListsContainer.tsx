import React, {FC} from 'react';
import css from "./ListsContainer.module.scss";
import {List} from "entities/text-block";
import HTMLReactParser from "html-react-parser";

interface ListsProps{
    lists:List[]
}

const ListsContainer:FC<ListsProps> = ({lists}) => {
    return (
        <div className={css.listsContainer}>
            {lists?.map(list => (
                <div>
                    <p className={css.listTitle}>{HTMLReactParser(list.title)}</p>
                    <ul className={css.list}>
                        {list.items.map(i => (
                            <li className={css.listItem}>{i}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ListsContainer;