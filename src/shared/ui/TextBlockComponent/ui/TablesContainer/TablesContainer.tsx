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
                                <td className={css.tableElement}> {header}</td>
                            ))}
                        </tr>
                        {table.rows.map(row => (
                            <tr>
                                {row.elements.map(item => (
                                    <td>
                                        {
                                            item.value.map(r => (
                                                <tr>
                                                    <div
                                                        className={`${css.tableElement} ${item.value.length > 1 && css.tableElementMany}`}> {HTMLReactParser(r)}</div>
                                                </tr>
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