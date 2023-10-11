import React, {FC} from 'react';
import css from "./TablesContainer.module.scss";
import {Table} from "entities/text-block/model/types";

interface TablesProps {
    tables: Table[]
}

const TablesContainer: FC<TablesProps> = ({tables}) => {
    return (
        <div className={css.tablesContainer}>{
            tables.map(table => (
                    <table className={css.table}>
                        <tr>
                            {table.headers.map(header => (
                                <td> {header}</td>
                            ))}
                        </tr>
                        {table.rows.map(row => (
                            <tr>
                                {row.value.map(item => (
                                    <td>{item}</td>
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