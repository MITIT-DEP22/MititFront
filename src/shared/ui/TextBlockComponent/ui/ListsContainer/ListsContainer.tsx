import React, {FC} from 'react';
import css from "./ListsContainer.module.scss";
import {List} from "entities/text-block";

interface ListsProps{
    lists:List[]
}

const ListsContainer:FC<ListsProps> = ({lists}) => {
    return (
        <div className={css.listsContainer}>
            {lists?.map(list => (
                <>
                    <p className={css.listTitle}>{list.title}</p>
                    <ul className={css.list}>
                        {list.items.map(i => (
                            <li className={css.listItem}>{i}</li>
                        ))}
                    </ul>
                </>
            ))}
        </div>
    );
};

export default ListsContainer;