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
                    <ol  type={"a"} className={css.list}>
                        {list.items.map((i,index) => (
                            <li className={css.listItem}>{index+1}.  {HTMLReactParser(i)}</li>
                        ))}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default OListsContainer;