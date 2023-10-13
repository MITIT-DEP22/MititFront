import React, {FC} from 'react';
import css from "./TablesContainer.module.scss";
import {Table} from "entities/text-block/model/types";
import HTMLReactParser from "html-react-parser";

interface TablesProps {
    tables: Table[];
}

const TablesContainer: FC<TablesProps> = ({tables}) => {


    return (
        <div className={css.tablesContainer}>{
            tables.map(table => (
                    <table className={css.table}>
                        <tr>
                            {table.headers.map(header => (
                                <th colSpan={table.headers.length !== table.rows[0].elements.length ? table.rows[0].elements.length : 1}
                                    className={css.header}> {HTMLReactParser(header)}</th>
                            ))}
                        </tr>
                        {table.rows.map(row => (
                            <tr className={css.row}>
                                {row.elements.map(item => (
                                    <td className={css.rowElement}>
                                        {
                                            item.value.map(r => (
                                                <div
                                                    className={`${css.tableElement} ${item.value.length > 1 && css.tableElementMany}`}>
                                                    {HTMLReactParser(r)}
                                                </div>
                                            ))
                                        }
                                    </td>
                                ))}
                            </tr>

                        ))}
                    </table>
                )
            )
        }
        </div>
    );
};

export default TablesContainer;