import React, {FC} from 'react';
import css from "./uListsContainer.module.scss";
import {List} from "entities/text-block";
import HTMLReactParser from "html-react-parser";

interface ListsProps {
    lists: List[]
}

const UListsContainer: FC<ListsProps> = ({lists}) => {
    return (
        <div className={css.listsContainer}>
            {lists?.map(list => (
                <div>
                    <p className={css.listTitle}>{list.title && HTMLReactParser(list?.title)}</p>
                    <ul className={css.list}>
                        {list.items.map(i => (
                            <li className={css.listItem}>{HTMLReactParser(i)}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default UListsContainer;