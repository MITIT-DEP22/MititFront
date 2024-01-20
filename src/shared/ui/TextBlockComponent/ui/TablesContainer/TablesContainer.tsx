import React, {FC} from 'react';
import css from "./TablesContainer.module.scss";
import {Table} from "entities/text-block/model/types";
import HTMLReactParser from "html-react-parser";
interface TablesProps {
    table: Table;
    id?: number;
}

const TablesContainer: FC<TablesProps> = ({table, id}) => {
    return (
        <div className={css.tablesContainer}>
            <div key={`table_${id}`} className={css.table}>
                {table.rows.map((row, index2) => (
                    <div key={`table_row_${index2}_${id}`} className={css.row}>
                        {row.elements.map((item, index4) => (
                            <div  key={`table_row_${index2}_row-element_${index4}_${id}`}
                                  className={css.rowElement}>
                                {
                                    item.value.map((r, index3) => (
                                        <div key={`table_row_${index2}_element_${index3}_${id}`}
                                             className={`${css.tableElement} ${item.value.length > 1 && css.tableElementMany}`}>
                                            {HTMLReactParser(r)}
                                        </div>

                                    ))
                                }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TablesContainer;