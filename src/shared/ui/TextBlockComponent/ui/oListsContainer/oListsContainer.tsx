import React, {FC} from 'react';
import css from "./oListsContainer.module.scss";
import HTMLReactParser from "html-react-parser";
import {List} from "entities/text-block";

interface ListsProps {
    lists: List[]
}

const OListsContainer: FC<ListsProps> = ({lists}) => {
    return (
        <div className={css.listsContainer}>
            {lists?.map(list => (
                <div>
                    <p className={css.listTitle}>{list.title && HTMLReactParser(list?.title)}</p>
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

export default OListsContainer;